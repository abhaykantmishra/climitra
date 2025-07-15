import React, { useEffect, useRef, useState } from 'react';

const cardsData = [
  {
    title: 'CO₂ Removed',
    from: 0,
    to: 7,
    unit: 'M Ton',
    image: 'images/CO2.png',
  },
  {
    title: 'Rural Livelihoods Created',
    from: 0,
    to: 100000,
    unit: '',
    image: 'images/House.png',
  },
  {
    title: 'Coal Replaced',
    from: 0,
    to: 3.8,
    unit: 'M Ton',
    image: 'images/screw.png',
  },
  {
    title: 'Waste-Biomass Repurposed',
    from: 0,
    to: 15,
    unit: 'M Ton',
    image: 'images/Recycle.png',
  },
];

const AnimatedImpact = () => {
  const [values, setValues] = useState(cardsData.map((c) => c.from));
  const [year, setYear] = useState(2025);
  const containerRef = useRef(null);
  const animationStarted = useRef(false);
  const timerRef = useRef(null);

  const format = (val, unit) => {
    if (unit.includes('M')) return `${val.toFixed(1)} ${unit}`;
    return `${Math.round(val).toLocaleString()} ${unit}`;
  };

  const animateValues = (from, to, duration = 1200, animateYear = false) => {
    const start = performance.now();
    const startYear = 2025;
    const endYear = 2035;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const newValues = from.map((f, i) => f + (to[i] - f) * progress);
      setValues(newValues);

      if (animateYear) {
        const newYear = Math.round(startYear + (endYear - startYear) * progress);
        setYear(newYear);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValues(to);
        setYear(2035);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          const toValues = cardsData.map((c) => c.to);

          animateValues(cardsData.map((c) => c.from), toValues, 1200, true);

          timerRef.current = setInterval(() => {
            setValues(cardsData.map((c) => c.from));
            setYear(2025);
            setTimeout(() => {
              animateValues(cardsData.map((c) => c.from), toValues, 1200, true);
            }, 500);
          }, 5000);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="bg-[#F0FFF9] py-16 px-4" ref={containerRef}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-montserrat text-neutral-950">
          Projected Impact by <span className="text-teal-800">{year}</span>
        </h2>
        <div className="mt-4 w-24 sm:w-32 mx-auto border-t-4 border-teal-800" />
      </div>

      {/* Cards container with 11.4375rem left and right padding on large screens */}
      <div className="mt-12 grid gap-8 md:gap-12 lg:gap-16 grid-cols-[repeat(auto-fit,minmax(8.75rem,1fr))] px-4 sm:px-8 lg:px-[11.4375rem]">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center"
          >
            <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#1C6248] flex items-center justify-center mb-4 shadow-md">
              <img
                src={card.image}
                alt={card.title}
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
            </div>

            <div className="text-teal-800 text-lg sm:text-xl md:text-2xl font-semibold font-montserrat">
              {format(values[i], card.unit)}
            </div>

            <div className="text-zinc-600 text-sm sm:text-base md:text-lg text-center mt-2 font-montserrat">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedImpact;
