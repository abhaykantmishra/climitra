import React, { useState } from "react";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IntegrationCarousel from "./Industrial-Carousel";
import RegulatoryTimeline from "./Industrial-Timeline";

const IndustrialPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // 0-3: which card is in center
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lastDirection, setLastDirection] = useState('next'); // Track navigation direction

  const integrationItems = [
    {
      icon: "/images/Mask group (43).png",
      title: "Verified Decarbonization Impact",
      description: "1 ton of biochar saves up to 2.5 tons of CO₂ — with enhanced carbothermal efficiency over coal.",
    },
    {
      icon: "/images/Mask group (41).png",
      title: "Plug-and-Play Compatibility", 
      description: "Up to 40% PCI coal substitution in blast furnaces — no infrastructure modifications needed.",
    },
    {
      icon: "/images/Mask group (42).png",
      title: "Precision-Engineered Biochar",
      description: "Each batch is customized across 25+ parameters to meet plant-specific specs like ash content, volatile matter, and particle size.",
    },
     {
      icon: "/images/Mask group (44).png",
      title: "Commercially Competitive",
      description: "Designed to compete with fossil fuels on both performance and reliability — without compromising industrial margins.",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setLastDirection('next');
    setCurrentSlide((prev) => (prev + 1) % 4);
    setTimeout(() => setIsTransitioning(false), 700); // Match animation duration
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setLastDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
    setTimeout(() => setIsTransitioning(false), 700); // Match animation duration
  };

  // Get card positions - returns which position each card should be in
  const getCardPosition = (cardIndex) => {
    const centerIndex = currentSlide;
    const leftIndex = (currentSlide - 1 + 4) % 4;
    const rightIndex = (currentSlide + 1) % 4;
    const hiddenIndex = (currentSlide + 2) % 4;

    if (cardIndex === centerIndex) return 'center';
    if (cardIndex === leftIndex) return 'left';
    if (cardIndex === rightIndex) return 'right';
    if (cardIndex === hiddenIndex) return 'hidden';
    return 'hidden';
  };

  return (
    <div className="bg-[#FDFDFD] flex flex-col overflow-hidden">
      {/* HERO SECTION - Replaced */}
      <div className="relative w-full h-[38.1875rem] overflow-hidden">
        {/* Background Video */}
        <video
          src="/10447-224712880_medium.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-0" />

        {/* Header */}
        <ClimitraHeader
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuItems={[
            { label: "Home", route: "home" },
            { label: "Industrial Decarbonization", route: "industrial" },
            { label: "CDR", route: "cdr" },
            { label: "Tech Suite", route: "tech" },
            { label: "Our Team", route: "team" },
          ]}
          showContactButton={true}
          zIndex={20}
        />

        {/* Hero Content - Custom Text */}
        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-[1rem] sm:px-[1.5rem]">
          <div className="w-full sm:w-[90%] md:w-[40rem] lg:w-[50.125rem] h-auto lg:h-[7.25rem] flex items-center justify-center mx-auto">
            <h1 className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.2] font-semibold font-montserrat text-center lg:w-[822px]">
              Transforming Building Materials for a Net Zero India
            </h1>
          </div>
        </div>

      </div>

      {/* THE PERFECT STORM SECTION */}
      <div className="bg-[#F0FFF9] w-full min-h-[47.375rem] flex items-center justify-center px-4 py-8 md:py-16">
      <div className="max-w-[80rem] w-full mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0C0C0C] leading-tight mb-4 max-w-4xl mx-auto">
            <span className="text-[#0C0C0C]">The Perfect Storm: Why </span>
            <span className="text-[#1C6248]">Decarbonization</span>
            <span className="text-[#0C0C0C]"> Can't Wait</span>
          </h2>
          <div className="w-[12.4375rem] h-[0.25rem] bg-[#1C6248] mx-auto"></div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center mx-auto">
          {/* Left Side - Industrial Image */}
          <div className="w-full lg:w-[23.75rem] lg:flex-shrink-0 relative order-1 lg:order-1">
            <div className="relative w-full h-full">
              <img
                src="/images/Frame 1984078282.png"
                alt="Industrial emissions visualization"
                className="w-full h-auto object-contain rounded-lg"
              />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-0 bg-[#1C6248] text-white px-3 md:px-4 py-2 md:py-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-[#E6FFF6] font-montserrat text-xs md:text-sm font-semibold">
                    Industrial
                  </div>
                  <div className="text-[#E6FFF6] font-montserrat text-xs md:text-sm font-semibold">
                    Emissions in Focus
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-full lg:max-w-[30rem] order-2 lg:order-2">
            {/* Main Title */}
            <h3 className="text-[#1C6248] font-montserrat text-xl md:text-2xl lg:text-[1.75rem] font-semibold leading-tight mb-6 md:mb-8">
              India's Heavy Industry Faces a<br className="hidden md:block" />
              <span className="md:hidden"> </span>Carbon Reckoning
            </h3>

            {/* Content Blocks Container */}
            <div className="space-y-6 md:space-y-8">
              {/* Content Block 1 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-1">
                  <img
                    src="/images/Mask group (25).png"
                    alt="Fire icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-source-sans-pro text-[#1C6248] font-semibold text-lg md:text-xl mb-2 leading-tight">
                    High Emissions, Heavy Growth
                  </h4>
                  <p className="font-source-sans-pro text-[#6C6C6C] text-sm md:text-base leading-relaxed">
                    India's steel sector contributes 12% to national emissions.
                    With 100 MTPA capacity addition planned by 2030—90% of which will be coal-based—emissions are set to grow faster than decarbonization solutions.
                  </p>
                </div>
              </div>

              {/* Content Block 2 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-1">
                  <img
                    src="/images/Mask group (19).png"
                    alt="Policy icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-source-sans-pro text-[#1C6248] font-semibold text-lg md:text-xl mb-2 leading-tight">
                    Policy Pressure Builds
                  </h4>
                  <p className="font-source-sans-pro text-[#6C6C6C] text-sm md:text-base leading-relaxed">
                    From 2026, the EU's CBAM will affect $8.6B of Indian exports, while India's CCTS mandates emissions cuts in 9 heavy industries.
                  </p>
                </div>
              </div>

              {/* Content Block 3 */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 mt-1">
                  <img
                    src="/images/Mask group (20).png"
                    alt="Fuel volatility icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-source-sans-pro text-[#1C6248] font-semibold text-lg md:text-xl mb-2 leading-tight">
                    Fuel Volatility
                  </h4>
                  <p className="font-source-sans-pro text-[#6C6C6C] text-sm md:text-base leading-relaxed">
                    With 85% import dependency for coking coal, Indian steelmakers face extreme price volatility, creating unpredictable operating expenses and profit erosion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* CRITICAL REGULATORY TIMELINE SECTION */}

      <RegulatoryTimeline />

      {/* BIOCHAR AS DECARBONIZATION LEVER SECTION */}
      <div className="relative w-full overflow-hidden bg-[linear-gradient(180deg,_#000000_-50%,_#000000_-27%)] py-12 md:py-20">
      {/* Background Image */}
      <img
        src="/images/back_img.png"
        alt="Industrial Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0C0C0C] opacity-55 z-1"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-[4.6875rem]">
        {/* Heading */}
        <h2 className="text-white font-montserrat text-2xl sm:text-3xl md:text-[2.5rem] leading-tight md:leading-[3.3125rem] text-left max-w-full md:max-w-[52.3125rem]">
          <span className="font-semibold">Biochar as a Decarbonization Lever:</span>
          <br className="md:hidden" /> {/* Line break for mobile */}
          <span className="font-normal">The Perfect Coal Alternative</span>
        </h2>

        {/* Cards Row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-[3.125rem] items-center md:items-start mb-8 md:mb-[4rem]">
          {/* Left Card */}
          <div
            className="flex items-center justify-center p-4 sm:p-[1.75rem_1.875rem] bg-[#0C0C0C6B] backdrop-blur-md rounded-[0.8125rem] w-full md:w-[26.0625rem] h-auto min-h-[10rem] md:h-[13.625rem]"
            style={{ boxShadow: "4px 4px 100px 0 rgba(0, 0, 0, 0.25)" }}
          >
            <div className="text-center">
              <img
                src="/images/Mask group (26).png"
                alt="Steel Icon"
                className="w-16 h-auto mx-auto mb-4 sm:w-[5rem] sm:mb-[1.25rem]"
              />
              <h3 className="text-white font-montserrat font-semibold text-lg sm:text-xl md:text-[1.375rem] leading-[120%] mb-2 sm:mb-[0.75rem]">
                32 million tons annual biochar demand potential
              </h3>
              <p className="text-[#6C6C6C] font-montserrat text-sm sm:text-base md:text-[1rem] font-bold leading-[120%]">
                (Ministry of Steel)
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="flex items-center justify-center p-4 sm:p-[1.75rem_2.875rem_3.5625rem_2.875rem] bg-[#0C0C0C6B] backdrop-blur-md rounded-[0.8125rem] w-full md:w-[26.0625rem] h-auto min-h-[10rem] md:h-[13.625rem]"
            style={{ boxShadow: "4px 4px 100px 0 rgba(0, 0, 0, 0.25)" }}
          >
            <div className="text-center">
              <img
                src="/images/Mask group (27).png"
                alt="Emissions Icon"
                className="w-16 h-auto mx-auto mb-4 sm:w-[5rem] sm:mb-[1.25rem]"
              />
              <h3 className="text-white font-montserrat font-semibold text-lg sm:text-xl md:text-[1.375rem] leading-[120%] mb-2 sm:mb-[0.75rem]">
                Up to 50% emissions reduction
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  {/* SEAMLESS INTEGRATION SECTION */}
  <IntegrationCarousel />

      {/* PILOTING AND SCALING SECTION */}
<div className="w-full bg-[#F0FFF9] py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-[5rem] lg:px-[6.375rem]" style={{ minHeight: '681px' }}>
  <div className="max-w-[67.25rem] mx-auto">
    {/* Section Header */}
    <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-[4.5rem]">
      <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-semibold leading-tight sm:leading-relaxed md:leading-[2.5rem] lg:leading-[2.75rem] mb-4 sm:mb-6 lg:mb-[1.125rem] px-4">
        <span className="text-[#0C0C0C]">Piloting and Scaling with </span>
        <span className="text-[#1C6248]">Industry Leaders</span>
      </h2>
      <div className="w-20 sm:w-24 md:w-32 lg:w-[8.375rem] h-1 bg-[#1C6248] mx-auto"></div>
    </div>

    {/* MOBILE: Vertical Stack (below lg) */}
    <div className="block lg:hidden">
      <div className="space-y-6 sm:space-y-8">
        {/* Lab-Validated Card */}
        <div className="flex flex-col">
          <img
            src="/images/image 44.png"
            alt="Lab Validated"
            className="w-full max-w-md mx-auto h-48 sm:h-56 md:h-64 rounded-[0.375rem] mb-4 sm:mb-6 object-cover"
          />
          <div className="text-center sm:text-left px-4 sm:px-0">
            <h3 className="text-[#1C6248] font-montserrat text-lg sm:text-xl md:text-[1.5rem] font-semibold leading-tight mb-3 sm:mb-4">
              Lab-Validated
            </h3>
            <p className="text-[#6C6C6C] font-montserrat text-sm sm:text-base leading-relaxed">
              Demonstrated performance across key industrial parameters in collaboration with leading steel producers.
            </p>
          </div>
        </div>

        {/* Pilots Underway Card */}
        <div className="flex flex-col">
          <img
            src="/images/image 46.png"
            alt="Pilots Underway"
            className="w-full max-w-md mx-auto h-48 sm:h-56 md:h-64 rounded-[0.375rem] mb-4 sm:mb-6 object-cover"
          />
          <div className="text-center sm:text-left px-4 sm:px-0">
            <h3 className="text-[#1C6248] font-montserrat text-lg sm:text-xl md:text-[1.5rem] font-semibold leading-tight mb-3 sm:mb-4">
              Pilots Underway
            </h3>
            <p className="text-[#6C6C6C] font-montserrat text-sm sm:text-base leading-relaxed">
              On-ground biochar trials initiated at multiple sites to validate field-to-furnace integration.
            </p>
          </div>
        </div>

        {/* Built to Scale Card */}
        <div className="flex flex-col">
          <img
            src="/images/image 47.png"
            alt="Built to Scale"
            className="w-full max-w-md mx-auto h-48 sm:h-56 md:h-64 rounded-[0.375rem] mb-4 sm:mb-6 object-cover"
          />
          <div className="text-center sm:text-left px-4 sm:px-0">
            <h3 className="text-[#1C6248] font-montserrat text-lg sm:text-xl md:text-[1.5rem] font-semibold leading-tight mb-3 sm:mb-4">
              Built to Scale
            </h3>
            <p className="text-[#6C6C6C] font-montserrat text-sm sm:text-base leading-relaxed">
              Designed for rapid deployment across large and mid-sized steel producers with minimal adaptation required.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* DESKTOP: Three Column Cards (lg and above) */}
    <div className="hidden lg:block">
      <div className="grid grid-cols-3 gap-[2.875rem]">
        {/* Lab-Validated Card */}
        <div className="flex flex-col">
          <img
            src="/images/image 44.png"
            alt="Lab Validated"
            className="w-[20.5625rem] h-[13.6875rem] rounded-[0.375rem] mb-[1.875rem] object-cover"
          />
          <div>
            <h3 className="text-[#1C6248] font-montserrat text-[1.5rem] font-semibold leading-[1.5rem] mb-[0.875rem]">
              Lab-Validated
            </h3>
            <p
              className="text-[#6C6C6C] font-montserrat"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0',
              }}
            >
              Demonstrated performance across key industrial parameters in collaboration with leading steel producers.
            </p>
          </div>
        </div>

        {/* Pilots Underway Card */}
        <div className="flex flex-col">
          <img
            src="/images/image 46.png"
            alt="Pilots Underway"
            className="w-[20.5rem] h-[13.6875rem] rounded-[0.375rem] mb-[1.875rem] object-cover"
          />
          <div>
            <h3 className="text-[#1C6248] font-montserrat text-[1.5rem] font-semibold leading-[1.5rem] mb-[0.875rem]">
              Pilots Underway
            </h3>
            <p
              className="text-[#6C6C6C] font-montserrat"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0',
              }}
            >
              On-ground biochar trials initiated at multiple sites to validate field-to-furnace integration.
            </p>
          </div>
        </div>

        {/* Built to Scale Card */}
        <div className="flex flex-col">
          <img
            src="/images/image 47.png"
            alt="Built to Scale"
            className="w-[20.5rem] h-[13.6875rem] rounded-[0.375rem] mb-[1.875rem] object-cover"
          />
          <div>
            <h3 className="text-[#1C6248] font-montserrat text-[1.5rem] font-semibold leading-[1.5rem] mb-[0.875rem]">
              Built to Scale
            </h3>
            <p
              className="text-[#6C6C6C] font-montserrat"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0',
              }}
            >
              Designed for rapid deployment across large and mid-sized steel producers with minimal adaptation required.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* WHY CLIMITRA SECTION */}
       <div className="relative w-full h-[24.0625rem] overflow-hidden">
        <img
          src="/images/image 105.png"
          alt="Why Climitra Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-[#0C0C0C] opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full px-2">
          <div className="text-center">
            <h2
              className="font-montserrat"
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '0',
                marginBottom: '1.25rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'center',
                display: 'block',
              }}
            >
              Why Climitra?
            </h2>
            <p
              className="font-sofia text-xl md:text-2xl lg:text-3xl text-center text-semibold text-white"
              style={{
              //   color: '#FFFFFF',
              //   width: '688px',
              //   height: '22px',
              //   fontFamily: 'Sofia Pro, sans-serif',
              //   fontWeight: 400,
              //   fontStyle: 'normal',
              //   fontSize: '22px',
                // lineHeight: '22px',
              //   letterSpacing: '0',
              //   marginBottom: '0.875rem',
              //   marginLeft: 'auto',
              //   marginRight: 'auto',
              //   textAlign: 'center',
              //   display: 'flex',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              }}
            >
              Industrial-grade biochar engineered for steel and cement industries.
            </p>
            <p className="font-sofia text-xl md:text-2xl lg:text-3xl text-center text-semibold text-white">
              <span
                style={{
                  // color: '#FFFFFF',
                  // width: '328px',
                  // height: '22px',
                  // fontFamily: 'Sofia Pro, sans-serif',
                  // fontWeight: 400,
                  // fontStyle: 'normal',
                  // fontSize: '22px',
                  // lineHeight: '22px',
                  // letterSpacing: '0',
                  // display: 'inline-block',
                  // textAlign: 'center',
                }}
              >
                Proven globally. Ready for India.
              </span>
            </p>
            <button className="bg-[#1C6248] my-5 md:my-10 text-white font-montserrat text-[1rem] font-bold px-[1.375rem] py-[0.75rem] rounded-[0.5rem] hover:bg-[#0F4D36] transition-colors">
              <span
                style={{
                  color: '#FFFFFF',
                  width: '183px',
                  height: '20px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontStyle: 'normal',
                  fontSize: '16px',
                  lineHeight: '16px',
                  letterSpacing: '0',
                  display: 'inline-block',
                  textAlign: 'center',
                }}
              >
                Partner with Us Today
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IndustrialPage;
