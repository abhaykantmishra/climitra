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
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=596",
  },
]

export default function BiocharBenefits() {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300 // Adjust scroll amount as needed
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
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
          Biochar converts biomass into stable, carbon-rich material through pyrolysis, locking away atmospheric CO₂ in
          soil for centuries while enhancing ecosystem health.
        </p>
      </div>

      <div className="relative container mx-auto px-4">
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
                className="w-full sm:w-[280px] md:w-[320px] lg:w-[360px] sm:flex-shrink-0 rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
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
                <div className="w-full h-40 rounded-lg overflow-hidden">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    width={596}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Left Navigation arrow - hidden on mobile, visible on tablet and up */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
            style={{ border: "none", cursor: "pointer", padding: 0 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
        )}
        {/* Right Navigation arrow - hidden on mobile, visible on tablet and up */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md w-10 h-10 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
            style={{ border: "none", cursor: "pointer", padding: 0 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        )}
      </div>
    </section>
  )
}
