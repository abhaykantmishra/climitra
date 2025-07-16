import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function BiocharBenefitsSection() {
  const benefits = [
    {
      icon: "images/soil.png",
      title: "Soil Enhancement",
      description:
        "Improves soil fertility, pH balance, and nutrient retention for sustainable agriculture",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dfbef6eab26dde9ecc689d5d54764276b7ce0cfe?width=596",
    },
    {
      icon: "images/dustbin.png",
      title: "Waste Utilization",
      description:
        "Converts agricultural and forestry waste into valuable carbon removal resources",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/22c78f8e2e9bdeef1a0d93ed1298899b2a8cdce3?width=596",
    },
    {
      icon: "images/community.png",
      title: "Community Value",
      description:
        "Creates local economic opportunities while addressing environmental challenges",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5ee9b4ef881b35d32ec7df1d7e546991b255ccd5?width=596",
    },
    {
      icon: "images/soil.png",
      title: "Water Management",
      description:
        "Increases water retention capacity and reduces nutrient runoff into waterways",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=596",
    },
  ];

  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    if (scrollRef.current) {
      setIsDragging(true)
      setStartX(e.pageX - scrollRef.current.offsetLeft)
      setScrollLeft(scrollRef.current.scrollLeft)
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5 
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" }) 
    }
  }

  const scrollleft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ right: 400, behavior: "smooth" }) 
    }
  }

  return (
    <div className="w-full bg-[#FAFAFA] py-20">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl font-semibold font-montserrat">
              <span className="text-[#0C0C0C]">Biochar: Nature's </span>
              <span className="text-[#1C6248]">Carbon Vault</span>
            </h2>
          </div>
          <div className="w-[8.375rem] h-1 bg-[#1C6248] mx-auto mb-8"></div>
          <p className="text-xl text-[#6C6C6C] font-montserrat leading-8 max-w-4xl mx-auto">
            Biochar converts biomass into stable, carbon-rich material through pyrolysis, locking away atmospheric CO₂
            in soil for centuries while enhancing ecosystem health.
          </p>
        </div>
      </div>

      {/* Mobile Grid Layout (hidden on lg and above) */}
      <div className="block lg:hidden px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="w-full h-[27.0rem] bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-9">
                  <div className="w-20 h-20 bg-[#1C6248] rounded-full flex items-center justify-center mb-8">
                    <img src={benefit.icon || "/placeholder.svg"} alt="" className="w-11 h-11" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1C6248] font-montserrat mb-4">{benefit.title}</h3>
                  <div className="w-11 h-0.5 bg-[#1C6248] mb-6"></div>
                  <p className="text-lg text-[#6C6C6C] font-montserrat leading-6">{benefit.description}</p>
                </div>
                <div className="p-9 pt-0">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    className="w-full h-44 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Scrollable Benefits (hidden on smaller screens) */}
      <div className="hidden lg:block relative px-[3.4375rem] overflow-hidden">
        <button
          onClick={scrollleft}
          className="absolute left-10 top-[50%] translate-y-[-50%] bg-[#F3FFFA] border-4 border-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <ChevronLeft className="w-6 h-6 text-black  " />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-[3.625rem] pl-[5.0rem] scroll-smooth pb-6 cursor-grab active:cursor-grabbing scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="min-w-[23.625rem] h-[27.0rem] bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-9">
                <div className="w-20 h-20 bg-[#1C6248] rounded-full flex items-center justify-center mb-8">
                  <img src={benefit.icon || "/placeholder.svg"} alt="" className="w-11 h-11" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1C6248] font-montserrat mb-4">{benefit.title}</h3>
                <div className="w-11 h-0.5 bg-[#1C6248] mb-6"></div>
                <p className="text-lg text-[#6C6C6C] font-montserrat leading-6">{benefit.description}</p>
              </div>
              <div className="p-9 pt-0">
                <img
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  className="w-full h-44 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Scroll Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-[50%] translate-y-[-50%] bg-[#F3FFFA] border-4 border-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <ChevronRight className="w-6 h-6 text-[#1C6248]" />
        </button>
      </div>
    </div>
  )
}

export default BiocharBenefitsSection