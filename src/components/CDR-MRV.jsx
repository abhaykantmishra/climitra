import { useState, useEffect, useRef } from "react"

function DigitalMRVStandards() {
  const features = [
    {
      icon: "images/measure.png",
      title: "Measurability",
      description:
        "AI-driven measurement delivering accurate, continuous monitoring and data insights.",
      isHighlighted: false,
    },
    {
      icon: "images/performance.png",
      title: "Permanence",
      description:
        "Biochar remains stable for 100-1000 years with independently verified stability testing",
      isHighlighted: false,
    },
    {
      icon: "images/leaf.png",
      title: "Additionality",
      description:
        "Converting waste that would otherwise decompose, creating new carbon sinks",
      isHighlighted: false,
    },
    {
      icon: "images/verify.png",
      title: "Verification",
      description:
        "Independent verification by recognized carbon standard bodies",
      isHighlighted: false,
    },
  ];

  const [highlightedIndex, setHighlightedIndex] = useState(null)
  const [isComponentInView, setIsComponentInView] = useState(false)
  const featureRefs = useRef([])
  const componentRef = useRef(null)

  useEffect(() => {
    const componentObserver = new IntersectionObserver(
      ([entry]) => {
        setIsComponentInView(entry.isIntersecting)
        if (!entry.isIntersecting) {
          setHighlightedIndex(null)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      },
    )

    if (componentRef.current) {
      componentObserver.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        componentObserver.unobserve(componentRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const featureObserver = new IntersectionObserver(
      (entries) => {
        if (!isComponentInView) {
          setHighlightedIndex(null)
          return
        }

        let newHighlightedIndex = null
        let maxRatio = 0

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.findIndex((ref) => ref === entry.target)
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio
              newHighlightedIndex = index
            }
          }
        })
        setHighlightedIndex(newHighlightedIndex)
      },
      {
        root: null,
        rootMargin: "300px",
        threshold: 0.9,
      },
    )

    featureRefs.current.forEach((ref) => {
      if (ref) {
        featureObserver.observe(ref)
      }
    })

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) {
          featureObserver.unobserve(ref)
        }
      })
    }
  }, [isComponentInView])

  return (
    <div ref={componentRef} className="w-full block md:hidden bg-[#FDFDFD] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-montserrat">
              <span className="text-[#0C0C0C]">Rigorous </span>
              <span className="text-[#1C6248]">Digital MRV</span>
              <span className="text-[#0C0C0C]"> Standards</span>
            </h2>
          </div>
          <div className="w-[8.375rem] h-1 bg-[#1C6248] mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-[#5D5D5D] font-montserrat leading-7 md:leading-8 max-w-4xl mx-auto px-4">
            Climitra delivers CDR solutions that meet the strictest standards, helping partners achieve net zero
            commitments with confidence.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const isHighlighted = index === highlightedIndex
            return (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="flex flex-col items-center text-center transition-all duration-300 ease-in-out"
              >
                <div
                  className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300 ${
                    isHighlighted ? "bg-[#1C6248]" : "bg-slate-200 border border-[#C2C2C2]"
                  }`}
                >
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    className={`w-8 h-8 md:w-9 md:h-9 transition-filter duration-300 ${
                      isHighlighted ? "filter brightness-0 invert" : "text-black"
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg md:text-xl font-semibold font-montserrat mb-4 md:mb-6 transition-colors duration-300 ${
                    isHighlighted ? "text-[#1C6248]" : "text-[#0C0C0C]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#5D5D5D] font-montserrat leading-5 md:leading-6">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DigitalMRVStandards