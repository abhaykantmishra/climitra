"use client"

import { useState, useEffect, useRef } from "react"

function TimelineComponent() {
  const handleNavigation = (section) => {
    if (window.navigateTo) {
      window.navigateTo(section)
    }
  }

  const [scrollProgress, setScrollProgress] = useState(0)
  const [boxPosition, setBoxPosition] = useState({ x: 68.875, y: 22.3125 })
  const [boxType, setBoxType] = useState("biomass")
  const [visibleSections, setVisibleSections] = useState([0])
  const [isBoxVisible, setIsBoxVisible] = useState(false)
  const [secondBoxPosition, setSecondBoxPosition] = useState({ x: 0, y: 0, visible: false })

  const timelineRef = useRef(null)

  // More immediate animation steps - faster progression
  const animationSteps = [
    // Step 0: Start position (rightmost part, section 1)
    { progress: 0, x: 60.875, y: 22.3125, sections: [0], boxType: "biomass" },
    // Step 1: Move to right junction dot - faster
    { progress: 0.05, x: 62.955, y: 22.3125, sections: [0], boxType: "biomass" },
    // Step 2: Move left to center junction - reveal section 2 earlier
    { progress: 0.15, x: 36.625, y: 22.25, sections: [0, 1], boxType: "biomass" },
    // Step 3: Move down to second level - transform to biochar
    { progress: 0.25, x: 36.625, y: 46.375, sections: [0, 1], boxType: "biomass" },
    // Step 4: Move left to second section
    { progress: 0.35, x: 15.0625, y: 46.375, sections: [0, 1], boxType: "biomass" },
    // Step 5: Move back to center - reveal section 3 earlier
    { progress: 0.45, x: 36.625, y: 46.375, sections: [0, 1, 2], boxType: "biochar" },
    // Step 6: Move down to third level
    { progress: 0.55, x: 36.625, y: 67.875, sections: [0, 1, 2], boxType: "engineered biofuel" },
    // Step 7: Split - main box moves right, reveal section 4 earlier
    { progress: 0.65, x: 62.955, y: 67.875, sections: [0, 1, 2, 3], boxType: "engineered biofuel" },
    // Step 8: Continue parallel movement
    { progress: 0.75, x: 36.625, y: 67.875, sections: [0, 1, 2, 3], boxType: "biochar" },
    // Step 9: Move down to fourth level
    { progress: 0.85, x: 36.625, y: 88.125, sections: [0, 1, 2, 3], boxType: "biofertilizer" },
    // Step 10: Final position - left
    { progress: 1, x: 15.375, y: 88.125, sections: [0, 1, 2, 3], boxType: "biofertilizer" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timelineElement = timelineRef.current
      const rect = timelineElement.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // More aggressive scroll detection
      const componentTop = rect.top
      const componentBottom = rect.bottom
      const componentHeight = rect.height

      // Check if component is in viewport
      if (componentBottom > 0 && componentTop < windowHeight) {
        setIsBoxVisible(true)

        let progress = 0

        if (componentTop <= windowHeight * 0.8) {
          const scrolledDistance = windowHeight * 0.5 - componentTop
          const maxScrollDistance = componentHeight - windowHeight * 0.2 // More responsive range
          progress = Math.min(1, scrolledDistance / maxScrollDistance)
        }

        progress = Math.max(0, Math.min(1, progress))

        progress = progress * progress * (3 - 2 * progress) // Smooth step function

        setScrollProgress(progress)

        let currentStep = animationSteps[0]
        let nextStep = animationSteps[1]

        for (let i = 0; i < animationSteps.length - 1; i++) {
          if (progress >= animationSteps[i].progress && progress <= animationSteps[i + 1].progress) {
            currentStep = animationSteps[i]
            nextStep = animationSteps[i + 1]
            break
          }
        }

        // If we're at the end, use the last step
        if (progress >= animationSteps[animationSteps.length - 1].progress) {
          currentStep = animationSteps[animationSteps.length - 1]
          nextStep = currentStep
        }

        // Immediate interpolation between steps
        const stepProgress =
          nextStep.progress === currentStep.progress
            ? 0
            : (progress - currentStep.progress) / (nextStep.progress - currentStep.progress)

        const x = currentStep.x + (nextStep.x - currentStep.x) * stepProgress
        const y = currentStep.y + (nextStep.y - currentStep.y) * stepProgress

        setBoxPosition({ x, y })
        setBoxType(currentStep.boxType)
        setVisibleSections(currentStep.sections)

        // Handle parallel movement for sections 3 and 4 - earlier trigger
        if (progress >= 0.55 && progress <= 0.75) {
          // Show second box moving in parallel
          const secondBoxX = progress >= 0.65 ? 15.375 : 36.625
          setSecondBoxPosition({
            x: secondBoxX,
            y: 88.125,
            visible: true,
          })
        } else {
          setSecondBoxPosition((prev) => ({ ...prev, visible: false }))
        }
      } else {
        setIsBoxVisible(false)
        setSecondBoxPosition((prev) => ({ ...prev, visible: false }))
      }
    }

    // Immediate scroll response
    const immediateScroll = () => {
      handleScroll()
    }

    window.addEventListener("scroll", immediateScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", immediateScroll)
  }, [])

  return (
    <div className="w-full h-full bg-white mb-2 px-2 sm:px-4 lg:px-6 hidden lg:block overflow-x-auto">
      <div
        ref={timelineRef}
        className="w-full relative bg-white mx-auto"
        style={{
          maxWidth: "none",
          // width: "100vw",
          height: "110rem",
          marginLeft: "calc(-50vw + 50%)",
          paddingLeft: "calc(50vw - 50%)",
          paddingRight: "calc(50vw - 50%)",
        }}
      >
        <style jsx>
          {`
  .timeline-container {
    width: 80rem;
    margin: 0 auto;
    position: relative;
  }

  @media (max-width: 640px) {
    .timeline-container {
      transform: scale(0.6);
      transform-origin: top center;
      width: 80rem;
      margin: 0 auto;
    }
    .responsive-text-lg { font-size: 0.875rem; }
    .responsive-text-xl { font-size: 1rem; }
    .responsive-text-2xl { font-size: 1.25rem; }
    .responsive-text-4xl { font-size: 1.875rem; }
  }

  @media (min-width: 641px) and (max-width: 768px) {
    .timeline-container {
      transform: scale(0.75);
      transform-origin: top center;
      width: 80rem;
      margin: 0 auto;
    }
    .responsive-text-lg { font-size: 1rem; }
    .responsive-text-xl { font-size: 1.125rem; }
    .responsive-text-2xl { font-size: 1.375rem; }
    .responsive-text-4xl { font-size: 2rem; }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .timeline-container {
      transform: scale(0.85);
      transform-origin: top center;
      width: 80rem;
      margin: 0 auto;
    }
    .responsive-text-lg { font-size: 1.125rem; }
    .responsive-text-xl { font-size: 1.25rem; }
    .responsive-text-2xl { font-size: 1.5rem; }
    .responsive-text-4xl { font-size: 2.25rem; }
  }

  @media (min-width: 1025px) {
    .timeline-container {
      transform: scale(1);
      transform-origin: top center;
      width: 80rem;
      margin: 0 auto;
    }
    .responsive-text-lg { font-size: 1.125rem; }
    .responsive-text-xl { font-size: 1.25rem; }
    .responsive-text-2xl { font-size: 1.5rem; }
    .responsive-text-4xl { font-size: 2.25rem; }
  }

  .moving-box {
    position: absolute;
    z-index: 30;
    transform: translateZ(0);
    will-change: transform;
  }
  .section-fade-in {
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .timeline-line {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  /* Enhanced Fly-in animations */
  .fly-in-right {
    transform: translateX(120px) scale(0.7) rotate(15deg);
    opacity: 0;
    transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .fly-in-right.visible {
    transform: translateX(0) scale(1) rotate(0deg);
    opacity: 1;
  }

  .fly-in-left {
    transform: translateX(-120px) scale(0.7) rotate(-15deg);
    opacity: 0;
    transition: all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .fly-in-left.visible {
    transform: translateX(0) scale(1) rotate(0deg);
    opacity: 1;
  }

  .fly-in-up {
    transform: translateY(80px) scale(0.8) rotate(5deg);
    opacity: 0;
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .fly-in-up.visible {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1;
  }

  .fly-in-bounce {
    transform: translateY(60px) scale(0.6) rotate(-10deg);
    opacity: 0;
    transition: all 1.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .fly-in-bounce.visible {
    transform: translateY(0) scale(1) rotate(0deg);
    opacity: 1;
  }

  /* Enhanced stagger delays */
  .stagger-1 { transition-delay: 0.2s; }
  .stagger-2 { transition-delay: 0.4s; }
  .stagger-3 { transition-delay: 0.6s; }
  .stagger-4 { transition-delay: 0.8s; }
  .stagger-5 { transition-delay: 1.0s; }

  /* Enhanced pulse glow */
  .pulse-glow {
    animation: pulseGlow 3s ease-in-out infinite alternate;
  }

  @keyframes pulseGlow {
    0% {
      box-shadow: 0 0 8px rgba(28, 98, 72, 0.4);
      transform: scale(1);
    }
    100% {
      box-shadow: 0 0 25px rgba(28, 98, 72, 0.8), 0 0 40px rgba(28, 98, 72, 0.5);
      transform: scale(1.05);
    }
  }

  /* Enhanced timeline line animations */
  .timeline-line-grow {
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .timeline-line-grow.visible {
    transform: scaleX(1);
  }

  .timeline-line-grow-vertical {
    transform: scaleY(0);
    transform-origin: top center;
    transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .timeline-line-grow-vertical.visible {
    transform: scaleY(1);
  }

  /* Cool floating animation for images */
  .float-animation {
    animation: floatUp 4s ease-in-out infinite alternate;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-10px) rotate(2deg);
    }
  }

  /* Shimmer effect for titles */
  .shimmer {
    background: linear-gradient(90deg, #1c6248 0%, #34d399 50%, #1c6248 100%);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`}
        </style>

        <div className="timeline-container overflow-visible">
          {/* Header */}
          <div className="w-[37.5625rem] left-[21.1875rem] top-[2.0rem] absolute text-center justify-start">
            <span className="text-neutral-950 responsive-text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">
              Inside the{" "}
            </span>
            <span className="text-[#1c6248] responsive-text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">
              Climitra Engine
            </span>
          </div>
          <div className="w-32 h-0 left-[35.8125rem] top-[5.75rem] absolute outline outline-2 outline-offset-[-0.125rem] outline-[#1c6248]"></div>
          <div className="w-[63.5rem] left-[8.25rem] top-[8.125rem] absolute text-center justify-center">
            <span className="text-neutral-500 responsive-text-xl font-normal font-['Montserrat'] leading-loose">
              India's only{" "}
            </span>
            <span className="text-[#1c6248] responsive-text-xl font-semibold font-['Montserrat'] leading-loose">
              vertically integrated ecosystem
            </span>
            <span className="text-neutral-500 responsive-text-xl font-normal font-['Montserrat'] leading-loose">
              {" "}
              for waste biomass-driven industrial decarbonization and carbon dioxide removal (CDR) in India
            </span>
          </div>

          {/* MAIN ANIMATED MOVING BOX */}
          {isBoxVisible && (
            <div
              className={`moving-box ${boxType === "biomass" ? "bg-[#1c6248]" : "bg-lime-500"} rounded-xl outline outline-2 outline-offset-[-0.125rem] ${boxType === "biomass" ? "outline-[#1c6248]" : "outline-lime-500"} overflow-hidden shadow-lg`}
              style={{
                transform: `translate(${boxPosition.x}rem, ${boxPosition.y}rem)`,
                width: "6rem",
                height: "2rem",
              }}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center text-white text-xs  font-['Montserrat'] leading-none ${boxType === "engineered biofuel" ? "ml-4" : ""}`}
              >
                {boxType === "biomass"
                  ? "Biomass"
                  : boxType === "engineered biofuel"
                    ? "Engineered Biofuel"
                    : boxType==="biofertilizer"?"Biofertilizer":"Biochar"}
              </div>
            </div>
          )}

          {/* TIMELINE INFRASTRUCTURE */}
          <div className="w-80 h-0 left-[43.4375rem] top-[23.3125rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-[#1c6248] z-1"></div>
          <div className="w-80 h-0 left-[40.0rem] top-[23.5rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-[#1c6248] z-1"></div>

          {/* Progressive timeline lines*/}
          <div
            className={`w-96 h-0 left-[17.0625rem] top-[47.375rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-[#1c6248] z-1 timeline-line-grow ${visibleSections.includes(1) ? "visible" : ""}`}
          ></div>
          <div
            className={`w-80 h-0 left-[43.4375rem] top-[68.875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line-grow ${visibleSections.includes(2) ? "visible" : ""}`}
          ></div>
          <div
            className={`w-96 h-0 left-[16.75rem] top-[89.125rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line-grow ${visibleSections.includes(3) ? "visible" : ""}`}
          ></div>

          {/* Vertical connecting lines */}
          <div
            className={`w-0 h-60 left-[40.0rem] top-[50.1875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line-grow-vertical ${visibleSections.includes(1) ? "visible" : ""}`}
          ></div>
          <div
            className={`w-0 h-60 left-[40.0rem] top-[70.875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line-grow-vertical ${visibleSections.includes(2) ? "visible" : ""}`}
          ></div>

          {/* SECTION 1 - Biomass Mapping (Always visible) */}
          <div className="w-28 h-28 left-[36.625rem] top-[19.875rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 pulse-glow">
            <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
          </div>
          <img
            className="w-8 h-8 left-[62.955rem] top-[22.3125rem] absolute z-15"
            src="/images/ellipse-124.svg"
            alt="Ellipse"
          />
          <div className="w-28 h-28 left-[68.875rem] top-[19.875rem] absolute bg-white overflow-hidden flex items-center justify-center z-5 fly-in-right visible">
            <img src="images/satellite.png" alt="Satellite" className="w-24 h-24 object-contain float-animation" />
          </div>
          <div
            className={`py-[0.3125rem] left-[59.9625rem] top-[28.0rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden z-5 fly-in-right stagger-1 visible`}
          >
            <div className="justify-start text-[#1c6248] responsive-text-2xl font-semibold font-['Montserrat'] leading-7 shimmer whitespace-nowrap">
              Biomass Mobilisation
            </div>
          </div>
          <div
            className={`w-96 left-[52.5625rem] top-[32.3125rem] absolute inline-flex flex-col justify-start items-start gap-5 z-5 fly-in-right stagger-2 visible`}
          >
            <div className="w-96 text-right justify-center text-neutral-500 responsive-text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
              We mobilize over 1,000 tons of biomass everyday using AI models built on satellite imagery, hyperspectral
              mapping and local intel, enabling us to solve critical supply chain gaps in visibility, quality and
              logistics for industrial decarbonization.
            </div>
          </div>
          <button
            onClick={() => {
              handleNavigation("tech")
            }}
            className={`w-40 h-10 px-5 py-3 left-[66.5625rem] top-[42.0625rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden z-5 fly-in-bounce stagger-3 visible hover:scale-105 transition-transform`}
          >
            <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
              Know More
            </span>
          </button>

          {/* SECTION 2 - Bespoke Conversion Technology */}
          <div
            className={`w-28 h-28 left-[36.625rem] top-[43.8125rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 fly-in-bounce ${visibleSections.includes(1) ? "visible" : ""} pulse-glow`}
          >
            <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
          </div>
          <div className={`z-5 ${visibleSections.includes(1) ? "visible" : ""}`}>
            <img
              className={`w-24 h-24 left-[5.5rem] top-[44.375rem] absolute fly-in-left ${visibleSections.includes(1) ? "visible" : ""}`}
              src="images/fire.png"
              alt="Fire"
            />
            <div
              className={`py-[0.3125rem] left-[5.5rem] top-[51.875rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden fly-in-left stagger-1 ${visibleSections.includes(1) ? "visible" : ""}`}
            >
              <div className="justify-start text-[#1c6248] responsive-text-2xl font-semibold font-['Montserrat'] leading-7 shimmer whitespace-nowrap">
                Bespoke Conversion Technology
              </div>
            </div>
            <div
              className={`w-96 left-[5.5rem] top-[56.1875rem] absolute inline-flex flex-col justify-start items-start gap-5 fly-in-left stagger-2 ${visibleSections.includes(1) ? "visible" : ""}`}
            >
              <div className="self-stretch justify-center text-neutral-500 responsive-text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
                We build advanced pyrolysis systems tailored to local biomass, delivering consistent quality across 25+
                parameters including calorific value, volatile matter, ash, moisture, and fixed carbon.
              </div>
            </div>
            <button
              onClick={() => {
                handleNavigation("tech")
              }}
              className={`w-40 h-10 px-5 py-3 left-[5.5rem] top-[64.9375rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden fly-in-bounce stagger-3 hover:scale-105 transition-transform ${visibleSections.includes(1) ? "visible" : ""}`}
            >
              <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
                Know More
              </span>
            </button>
          </div>
          <img
            className={`w-8 h-8 left-[15.0625rem] top-[46.375rem] absolute z-15 fly-in-up ${visibleSections.includes(1) ? "visible" : ""}`}
            src="/images/ellipse-124.svg"
            alt="Ellipse"
          />

          {/* SECTION 3 - Industrial Decarbonization */}
          <div
            className={`w-28 h-28 left-[36.625rem] top-[65.4375rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 fly-in-bounce ${visibleSections.includes(2) ? "visible" : ""} pulse-glow`}
          >
            <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
          </div>
          <div className={`${visibleSections.includes(2) ? "visible" : ""}`}>
            <img
              className={`w-24 h-24 left-[68.875rem] top-[66.0625rem] absolute z-5 fly-in-right ${visibleSections.includes(2) ? "visible" : ""}`}
              src="images/smoke.png"
              alt="Industrial"
            />
            <div
              className={`py-[0.3125rem] left-[56.20rem] top-[73.5625rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden z-5 fly-in-right stagger-1 ${visibleSections.includes(2) ? "visible" : ""}`}
            >
              <div className="justify-start text-[#1c6248] responsive-text-2xl font-semibold font-['Montserrat'] leading-7 shimmer whitespace-nowrap">
                Industrial Decarbonization
              </div>
            </div>
            <div
              className={`w-96 left-[52.625rem] top-[77.875rem] absolute inline-flex flex-col justify-start items-start gap-5 z-5 fly-in-right stagger-2 ${visibleSections.includes(2) ? "visible" : ""}`}
            >
              <div className="self-stretch text-right justify-center text-neutral-500 responsive-text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
                We integrate into industrial operations with dynamic biochar blending, real-time emissions tracking, and ESG
                dashboards fully aligned with CBAM, CCTS, and green steel compliance pathways.
              </div>
            </div>
            <button
              onClick={() => {
                handleNavigation("industrial")
              }}
              className={`w-40 h-10 px-5 py-3 left-[66.5625rem] top-[85.75rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden z-5 fly-in-bounce stagger-3 hover:scale-105 transition-transform ${visibleSections.includes(2) ? "visible" : ""}`}
            >
              <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
                Know More
              </span>
            </button>
          </div>
          <img
            className={`w-8 h-8 left-[62.955rem] top-[67.875rem] absolute z-15 fly-in-up ${visibleSections.includes(2) ? "visible" : ""}`}
            src="/images/ellipse-124.svg"
            alt="Ellipse"
          />

          {/* SECTION 4 - Carbon Market Integration */}
          <div
            className={`w-28 h-28 left-[36.625rem] top-[85.6875rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 fly-in-bounce ${visibleSections.includes(3) ? "visible" : ""} pulse-glow`}
          >
            <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
          </div>
          <div className={`${visibleSections.includes(3) ? "visible" : ""}`}>
            <img
              className={`w-24 h-24 left-[5.875rem] top-[86.3125rem] absolute z-5 fly-in-left ${visibleSections.includes(3) ? "visible" : ""}`}
              src="images/tree.png"
              alt="Carbon"
            />
            <div
              className={` py-[0.3125rem] left-[5.875rem] top-[93.8125rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden z-5 fly-in-left stagger-1 ${visibleSections.includes(3) ? "visible" : ""}`}
            >
              <div className="justify-start text-[#1c6248] responsive-text-2xl font-semibold font-['Montserrat'] leading-7 shimmer whitespace-nowrap">
                Carbon Market Integration
              </div>
            </div>
            <div
              className={`w-96 left-[5.875rem] top-[98.125rem] absolute inline-flex flex-col justify-start items-start gap-5 z-5 fly-in-left stagger-2 ${visibleSections.includes(3) ? "visible" : ""}`}
            >
              <div className="self-stretch justify-center text-neutral-500 responsive-text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
              We generate high-integrity carbon removal credits by integrating biochar directly into soil or converting it into bio-fertilizer, tracked through a digital MRV framework for 100+ year sequestration—unlocking both voluntary and compliance carbon markets.

              </div>
            </div>
            <button
              onClick={() => {
                handleNavigation("cdr")
              }}
              className={`w-32 h-10 px-5 py-3 left-[5.875rem] top-[107.875rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden z-5 fly-in-bounce stagger-3 hover:scale-105 transition-transform ${visibleSections.includes(3) ? "visible" : ""}`}
            >
              <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
                Know More
              </span>
            </button>
          </div>
          <img
            className={`w-8 h-8 left-[15.375rem] top-[88.125rem] absolute z-15 fly-in-up ${visibleSections.includes(3) ? "visible" : ""}`}
            src="/images/ellipse-124.svg"
            alt="Ellipse"
          />
        </div>
      </div>
    </div>
  )
}

export default TimelineComponent
