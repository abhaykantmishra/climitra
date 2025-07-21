"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sprout, Trash2, Users, Droplet } from "lucide-react"

const benefits = [
  {
    icon: Sprout,
    title: "Soil Enhancement",
    description: "Improves soil fertility, pH balance, and nutrient retention for sustainable agriculture",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dfbef6eab26dde9ecc689d5d54764276b7ce0cfe?width=596",
  },
  {
    icon: Trash2,
    title: "Waste Utilization",
    description: "Converts agricultural and forestry waste into valuable carbon removal resources",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/22c78f8e2e9bdeef1a0d93ed1298899b2a8cdce3?width=596",
  },
  {
    icon: Users,
    title: "Community Value",
    description: "Creates local economic opportunities while addressing environmental challenges",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ee9b4ef881b35d32ec7df1d7e546991b255ccd5?width=596",
  },
  {
    icon: Droplet,
    title: "Water Management",
    description: "Increases water retention capacity and reduces nutrient runoff into waterways",
    image: "/images/earth-312794_1280 1.png",
  },
]

export default function BiocharBenefits() {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerWidth = useRef(0)
  // const scrollContainerRef = useRef(null)
  const scroll = (dir) => {
    const container = scrollContainerRef.current;
  if (!container) return;
  // find one card
  const card = container.querySelector("[data-card]");
  const scrollAmount = card
    ? card.getBoundingClientRect().width
    : 300; // fallback
  container.scrollBy({
    left: dir === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      // Show right arrow if there's more content to the right
      // -1 to account for potential sub-pixel rendering differences
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1)
    }
  }

  // Initial check and re-check on resize
  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      handleScroll() // Initial check
      const resizeObserver = new ResizeObserver(handleScroll)
      resizeObserver.observe(container)
      return () => resizeObserver.disconnect()
    }
  }, [])

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Biochar: Nature{"'"}s Carbon Vault</h2>
        <div className="w-20 h-1 mx-auto mb-8" style={{ backgroundColor: "#059669" }} />
        <p className="text-lg text-gray-600 mb-12">
          Biomass is converted into stable, carbon-rich biochar through pyrolysis, storing atmospheric CO₂ in soil for centuries while improving soil and ecosystem health.
        </p>
      </div>

      <div className="relative container mx-auto  px-4 w-full max-w-[80.0rem] xl:max-h-[200vh]">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          // Mobile: flex-col, no overflow. Tablet/Desktop: flex-row, overflow-x-auto
          className="flex flex-col sm:flex-row sm:overflow-x-auto overflow-x-hidden scrollbar-hide pb-4 -mx-4 sm:mx-0"
        >
          <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-0">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                // Mobile: full width, no shrink. Tablet: fixed width, shrink. Desktop: fixed width, shrink.
                data-card
                className="w-full sm:w-[350px] md:w-[358px] lg:w-[378px] h-[432px] sm:flex-shrink-0 rounded-xl p-6 shadow-sm flex flex-col items-center text-center font-montserrat text-[18px]"
                style={{ backgroundColor: "#F0FDF4" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#059669" }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <div className="w-12 h-0.5 mx-auto mb-4" style={{ backgroundColor: "#059669" }} />
                <p className="text-sm text-gray-700 mb-6 flex-grow">{benefit.description}</p>
                <div className="w-full h-40 rounded-lg overflow-hidden aspect-[596/240]">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    width={298}
                    height={179}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Left Navigation arrow - hidden on mobile, visible on tablet and up */}
        {showLeftArrow && (
          <div className="rounded-full bg-white w-12 h-12 absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center"> 
          <button
            onClick={() => scroll("left")}
            className="absolute  bg-[#E7FFF7] rounded-full w-10 h-10 hidden sm:flex items-center justify-center"
            aria-label="Scroll left"
            style={{ border: "none", cursor: "pointer", padding: 0 }}
          >
            <ChevronLeft className="w-6 h-6 text-[#1c6248]" />
          </button>
          </div>
        )}
        {/* Right Navigation arrow - hidden on mobile, visible on tablet and up */}
        {showRightArrow && (
          <div className="rounded-full bg-white w-12 h-12 absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center"> 
          <button
            onClick={() => scroll("right")}
            className="absolute  bg-[#E7FFF7] rounded-full  w-10 h-10 hidden sm:flex items-center justify-center"
            aria-label="Scroll right"
            style={{ border: "none", cursor: "pointer", padding: 0 }}
          >
            <ChevronRight className="w-6 h-6 text-[#1c6248]" />
          </button>
          </div>
        )}
      </div>
    </section>
  )
}
