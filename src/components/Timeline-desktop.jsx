import { useState, useEffect, useRef } from "react"

function TimelineComponent() {

  const handleNavigation = (section) => {
    if (window.navigateTo) {
      window.navigateTo(section);
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
    { progress: 0.55, x: 36.625, y: 68.875, sections: [0, 1, 2], boxType: "biochar" },
    // Step 7: Split - main box moves right, reveal section 4 earlier
    { progress: 0.65, x: 62.955, y: 67.875, sections: [0, 1, 2, 3], boxType: "biochar" },
    // Step 8: Continue parallel movement
    { progress: 0.75, x: 36.625, y: 67.875, sections: [0, 1, 2, 3], boxType: "biochar" },
    // Step 9: Move down to fourth level
    { progress: 0.85, x: 36.625, y: 88.125, sections: [0, 1, 2, 3], boxType: "biochar" },
    // Step 10: Final position - left
    { progress: 1, x: 15.375, y: 88.125, sections: [0, 1, 2, 3], boxType: "biochar" },
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
    <div className="w-full hidden lg:block bg-white md:mb-2">
      <div ref={timelineRef} className="w-full max-w-[80.0rem] xl:max-h-[200vh] lg:min-h-[250vh] relative bg-white overflow-hidden mx-auto">
        <style jsx>{`
          .moving-box {
            position: absolute;
            z-index: 30;
            transform: translateZ(0);
            will-change: transform;
          }
          .section-fade-in {
            transition: opacity 0.3s ease-out;
          }
          .timeline-line {
            transition: opacity 0.2s ease-out;
          }
        `}</style>

        {/* Header */}
        <div className="w-[37.5625rem] left-[21.1875rem] top-[2.0rem] absolute text-center justify-start">
          <span className="text-neutral-950 text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">
            Behind the{" "}
          </span>
          <span className="text-[#1c6248] text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">
            Climitra Engine
          </span>
        </div>
        <div className="w-32 h-0 left-[35.8125rem] top-[5.75rem] absolute outline outline-2 outline-offset-[-0.125rem] outline-[#1c6248]"></div>
        <div className="w-[63.5rem] left-[8.25rem] top-[8.125rem] absolute text-center justify-center">
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose">Building a </span>
          <span className="text-[#1c6248] text-xl font-semibold font-['Montserrat'] leading-loose">
            vertically integrated ecosystem
          </span>
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose">
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
            <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold font-['Montserrat'] leading-none">
              {boxType === "biomass" ? "Biomass" : "Biochar"}
            </div>
          </div>
        )}

      

        {/* TIMELINE INFRASTRUCTURE */}
        <div className="w-80 h-0 left-[43.4375rem] top-[23.3125rem] absolute border-t-2 border-dotted border-[#1c6248] z-1"></div>
        <div className="w-80 h-0 left-[40.0rem] top-[23.5rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-[#1c6248] z-1"></div>

        {/* Progressive timeline lines*/}
        <div
          className={`w-96 h-0 left-[17.0625rem] top-[47.375rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-[#1c6248] z-1 timeline-line ${visibleSections.includes(1) ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div
          className={`w-80 h-0 left-[43.4375rem] top-[68.875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line ${visibleSections.includes(2) ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div
          className={`w-96 h-0 left-[16.75rem] top-[89.125rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line ${visibleSections.includes(3) ? "opacity-100" : "opacity-0"}`}
        ></div>

        {/* Vertical connecting lines */}
        <div
          className={`w-0 h-60 left-[40.0rem] top-[50.1875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line ${visibleSections.includes(1) ? "opacity-100" : "opacity-0"}`}
        ></div>
        <div
          className={`w-0 h-64 left-[40.0rem] top-[70.875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-lime-500 z-1 timeline-line ${visibleSections.includes(2) ? "opacity-100" : "opacity-0"}`}
        ></div>

        {/* SECTION 1 - Biomass Mapping (Always visible) */}
        <div className="w-28 h-28 left-[36.625rem] top-[19.875rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50">
          <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
        </div>
        <img
          className="w-8 h-8 left-[62.955rem] top-[22.3125rem] absolute z-15"
          src="/images/ellipse-124.svg" 
          alt="Ellipse"
        />
        <div className="w-28 h-28 left-[68.875rem] top-[19.875rem] absolute bg-white overflow-hidden flex items-center justify-center z-5">
          <img src="images/satellite.png" alt="Satellite" className="w-24 h-24 object-contain" />
        </div>
        <div className="px-4 py-[0.3125rem] left-[45.125rem] top-[28.0rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden z-5">
          <div className="justify-start text-[#1c6248] text-2xl font-semibold font-['Montserrat'] leading-7">
            Biomass Mapping and Mobilisation
          </div>
        </div>
        <div className="w-96 left-[46.5625rem] top-[32.3125rem] absolute inline-flex flex-col justify-start items-start gap-5 z-5">
          <div className="w-96 text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We digitize biomass supply chains using AI-led satellite mapping and local intel, mobilizing 1,000+ tons/day
            to meet industrial specs—solving visibility, quality, and logistics at scale for steel decarbonization.
          </div>
        </div>
        <button onClick={() => {handleNavigation("tech")}} className="w-40 h-10 px-5 py-3 left-[66.5625rem] top-[41.0625rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden z-5">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
            Know More
          </span>
        </button>

        {/* SECTION 2 - Bespoke Conversion Technology */}
        <div
          className={`w-28 h-28 left-[36.625rem] top-[43.8125rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 section-fade-in ${visibleSections.includes(1) ? "opacity-100" : "opacity-0"}`}
        >
          <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
        </div>
        <div className={`section-fade-in z-5 ${visibleSections.includes(1) ? "opacity-100" : "opacity-0"}`}>
          <img
            className="w-24 h-24 left-[5.5rem] top-[44.375rem] absolute"
            src="images/fire.png"
            alt="Fire"
          />
          <div className="px-4 py-[0.3125rem] left-[5.5rem] top-[51.875rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="justify-start text-[#1c6248] text-2xl font-semibold font-['Montserrat'] leading-7">
              Bespoke Conversion Technology
            </div>
          </div>
          <div className="w-96 left-[5.5rem] top-[56.1875rem] absolute inline-flex flex-col justify-start items-start gap-5">
            <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
              We build advanced pyrolysis systems tailored to local biomass, delivering consistent quality across 25+ parameters including calorific value, volatile matter, ash, moisture, and fixed carbon.
            </div>
          </div>
          <button onClick={() => {handleNavigation("tech")}}  className="w-40 h-10 px-5 py-3 left-[5.5rem] top-[64.9375rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
              Know More
            </span>
          </button>
        </div>
        <img
          className={`w-8 h-8 left-[15.0625rem] top-[46.375rem] absolute z-15 section-fade-in ${visibleSections.includes(1) ? "opacity-100" : "opacity-0"}`}
          src="/images/ellipse-124.svg" 
          alt="Ellipse"
        />

        {/* SECTION 3 - Industrial Decarbonization */}
        <div
          className={`w-28 h-28 left-[36.625rem] top-[65.4375rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 section-fade-in ${visibleSections.includes(2) ? "opacity-100" : "opacity-0"}`}
        >
          <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
        </div>
        <div className={`section-fade-in ${visibleSections.includes(2) ? "opacity-100" : "opacity-0"}`}>
          <img
            className="w-24 h-24 left-[68.875rem] top-[66.0625rem] absolute z-5"
            src="images/smoke.png"
            alt="Industrial"
          />
          <div className="px-4 py-[0.3125rem] left-[51.75rem] top-[73.5625rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden z-5">
            <div className="justify-start text-[#1c6248] text-2xl font-semibold font-['Montserrat'] leading-7">
              Industrial Decarbonization
            </div>
          </div>
          <div className="w-96 left-[48.625rem] top-[77.875rem] absolute inline-flex flex-col justify-start items-start gap-5 z-5">
            <div className="self-stretch text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
              We integrate into steel plants with dynamic biochar blending, real-time emissions tracking, and ESG
              dashboards—fully aligned with CBAM, CCTS, and green steel compliance pathways.
            </div>
          </div>
          <button onClick={() => {handleNavigation("industrial")}}  className="w-40 h-10 px-5 py-3 left-[66.5625rem] top-[85.25rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden z-5">
            <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
              Know More
            </span>
          </button>
        </div>
        <img
          className={`w-8 h-8 left-[62.955rem] top-[67.875rem] absolute z-15 section-fade-in ${visibleSections.includes(2) ? "opacity-100" : "opacity-0"}`}
          src="/images/ellipse-124.svg" 
          alt="Ellipse"
        />

        {/* SECTION 4 - Carbon Market Integration */}
        <div
          className={`w-28 h-28 left-[36.625rem] top-[85.6875rem] absolute bg-white rounded-full overflow-hidden flex items-center justify-center z-50 section-fade-in ${visibleSections.includes(3) ? "opacity-100" : "opacity-0"}`}
        >
          <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-28 h-28 object-contain" />
        </div>
        <div className={`section-fade-in ${visibleSections.includes(3) ? "opacity-100" : "opacity-0"}`}>
          <img
            className="w-24 h-24 left-[5.875rem] top-[86.3125rem] absolute z-5"
            src="images/tree.png"
            alt="Carbon"
          />
          <div className="px-4 py-[0.3125rem] left-[5.875rem] top-[93.8125rem] absolute bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden z-5">
            <div className="justify-start text-[#1c6248] text-2xl font-semibold font-['Montserrat'] leading-7">
              Carbon Market Integration
            </div>
          </div>
          <div className="w-96 left-[5.875rem] top-[98.125rem] absolute inline-flex flex-col justify-start items-start gap-5 z-5">
            <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
              We generate high-integrity carbon removal credits through a digital MRV framework, enabling 100+ year
              carbon sequestration and access to both voluntary and compliance markets.
            </div>
          </div>
          <button onClick={() => {handleNavigation("cdr")}}  className="w-32 h-10 px-5 py-3 left-[5.875rem] top-[106.875rem] absolute bg-[#1c6248] rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-[#1c6248] inline-flex justify-center items-center gap-2.5 overflow-hidden z-5">
            <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">
              Know More
            </span>
          </button>
        </div>
        <img
          className={`w-8 h-8 left-[15.375rem] top-[88.125rem] absolute z-15 section-fade-in ${visibleSections.includes(3) ? "opacity-100" : "opacity-0"}`}
          src="/images/ellipse-124.svg" 
          alt="Ellipse"
        />

      </div>
    </div>
  )
}

export default TimelineComponent
