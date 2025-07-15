import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"


const carouselItems = [
    {
      icon: "images/smoke_cdr.png",
      title: "Balancing Residual Emissions",
      description:
        "Even with aggressive decarbonization, some industries will have hard-to-abate emissions. CDR provides the critical counterbalance needed for true carbon neutrally.",
    },
    {
      icon: "images/tree_cdr.png",
      title: 'The "Net" in Net Zero',
      description:
        "Emissions reduction alone is insufficient for stabilizing global temperatures. CDR ensures net zero is attainable by removing CO2 that's already there in the atmosphere",
    },
    {
      icon: "images/temp.png",
      title: "Climate Stability",
      description:
        "To limit warning to 1.5 C, we need both rapid emission cuts and large-scale carbon removal. CDR is not optional it's essential for climate stability",
    },
  ];

function CDRCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1) // Start with middle card

  const nextSlide = () => {
    if (currentSlide < carouselItems.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="w-full bg-[#FDFDFD] py-10 md:py-20">
      {/* TEXT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-montserrat mb-2 md:mb-4">
          <span className="text-[#0C0C0C]">The </span>
          <span className="text-[#1C6248]">CDR</span>
          <span className="text-[#0C0C0C]"> Imperative</span>
        </h1>
        <div className="w-[6rem] md:w-[8.375rem] h-0.5 md:h-1 bg-[#1C6248] mx-auto mb-4 md:mb-6" />
        <p className="text-base md:text-xl text-[#6C6C6C] font-montserrat leading-6 md:leading-8 max-w-4xl mx-auto">
          Carbon dioxide removal involves the deliberate extraction and long-term sequestration of atmospheric CO₂,
          serving as an indispensable pillar for achieving net zero emissions by counterbalancing residual,
          hard-to-abate emissions.
        </p>
      </div>

      {/* DESKTOP CAROUSEL */}
      <div className="hidden md:block relative w-full pb-12">
        <div className="relative w-full h-[25.2rem] flex justify-center items-center overflow-hidden">
          <div className="relative w-full flex items-center justify-center">
            {/* Container that slides left/right to bring selected card to center */}
            <div
              className="flex items-center gap-8 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(${(1 - currentSlide) * 400}px)`, // Adjust spacing as needed
              }}
            >
              {carouselItems.map((item, index) => {
                const isCenter = index === currentSlide

                return (
                  <div
                    key={`card-desktop-${index}`}
                    className="flex-shrink-0 cursor-pointer transition-all duration-700 ease-out"
                    style={{
                      opacity: isCenter ? 1 : 0.4,
                      transform: isCenter ? "scale(1)" : "scale(0.75)",
                    }}
                    onClick={() => setCurrentSlide(index)}
                  >
                    {isCenter ? (
                      // Large center card when active
                      <div className="w-[39.375rem] h-[25.1875rem] bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-xl p-10 flex flex-col items-center text-center border border-[#E5E5E5]">
                        <div className="w-20 h-20 bg-[#1C6248] rounded-full flex items-center justify-center mb-8">
                          <img src={item.icon || "/placeholder.svg"} alt="" className="w-10 h-10 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1C6248] font-montserrat mb-4">{item.title}</h3>
                        <div className="w-20 h-0.5 bg-[#1C6248] mb-6" />
                        <p className="text-lg text-[#0C0C0C] font-montserrat leading-6 px-4">{item.description}</p>
                      </div>
                    ) : (
                      // Small side card when inactive
                      <div className="w-[30.0rem] h-[19.25rem] bg-gradient-to-b from-[#F0FFF9] to-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border border-[#E5E5E5]">
                        <div className="w-16 h-16 bg-[#1C6248] rounded-full flex items-center justify-center mb-4">
                          <img src={item.icon || "/placeholder.svg"} alt="" className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-[#1C6248] font-montserrat mb-1">{item.title}</h3>
                        <div className="w-12 h-0.5 bg-[#1C6248] mb-2" />
                        <p className="text-sm text-[#6C6C6C] font-montserrat leading-5 px-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots + Arrows for Desktop */}
        <div className="absolute top-[calc(100%)] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="flex gap-3 mb-2">
            {carouselItems.map((_, index) => (
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
              disabled={currentSlide === carouselItems.length - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                currentSlide === carouselItems.length - 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-[#F0FFF9] hover:bg-[#E0F5E9]"
              }`}
            >
              <ChevronRight
                className={`w-5 h-5 ${currentSlide === carouselItems.length - 1 ? "text-gray-400" : "text-[#1C6248]"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE STACKED VIEW */}
      <div className="block md:hidden px-4 sm:px-6 lg:px-8 space-y-6">
        {carouselItems.map((item, index) => (
          <div
            key={`card-mobile-${index}`}
            className="w-full bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-[#E5E5E5]"
          >
            <div className="w-16 h-16 bg-[#1C6248] rounded-full flex items-center justify-center mb-4">
              <img src={item.icon || "/placeholder.svg"} alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-[#1C6248] font-montserrat mb-2">{item.title}</h3>
            <div className="w-12 h-0.5 bg-[#1C6248] mb-4" />
            <p className="text-sm text-[#0C0C0C] font-montserrat leading-5">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CDRCarousel
