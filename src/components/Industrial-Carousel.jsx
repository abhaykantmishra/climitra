"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const integrationItems = [
  {
    id: 0,
    icon: "/images/Mask group (43).png",
    title: "Verified Decarbonization Impact",
    description: "Every ton of coal replaced with biochar saves up to 2.5 tons of CO₂ — with enhanced carbothermal efficiency over coal.",
  },
  {
    id: 1,
    icon: "/images/Mask group (41).png",
    title: "Plug-and-Play Compatibility",
    description: "Up to 40% PCI coal substitution in blast furnaces — no infrastructure modifications needed.",
  },
  {
    id: 2,
    icon: "/images/Mask group (42).png",
    title: "Precision-Engineered Biochar",
    description:
      "Each batch is customized across 25+ parameters to meet plant-specific specs like calorific value, ash content, volatile matter, ash, moisture, and fixed carbon.",
  },
  {
    id: 3,
    icon: "/images/Mask group (44).png",
    title: "Commercially Competitive",
    description:
      "Designed to compete with fossil fuels on both performance and reliability — without compromising financial margins.",
  },
]

function IntegrationCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentSlide < integrationItems.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  // Simple approach: Calculate exact center and move selected card there
  const cardWidth = 39.375 * 16 // 630px
  const gap = 2 * 16 // 32px
  
  // Calculate the exact center of the viewport
  const viewportCenter = windowWidth / 2
  
  // Calculate how far each card is from the start (left edge of first card)
  const cardPosition = currentSlide * (cardWidth + gap)
  
  // To center the selected card, we need to move it so its center aligns with viewport center
  // Move the entire container so the selected card's center is at viewport center
  const translateXValue = viewportCenter - cardPosition - (cardWidth / 2)

  return (
    <div className="w-full bg-[#FDFDFD] py-10 md:py-20">
      {/* TEXT SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 md:mb-20">
            <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-semibold text-center mx-auto mb-4 px-4"
                style={{ 
                    maxWidth: '822px', 
                    fontSize: 'clamp(24px, 4vw, 36px)', 
                    lineHeight: 'clamp(32px, 5vw, 44px)', 
                    letterSpacing: '0%' 
                }}
            >
                <span className="text-[#0C0C0C]">Seamless </span>
                <span className="text-[#1C6248]">Integration</span>
                <span className="text-[#0C0C0C]">, Engineered </span>
                <span className="text-[#1C6248]">Backward</span>
            </h1>
            <div className="w-20 sm:w-24 md:w-[8.375rem] h-1 bg-[#1C6248] mx-auto mb-4 sm:mb-6" />
            <p
                className="font-montserrat font-normal text-sm sm:text-base md:text-lg lg:text-[1.25rem] leading-relaxed sm:leading-[1.6rem] md:leading-[1.875rem] text-[#6C6C6C] mx-auto text-center px-4"
                style={{ maxWidth: '1016px' }}
            >
                We don't expect industry to adapt to us — we build to fit them. Climitra's systems are reverse-engineered from each steel plant's unique process requirements, enabling frictionless onboarding and fast adoption.
            </p>
        </div>

      {/* DESKTOP CAROUSEL */}
      <div className="hidden lg:block relative w-full pb-12">
        <div className="relative w-full h-[18rem] flex items-center overflow-hidden">
          <div className="relative w-full flex items-center">
            {/* Container that slides left/right to bring selected card to center */}
            <div
              className="flex items-center gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(${translateXValue}px)`,
              }}
            >
              {integrationItems.map((item, index) => {
                const isCenter = index === currentSlide

                return (
                  <div
                    key={`integration-card-desktop-${index}`}
                    className="flex-shrink-0 cursor-pointer transition-all duration-700 ease-out"
                    style={{
                      opacity: isCenter ? 1 : 0.15,
                      transform: isCenter ? "scale(1)" : "scale(0.75)",
                    }}
                    onClick={() => setCurrentSlide(index)}
                  >
                    {/* Card structure for both active and inactive states */}
                    <div className="relative w-[39.375rem] h-[18rem] bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-xl p-6 flex items-center border border-[#E5E5E5]">
                      <div className="absolute left-[-3rem] top-1/2 -translate-y-1/2 w-24 h-24 bg-[#1C6248] rounded-full flex items-center justify-center">
                        <img
                          src={item.icon || "/placeholder.svg"}
                          alt={item.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="ml-[6rem] flex flex-col text-left">
                        <h3 className="text-2xl font-bold text-[#1C6248] font-montserrat mb-2">{item.title}</h3>
                        <p className="text-lg text-[#0C0C0C] font-montserrat leading-6">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots + Arrows for Desktop */}
        <div className="absolute top-[calc(100%)] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="flex gap-3 mb-2">
            {integrationItems.map((_, index) => (
              <button
                key={`dot-desktop-${index}`}
                onClick={() => setCurrentSlide(index)}
                className={`rounded-full transition-all ${
                  currentSlide === index ? "bg-[#1C6248] w-4 h-4" : "bg-[#D9D9D9] w-3 h-3"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentSlide === 0 ? "bg-gray-200 cursor-not-allowed" : "bg-[#F0FFF9] hover:bg-[#E0F5E9]"
              }`}
            >
              <ChevronLeft className={`w-5 h-5 ${currentSlide === 0 ? "text-gray-400" : "text-[#1C6248]"}`} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === integrationItems.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentSlide === integrationItems.length - 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-[#F0FFF9] hover:bg-[#E0F5E9]"
              }`}
            >
              <ChevronRight
                className={`w-5 h-5 ${currentSlide === integrationItems.length - 1 ? "text-gray-400" : "text-[#1C6248]"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE STACKED VIEW */}
      <div className="block lg:hidden px-4 sm:px-6 space-y-6">
        {integrationItems.map((item, index) => (
          <div
            key={`integration-card-mobile-${index}`}
            className="w-full bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-md p-6 flex items-center border border-[#E5E5E5]"
          >
            <div className="w-16 h-16 bg-[#1C6248] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
              <img src={item.icon || "/placeholder.svg"} alt={item.title} className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1C6248] font-montserrat mb-2">{item.title}</h3>
              <p className="text-sm text-[#0C0C0C] font-montserrat leading-5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IntegrationCarousel