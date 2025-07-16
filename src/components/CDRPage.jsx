import React, { useState, useRef } from "react";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import CDRCarousel from "./CDR-Carousel";
import DigitalMRVStandards from "./CDR-MRV";

const CDRPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // 0: left, 1: center, 2: right

  const handleNavigation = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page);
    }
  };
  

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
        "Biochar stable for 100-1000 years with independently verified stability testing",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ right: 400, behavior: "smooth" });
    }
  };

  const scrollleft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  }

  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="bg-[#FDFDFD] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[38.1875rem] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/cdr.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-0" />

        <ClimitraHeader 
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={[
            { label: "Home", route: "home" },
            { label: "Industrial Decarbonization", route: "industrial" },
            { label: "CDR", route: "cdr" },
            { label: "Tech Suite", route: "tech" },
            { label: "Our Team", route: "team" }
          ]}
          showContactButton={true}
          zIndex={50}
        />

        {/* Hero Text */}
        <div className="absolute w-full top-[14.75rem] px-4 sm:px-6 md:px-8 flex flex-col items-center z-30">
          <h1 className="text-white font-semibold font-montserrat leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[57.6875rem] text-center mx-auto">
            Permanent atmospheric CO₂ extraction for net zero commitments
          </h1>
        </div>
      </div>

      {/* === Carosel Section with Background === */}

      <CDRCarousel />

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
              Biochar converts biomass into stable, carbon-rich material through
              pyrolysis, locking away atmospheric CO₂ in soil for centuries
              while enhancing ecosystem health.
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
                      <img src={benefit.icon} alt="" className="w-11 h-11" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1C6248] font-montserrat mb-4">
                      {benefit.title}
                    </h3>
                    <div className="w-11 h-0.5 bg-[#1C6248] mb-6"></div>
                    <p className="text-lg text-[#6C6C6C] font-montserrat leading-6">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="p-9 pt-0">
                    <img
                      src={benefit.image}
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
          

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-[3.625rem] pl-[5.0rem] scroll-smooth pb-6 cursor-grab active:cursor-grabbing scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >

              <button
                onClick={scrollleft}
                className="absolute left-4 top-[50%] translate-y-[-50%] bg-[#F3FFFA] border-4 border-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
              >
                <ChevronLeft className="w-6 h-6 text-[#1C6248]" />
              </button>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="min-w-[23.625rem] h-[27.0rem] bg-gradient-to-b from-[#F0FFF9] to-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-9">
                  <div className="w-20 h-20 bg-[#1C6248] rounded-full flex items-center justify-center mb-8">
                    <img src={benefit.icon} alt="" className="w-11 h-11" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#1C6248] font-montserrat mb-4">
                    {benefit.title}
                  </h3>
                  <div className="w-11 h-0.5 bg-[#1C6248] mb-6"></div>
                  <p className="text-lg text-[#6C6C6C] font-montserrat leading-6">
                    {benefit.description}
                  </p>
                </div>
                <div className="p-9 pt-0">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-44 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={scrollRight}
              className="absolute right-4 top-[50%] translate-y-[-50%] bg-[#F3FFFA] border-4 border-white rounded-full w-14 h-14 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-[#1C6248]" />
            </button>
          </div>

          {/* Scroll Right Arrow */}
          
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full hidden md:block bg-[#FDFDFD] py-12 md:py-16 lg:py-20">
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
              Climitra delivers CDR solutions that meet the strictest standards,
              helping partners achieve net zero commitments with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 ${
                    feature.isHighlighted
                      ? "bg-[#1C6248]"
                      : "bg-slate-200 border border-[#C2C2C2]"
                  }`}
                >
                  <img src={feature.icon} alt="" className="w-8 h-8 md:w-9 md:h-9 text-black" />
                </div>
                <h3
                  className={`text-lg md:text-xl font-semibold font-montserrat mb-4 md:mb-6 ${
                    feature.isHighlighted ? "text-[#1C6248]" : "text-[#0C0C0C]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#5D5D5D] font-montserrat leading-5 md:leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DigitalMRVStandards />

      {/* Call to Action Section */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
      {/* Background Image */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d223c98f5e1032c2151c3fb1c005a121e041c55?width=2623"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0C0C0C] opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white font-montserrat mb-2 sm:mb-3 md:mb-4 leading-tight">
            Ready for High-Integrity Carbon Credits?
          </h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white font-sofia mb-1 sm:mb-2">
            Premium biochar-based CDR with full technological validation.
          </p>
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white font-sofia font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-12">
            Measurable. Permanent. Independently verified.
          </p>
          <button
            onClick={() => handleNavigation("contact")}
            className="bg-[#1C6248] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold font-montserrat hover:bg-[#155238] transition-colors">
            Secure your Carbon Credits Today
          </button>
        </div>
      </div>
    </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CDRPage;
