import { useState, useEffect, useRef } from "react";

function DigitalMRVStandards() {
  const features = [
    {
      icon: "images/measure.png",
      title: "Measurability",
      description:
        "AI-driven measurement delivering accurate, continuous monitoring and data insights",
    },
    {
      icon: "images/performance.png",
      title: "Permanence",
      description:
        "Biochar remains stable for 100-1000 years with independently verified stability testing",
    },
    {
      icon: "images/leaf.png",
      title: "Additionality",
      description:
        "Converting waste that would otherwise decompose, creating new carbon sinks",
    },
    {
      icon: "images/verify.png",
      title: "Verification",
      description:
        "Independent verification by recognized carbon standard bodies",
    },
  ];

  // State for highlighted index
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  // Track when component is in view
  const [isComponentInView, setIsComponentInView] = useState(false);
  // Track if screen is small (<640px)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  const featureRefs = useRef([]);
  const componentRef = useRef(null);

  // Observe section in/out of viewport
  useEffect(() => {
    const compObserver = new IntersectionObserver(
      ([entry]) => {
        setIsComponentInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setHighlightedIndex(null);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      compObserver.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        compObserver.unobserve(componentRef.current);
      }
      compObserver.disconnect();
    };
  }, []);

  // Update screen size state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
      // Reset highlight when switching modes
      setHighlightedIndex(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll-based highlight, only on small screens
  useEffect(() => {
    if (!isComponentInView || !isSmallScreen) return;

    const highlightLine = window.innerHeight * 0.4;

    function onScroll() {
      let bestIdx = null;
      let bestDist = Infinity;

      featureRefs.current.forEach((el, idx) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const dist = Math.abs(top - highlightLine);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setHighlightedIndex(bestIdx);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isComponentInView, isSmallScreen]);

  return (
    <div
      ref={componentRef}
      className="w-full bg-[#FDFDFD] py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-montserrat">
            <span className="text-[#0C0C0C]">Rigorous </span>
            <span className="text-[#1C6248]">Digital MRV</span>
            <span className="text-[#0C0C0C]"> Standards</span>
          </h2>
          <div className="w-[8.375rem] h-1 bg-[#1C6248] mx-auto my-4"></div>
          <p className="text-lg md:text-xl text-[#5D5D5D] font-montserrat leading-7 md:leading-8 max-w-4xl mx-auto px-4">
            Climitra delivers CDR solutions that meet the strictest standards,
            helping partners achieve net zero commitments with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, idx) => {
            const isHighlighted = idx === highlightedIndex;
            return (
              <div
                key={idx}
                ref={(el) => (featureRefs.current[idx] = el)}
                className="flex flex-col items-center text-center transition-all duration-300 ease-in-out"
                // Hover-based highlighting on md+ screens
                onMouseEnter={() => !isSmallScreen && setHighlightedIndex(idx)}
                onMouseLeave={() => !isSmallScreen && setHighlightedIndex(null)}
              >
                <div
                  className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300 ${
                    isHighlighted
                      ? "bg-[#1C6248]"
                      : "bg-[#1C6248] border border-[#C2C2C2]"
                  }`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className={`w-8 h-8 md:w-9 md:h-9 transition-filter duration-300 ${
                      isHighlighted ? "filter brightness-0 invert" : "filter brightness-0 invert"
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg md:text-xl font-semibold mb-4 md:mb-6 transition-colors duration-300 ${
                    isHighlighted ? "text-[#1C6248]" : "text-[#0C0C0C]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#5D5D5D] font-montserrat leading-5 md:leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DigitalMRVStandards;
