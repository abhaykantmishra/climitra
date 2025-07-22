"use client"

import { useState } from "react"
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer"; 

const TechPage = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState("multi-source")

  // Section data with images and descriptions to match screenshots
  const sectionData = {
    "multi-source": {
      image: "/images/image 128.png",
      description:
        "We map and quantify biomass using satellite, radar, hyperspectral and on-ground data with high spatial precision.",
    },
    "land-insights": {
      image: "/images/Frame 1984078377.svg",
      description:
        "We analyze land ownership to enable community-specific engagement and sustainable biomass procurement.",
    },
    "supply-forecasting": {
      image: "/images/Frame 1984078430.svg",
      description:
        "We forecast biomass supply and quality, enabling dynamic planning, route optimization and risk management.",
    },
    ecosystem: {
      image: "/images/Frame 1984078431.svg",
      description:
        "We integrate data, logistics and local incentives to build scalable, reliable biomass supply chains for decarbonization.",
    },
  }

  const handleNavigation = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page);
    }
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full min-h-screen h-[611px] overflow-hidden">
        {/* Background Video */}
        <video
          src="/88220-602915848_medium (1).mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-10" />

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

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4 pointer-events-none">
          <h1 className="font-montserrat text-white text-center font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl mx-auto pointer-events-auto">
            Pioneering biomass tech for 
            <br />
            reliable, sustainable impact
          </h1>
        </div>
      </div>
      {/* THREE GAPS SECTION */}
      <div className="relative w-full bg-[#F0FFF9] py-10 md:py-20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <img src="/images/image 44.png" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-climitra-green"></div>
        </div>
        {/* Section Title */}
        <div className="max-w-6xl mx-auto px-4 mb-10 md:mb-16">
          <div className="text-center">
            <h2 className="font-montserrat text-center font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 mx-auto">
              <span className="text-climitra-dark">Intelligent&nbsp;</span>
              <span className="text-climitra-green">Biomass Ecosystem</span>
              <span className="text-climitra-dark">&nbsp;Creation</span>
            </h2>
            <div className="w-[12.4375rem] h-1 bg-climitra-green mx-auto rounded"></div>
          </div>
        </div>
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/images/Group 1129.png"
                alt="Biomass Ecosystem"
                className="w-full h-auto object-contain filter brightness-[1.1] contrast-[1.15] saturate-[1.2] image-rendering-crisp-edges"
              />
            </div>
            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
              <div>
                <h3 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl leading-tight mb-4">
                  <span className="text-climitra-dark">Three </span>
                  <span className="text-climitra-green">Gaps</span>
                  <span className="text-climitra-dark">. One </span>
                  <span className="text-climitra-green">Platform</span>
                </h3>
              </div>
              {/* Gap 1 */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <h4 className="font-montserrat text-climitra-dark font-semibold text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
                    Untapped Biomass Potential
                  </h4>
                  <svg className="w-6 h-4 flex-shrink-0 hidden sm:block" viewBox="0 0 23 6" fill="none">
                    <path d="M22.5 3L17.5 0.113249V5.88675L22.5 3ZM0 3V3.5H18V3V2.5H0V3Z" fill="black" />
                  </svg>
                  <h4 className="font-montserrat text-climitra-green font-semibold text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
                    Precision Discovery
                  </h4>
                </div>
                <p className="font-source-sans-pro text-climitra-text text-base md:text-lg leading-relaxed tracking-wider">
                  We identify and digitize overlooked biomass resources using AI, remote sensing, and field validation
                  to unlock new supply streams.
                </p>
              </div>
              {/* Gap 2 */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <h4 className="font-montserrat text-climitra-dark font-semibold text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
                    Patchy Logistics
                  </h4>
                  <svg className="w-6 h-4 flex-shrink-0 hidden sm:block" viewBox="0 0 23 6" fill="none">
                    <path d="M22.5 3L17.5 0.113249V5.88675L22.5 3ZM0 3V3.5H18V3V2.5H0V3Z" fill="black" />
                  </svg>
                  <h4 className="font-montserrat text-climitra-green font-semibold text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
                    Coordinated Movement
                  </h4>
                </div>
                <p className="font-source-sans-pro text-climitra-text text-base md:text-lg leading-relaxed tracking-wider">
                  We connect dispersed biomass zones through cluster-based planning and optimized routing to ensure
                  reliable, cost-effective mobilization.
                </p>
              </div>
              {/* Gap 3 */}
              <div className="space-y-2 md:space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
                  <h4 className="font-montserrat text-climitra-dark font-semibold text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
                    No Central Visibility
                  </h4>
                  <svg className="w-6 h-4 flex-shrink-0 hidden sm:block" viewBox="0 0 23 6" fill="none">
                    <path d="M22.5 3L17.5 0.113249V5.88675L22.5 3ZM0 3V3.5H18V3V2.5H0V3Z" fill="black" />
                  </svg>
                  <h4 className="font-montserrat text-climitra-green font-semibold text-lg md:text-xl lg:text-2xl leading-tight whitespace-nowrap">
                    Unified Tracking
                  </h4>
                </div>
                <p className="font-source-sans-pro text-climitra-text text-base md:text-lg leading-relaxed tracking-wider">
                  We bring all supply data onto one platform for real-time monitoring, planning, and traceability across
                  the value chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* AI-POWERED BIOMASS MONITORING SECTION */}
      <div className="bg-white py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-montserrat text-black font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight whitespace-nowrap overflow-hidden text-ellipsis w-full text-center">
              <span className="text-black">AI-Powered </span>
              <span className="text-climitra-green">Biomass Monitoring</span>
              <span className="text-black"> Solution</span>
            </h2>
            <div className="w-32 h-1 bg-climitra-green mx-auto rounded mt-4 md:mt-6"></div>
            <p className="font-montserrat text-base md:text-lg lg:text-xl font-normal leading-relaxed text-[#5D5D5D] max-w-3xl mx-auto mt-6 md:mt-8">
              Transforming waste-biomass through precision mapping, community engagement, and sustainable supply chain
              optimization.
            </p>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            {/* Left Side - Features */}
            <div className="space-y-4 md:space-y-6">
              {/* Multi-Source Data Integration */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "multi-source" ? "p-6 md:p-8" : "p-4 md:p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("multi-source")}
                style={{
                  minHeight: expandedSection === "multi-source" ? "auto" : "100px",
                  height: expandedSection === "multi-source" ? "auto" : "100px",
                }}
              >
                <h3 className="font-montserrat text-[#1C6248] font-semibold text-lg md:text-xl leading-tight mb-2 md:mb-4">
                  Multi-Source Data Integration
                </h3>
                {expandedSection === "multi-source" && (
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Hyperspectral imaging (200+ bands, 5m resolution) for species-specific spectral signatures
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Sentinel-2 & Landsat vegetation indices (NDVI, SAVI, GRI) for large-scale validation
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        LIDAR mapping for understory detection and biomass density estimation
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Ground validation with GPS-tagged stratified plots (10×10m)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4 pb-2 md:pb-5">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Integration of weather forecasts and landscape data for optimal collection timing
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Land Insights & Engagement */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "land-insights" ? "p-6 md:p-8" : "p-4 md:p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("land-insights")}
                style={{
                  minHeight: expandedSection === "land-insights" ? "auto" : "100px",
                  height: expandedSection === "land-insights" ? "auto" : "100px",
                }}
              >
                <h3 className="font-montserrat text-[#1C6248] font-semibold text-lg md:text-xl leading-tight mb-2 md:mb-4">
                  Land Insights & Engagement
                </h3>
                {expandedSection === "land-insights" && (
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Granular land classification (agricultural/community/revenue/forest lands)
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Tailored engagement strategies based on land ownership patterns
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Community-driven removal protocols with local van panchayats
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Supply Forecasting */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "supply-forecasting" ? "p-6 md:p-8" : "p-4 md:p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("supply-forecasting")}
                style={{
                  minHeight: expandedSection === "supply-forecasting" ? "auto" : "100px",
                  height: expandedSection === "supply-forecasting" ? "auto" : "100px",
                }}
              >
                <h3 className="font-montserrat text-[#1C6248] font-semibold text-lg md:text-xl leading-tight mb-2 md:mb-4">
                  Supply Forecasting
                </h3>
                {expandedSection === "supply-forecasting" && (
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        AI-powered biomass quality prediction using machine learning models
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Seasonal availability forecasting with fire return interval analysis
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Biomass hotspot classification based on density tiers ({"<25% to >65%"}) to guide sourcing
                        priorities and cluster design
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Weather-integrated collection planning to optimize for harvest timing
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Ecosystem Coordination */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "ecosystem" ? "p-6 md:p-8" : "p-4 md:p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("ecosystem")}
                style={{
                  minHeight: expandedSection === "ecosystem" ? "auto" : "100px",
                  height: expandedSection === "ecosystem" ? "auto" : "100px",
                }}
              >
                <h3 className="font-montserrat text-[#1C6248] font-semibold text-lg md:text-xl leading-tight mb-2 md:mb-4">
                  Ecosystem Coordination
                </h3>
                {expandedSection === "ecosystem" && (
                  <div className="space-y-2 md:space-y-4">
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Decentralized processing clusters within 5 km of biomass sources
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Uncertainty management through buffer mechanisms and alternate sourcing strategies
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        Real-time inventory management with digital twin operations
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-2 md:mt-3 flex-shrink-0"></div>
                      <p className="text-climitra-text font-montserrat text-sm md:text-base leading-relaxed">
                        End-to-end traceability from collection to biochar production
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Right Side - Dynamic Image */}
            <div className="relative flex flex-col justify-between h-full min-h-[300px] lg:min-h-[620px]">
              <div className="flex justify-center items-center flex-1">
                <img
                  src={sectionData[expandedSection].image}
                  alt="AI Monitoring Solution"
                  className="w-full object-contain max-w-[90%] h-auto lg:h-[662px]"
                />
              </div>
              <div className="mt-4 md:mt-8 px-4">
                <p className="text-climitra-green text-center font-montserrat italic text-base md:text-lg leading-relaxed">
                  {sectionData[expandedSection].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PYROLYSIS REACTOR SYSTEM SECTION */}
      <div className="bg-[#FAFAFA] py-10 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-20 pt-10 md:pt-0">
            <div className="mb-4">
              <h2 className="font-montserrat text-center font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4 w-full mx-auto">
                <span className="text-climitra-green">Pyrolysis</span>
                <span className="inline-block w-2"></span>
                <span className="text-climitra-dark">Reactor System</span>
              </h2>
              <div className="w-[134px] h-1 border-b-4 border-climitra-green mx-auto mt-5"></div>
            </div>
            <p className="w-full text-[#5D5D5D] text-center font-montserrat text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-6 md:mt-8">
              Precision-engineered biochar production for industrial applications and CDR
            </p>
          </div>
          {/* Main Content Container */}
          <div className="relative h-auto lg:h-[52rem] mt-0 lg:-mt-20 flex flex-col items-center lg:block">
            {/* Central Reactor Image */}
            <div className="relative lg:absolute inset-x-0 flex justify-center lg:top-40">
              <img
                src="/images/Downpic.cc-2354761597 1.png"
                alt="Pyrolysis Reactor"
                className="object-contain w-full max-w-md lg:w-[35.8125rem] h-auto lg:h-[22rem]"
              />
            </div>
            {/* Feature Cards Layout */}
            <div className="relative lg:absolute inset-0 flex flex-col lg:flex lg:flex-col md:gap-x-8 md:gap-y-4 mt-8 md:mt-0">
              {/* Top Left Card - Digitally Controlled Pyrolysis */}
              <div className="relative bg-white border border-climitra-green rounded-xl flex flex-col justify-center items-center p-4 md:p-6 mx-auto w-full max-w-xs lg:absolute lg:w-[13.125rem] lg:h-[19.25rem] lg:left-[4.25rem] lg:top-[17.875rem]">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="border border-climitra-green rounded-lg flex justify-center items-center mb-4 w-12 h-12">
                    <img
                      src="/images/Mask group (40).png"
                      alt="Digital Control Icon"
                      className="object-contain w-8 h-8"
                    />
                  </div>
                  <h4 className="font-montserrat text-climitra-dark text-center font-semibold text-base md:text-lg leading-tight mb-2">
                    Digitally Controlled Pyrolysis
                  </h4>
                  <p className="font-montserrat text-[#5D5D5D] text-center text-xs md:text-sm leading-relaxed">
                    PLC-based automation manages temperature, residence time, and heating rate for stable, high-yield
                    operation
                  </p>
                </div>
              </div>
              {/* Top Right Card - Modular & Biomass-Agnostic */}
              <div className="relative bg-white border border-climitra-green rounded-xl flex flex-col justify-center items-center p-4 md:p-6 mx-auto w-full max-w-xs lg:absolute lg:w-[13.125rem] lg:h-[19.25rem] lg:right-[4.25rem] lg:top-[17.875rem]">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="border border-climitra-green rounded-lg flex justify-center items-center mb-4 w-12 h-12">
                    <img src="/images/Mask group (39).png" alt="Modular Icon" className="object-contain w-8 h-8" />
                  </div>
                  <h4 className="font-montserrat text-climitra-dark text-center font-semibold text-base md:text-lg leading-tight mb-2">
                    Modular & Biomass-Agnostic
                  </h4>
                  <p className="font-montserrat text-[#5D5D5D] text-center text-xs md:text-sm leading-relaxed">
                    Compatible with diverse feedstocks like Prosopis and Lantana; skid-mounted for easy deployment.
                  </p>
                </div>
              </div>
              {/* Bottom Left Card - Industrial-Grade Biochar Quality */}
                <div className="relative bg-white border border-climitra-green rounded-xl flex flex-col justify-center items-center p-4 md:p-6 mx-auto w-full max-w-xs lg:absolute lg:w-[13.0625rem] lg:h-[19.9375rem] lg:left-[25rem] lg:top-[35.375rem]">
                  <div className="flex flex-col items-center text-center w-full">
                    <div className="border border-climitra-green rounded-lg flex justify-center items-center mb-4 w-12 h-12">
                      <img src="/images/Mask group (38).png" alt="Quality Icon" className="object-contain w-8 h-8" />
                    </div>
                    <h4 className="font-montserrat text-climitra-dark text-center font-semibold text-base md:text-lg leading-tight mb-2">
                      Industrial-Grade Biochar Quality
                    </h4>
                    <p className="font-montserrat text-[#5D5D5D] text-center text-xs md:text-sm leading-relaxed">
                      Engineered to meet end-use requirements in heavy industry, with consistent output across 25+
                      parameters including fixed carbon, ash, moisture and calorific value.
                    </p>
                  </div>
                </div>
                {/* Bottom Right Card - Real-Time Monitoring & Optimization */}
                <div className="relative bg-white border border-climitra-green rounded-xl flex flex-col justify-center items-center p-4 md:p-6 mx-auto w-full max-w-xs lg:absolute lg:w-[13.125rem] lg:h-[19.9375rem] lg:right-[23.8125rem] lg:top-[35.375rem]">
                  <div className="flex flex-col items-center text-center w-full">
                    <div className="border border-climitra-green rounded-lg flex justify-center items-center mb-4 w-12 h-12">
                      <img src="/images/Mask group (37).png" alt="Monitoring Icon" className="object-contain w-8 h-8" />
                    </div>
                    <h4 className="font-montserrat text-climitra-dark text-center font-semibold text-base md:text-lg leading-tight mb-2">
                      Real-Time Monitoring & Optimization
                    </h4>
                    <p className="font-montserrat text-[#5D5D5D] text-center text-xs md:text-sm leading-relaxed">
                      IoT-enabled sensors track process performance and enable auto-adjustments for efficiency and
                      quality.
                    </p>
                  </div>
                </div>
            </div>
            
            {/* Connecting Lines and Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
               <img
                src="/images/Vector 55.svg"
                alt="Connection Line"
                className="absolute"
                style={{
                  width: "9.4375rem",
                  height: "6.5rem",
                  border: "2px",
                  left: "38.80rem",
                  top: "28.2125rem",
                }}
              />

              {/* Left horizontal line */}
              <img
                src="/images/Line 42 (1).svg"
                alt="Left Line"
                className="absolute"
                style={{
                  width: "2.125rem",
                  height: "1rem",
                  border: "2px",
                  left: "18rem",
                  top: "26.2825rem",
                }}
              />

              {/* Right horizontal line */}
              <img
                src="/images/Line 44.svg"
                alt="Right Line"
                className="absolute"
                style={{
                  width: "2.125rem",
                  border: "2px",
                  height: "1rem",
                  right: "18rem",
                  top: "25.2825rem",
                }}
              />

              {/* Bottom Left Diagonal Line */}
              <img
                src="/images/Line 42.svg"
                alt="Diagonal Line"
                className="absolute"
                style={{
                  width: "2.125rem",
                  height: "8.825rem",
                  left: "30.5rem",
                  border: "2px",
                  top: "25.8125rem",
                }}
              />
              {/* Dotted Circles */}
              <style>
                {`
                  @keyframes rotate-anticlockwise {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(-360deg);
                    }
                  }
                  .dotted-circle {
                    animation: rotate-anticlockwise 5s linear infinite;
                  }
                `}
              </style>
              <div className="absolute dotted-circle left-[20.4375rem] top-[24.5rem] w-[4.625rem] h-[4.625rem]">
                <img src="/images/Component 58.png" alt="Dotted Circle" className="w-full h-full object-contain" />
              </div>
              <div className="absolute dotted-circle left-[29.445rem] top-[20.6875rem] w-[4.625rem] h-[4.625rem]">
                <img src="/images/Component 58.png" alt="Dotted Circle" className="w-full h-full object-contain" />
              </div>
              <div className="absolute dotted-circle left-[36.875rem] top-[23.125rem] w-[4.625rem] h-[4.625rem]">
                <img src="/images/Component 58.png" alt="Dotted Circle" className="w-full h-full object-contain" />
              </div>
              <div className="absolute dotted-circle right-[20.2375rem] top-[23.375rem] w-[4.625rem] h-[4.625rem]">
                <img src="/images/Component 58.png" alt="Dotted Circle" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DATA INFRASTRUCTURE SECTION */}
      <div className="bg-[#F0FFF9] inline-flex flex-col items-center w-full min-h-screen
    gap-8 p-6
    sm:gap-12 sm:p-[60px_106px_87px_106px]
    md:gap-20 md:p-[80px_123px_117px_123px]">
        <div>
          {/* Section Header */}
          <div className="w-full text-center">
            <h2 className="font-montserrat font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
              <span className="text-climitra-dark">Data Infrastructure for </span>
              <span className="text-climitra-green">Reliable Industrial<br/> Decarbonization</span>
            </h2>
            <div className="w-[134px] h-1 bg-climitra-green mx-auto mt-4"></div>
            <p className="w-full text-[#5D5D5D] text-center font-montserrat text-base md:text-lg lg:text-xl font-normal leading-relaxed mt-6 max-w-[972px] mx-auto">
              We connect plant-level emissions data with compliance-ready ESG dashboards, enabling transparency from the
              ground to the boardroom.
            </p>
          </div>
          {/* Dashboard Sections */}
          <div className="w-full flex flex-col gap-10 md:gap-20">
            {/* Live Operational Dashboards */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-20">
              <div className="w-[100%]  md:w-1/2 order-2 md:order-1 p-4 md:max-w-[509px]">
                <div className="">
                   <h3 className="text-[#1c6248] font-montserrat font-semibold text-xl md:text-2xl leading-tight mb-4">
                    Live Operational Dashboards
                  </h3>
                  <p className="text-climitra-text font-montserrat text-base md:text-lg leading-relaxed mb-4 text-[22px] font-normal">
                    Track biochar usage, blending ratios, and emissions in real time, enabling performance optimization
                    directly inside plant workflows.
                  </p>
                 
                </div>
                <button className="inline-flex py-3 px-5 justify-center items-center gap-2 rounded-lg bg-climitra-green">
                  <span className="text-white font-montserrat text-base font-medium leading-normal">Coming Soon</span>
                </button>
              </div >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b418d36dbbe482240b87ce10d521e1825bd5c2?width=890"
                alt="Live Operational Dashboard"
                className="w-full md:w-1/2  h-auto aspect-square object-contain order-1 md:order-2 md:max-h-[445px] md:max-w-[445px]"
              />
            </div>
            {/* Automated ESG & Compliance Reporting */}
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-20">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7944b508d99778c6437b924b3b21ff7392da2d0a?width=890"
                alt="ESG Compliance Reporting"
                className="w-full md:w-1/2 h-auto aspect-square object-contain order-1 md:order-1 md:max-h-[445px] md:max-w-[445px]"
              />
              <div className="w-full md:w-1/2 order-2 md:order-2">
                <div className="">
                   <h3 className="text-climitra-green font-montserrat font-semibold text-xl md:text-2xl leading-tight mb-4">
                    Automated ESG & Compliance Reporting
                  </h3>
                  <p className="text-climitra-text font-montserrat text-base md:text-lg leading-relaxed mb-4">
                    Structured emissions data integrates with ESG disclosures and supports compliance with CBAM, CCTS,
                    and industrial decarbonization mandates.
                  </p>
                 
                </div>
                <button className="inline-flex py-3 px-5 justify-center items-center gap-2 rounded-lg bg-climitra-green">
                  <span className="text-white text-center font-montserrat text-base font-medium leading-normal">
                    Coming Soon
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FROM CRADLE-TO-CREDIT MRV SECTION */}
      <div className="bg-white py-10 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-center gap-10 md:gap-20">
          {/* Section Header */}
          <div className="w-full max-w-4xl flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-center font-montserrat font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
                <span className="text-climitra-dark">From </span>
                <span className="text-climitra-green">Cradle</span>
                <span className="text-climitra-dark">-to-</span>
                <span className="text-climitra-green">Credit MRV</span>
              </h2>
              <div className="w-[8.375rem] h-1 bg-climitra-green"></div>
            </div>
            <p className="text-center font-montserrat text-base md:text-lg lg:text-xl font-normal leading-relaxed text-[#5D5D5D] max-w-4xl">
              We monitor every stage from field to registry to deliver credits that are transparent, traceable and
              trusted
            </p>
          </div>
          {/* Process Flow */}
          <div className="w-full max-w-6xl flex flex-col items-center gap-10 md:gap-20">
            {/* Process Steps */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
              {/* Biomass Source */}
              <div className="flex flex-col items-center gap-4 min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (29).png"
                      alt="Biomass Source Icon"
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium text-lg leading-relaxed text-center">
                  Biomass Source
                </span>
              </div>
              {/* Arrow 1 */}
              <div className="hidden lg:block mt-[-3.125rem]">
                <svg width="2.875rem" height="1.25rem" viewBox="0 0 46 12" fill="none" className="flex-shrink-0">
                  <path
                    d="M1.22656 5.21066C0.685181 5.21066 0.246305 5.64954 0.246305 6.19092C0.246305 6.7323 0.685181 7.17118 1.22656 7.17118V5.21066ZM45.3382 6.19092L35.5356 0.531399V11.8504L45.3382 6.19092ZM1.22656 6.19092V7.17118H4.90253V6.19092V5.21066H1.22656V6.19092ZM12.2545 6.19092V7.17118H19.6064V6.19092V5.21066H12.2545V6.19092ZM26.9583 6.19092V7.17118H34.3103V6.19092V5.21066H26.9583V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
              {/* Conversion */}
              <div className="flex flex-col items-center gap-4 min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (30).png"
                      alt="Conversion Icon"
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium text-lg leading-relaxed text-center">
                  Conversion
                </span>
              </div>
              {/* Arrow 2 */}
              <div className="hidden lg:block mt-[-3.125rem]">
                <svg width="2.875rem" height="1.25rem" viewBox="0 0 46 12" fill="none" className="flex-shrink-0">
                  <path
                    d="M1.375 5.21066C0.833619 5.21066 0.394742 5.64954 0.394742 6.19092C0.394742 6.7323 0.833619 7.17118 1.375 7.17118V5.21066ZM45.4866 6.19092L35.684 0.531399V11.8504L45.4866 6.19092ZM1.375 6.19092V7.17118H5.05097V6.19092V5.21066H1.375V6.19092ZM12.4029 6.19092V7.17118H19.7548V6.19092V5.21066H12.4029V6.19092ZM27.1068 6.19092V7.17118H34.4587V6.19092V5.21066H27.1068V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
              {/* Transport */}
              <div className="flex flex-col items-center gap-4 min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (31).png"
                      alt="Transport Icon"
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium text-lg leading-relaxed text-center">
                  Transport
                </span>
              </div>
              {/* Arrow 3 */}
              <div className="hidden lg:block mt-[-3.125rem]">
                <svg width="2.875rem" height="1.25rem" viewBox="0 0 46 12" fill="none" className="flex-shrink-0">
                  <path
                    d="M1.51562 5.21066C0.974244 5.21066 0.535367 5.64954 0.535367 6.19092C0.535367 6.7323 0.974244 7.17118 1.51562 7.17118V5.21066ZM45.6272 6.19092L35.8246 0.531399V11.8504L45.6272 6.19092ZM1.51562 6.19092V7.17118H5.19159V6.19092V5.21066H1.51562V6.19092ZM12.5435 6.19092V7.17118H19.8955V6.19092V5.21066H12.5435V6.19092ZM27.2474 6.19092V7.17118H34.5993V6.19092V5.21066H27.2474V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
              {/* Application */}
              <div className="flex flex-col items-center gap-4 min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (32).png"
                      alt="Application Icon"
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium text-lg leading-relaxed text-center">
                  Application
                </span>
              </div>
              {/* Arrow 4 */}
              <div className="hidden lg:block mt-[-3.125rem]">
                <svg width="2.875rem" height="1.25rem" viewBox="0 0 46 12" fill="none" className="flex-shrink-0">
                  <path
                    d="M1.65625 5.21066C1.11487 5.21066 0.675992 5.64954 0.675992 6.19092C0.675992 6.7323 1.11487 7.17118 1.65625 7.17118V5.21066ZM45.7678 6.19092L35.9653 0.531399V11.8504L45.7678 6.19092ZM1.65625 6.19092V7.17118H5.33222V6.19092V5.21066H1.65625V6.19092ZM12.6841 6.19092V7.17118H20.0361V6.19092V5.21066H12.6841V6.19092ZM27.388 6.19092V7.17118H34.7399V6.19092V5.21066H27.388V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
              {/* Carbon Registry */}
              <div className="flex flex-col items-center gap-4 min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (33).png"
                      alt="Carbon Registry Icon"
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium text-lg leading-relaxed text-center">
                  Carbon Registry
                </span>
              </div>
            </div>
            {/* Feature Boxes */}
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-6">
              {/* Digital MRV System */}
              <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 max-w-full lg:max-w-[21.5625rem] ">
                <div className="flex-shrink-0 mt-4">
                  <img src="/images/Mask group (34).png" alt="Digital MRV System Icon" className="w-12 h-12 filter" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-climitra-green font-montserrat font-semibold text-lg leading-relaxed">
                    Digital MRV System
                  </h3>
                  <p className="text-climitra-text font-montserrat text-base leading-relaxed">
                    Real-time data across sourcing, production, and application for complete emissions tracking.
                  </p>
                </div>
              </div>
              {/* Lifecycle Carbon Accounting */}
              <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 max-w-full lg:max-w-[24.625rem]">
                <div className="flex-shrink-0 mt-4">
                  <img
                    src="/images/Mask group (35).png"
                    alt="Lifecycle Carbon Accounting Icon"
                    className="w-12 h-12 filter"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-climitra-green font-montserrat font-semibold text-lg leading-relaxed">
                    Lifecycle Carbon Accounting (LCA)
                  </h3>
                  <p className="text-climitra-text font-montserrat text-base leading-relaxed">
                    Quantified net GHG impact from biomass origin to end use, aligned with global standards.
                  </p>
                </div>
              </div>
              {/* Granular Traceability */}
              <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 max-w-full lg:max-w-[19.5625rem]">
                <div className="flex-shrink-0 mt-4">
                  <img
                    src="/images/Mask group (36).png"
                    alt="Granular Traceability Icon"
                    className="w-10 h-10 filter mt-1"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <h3 className="text-climitra-green font-montserrat font-semibold text-lg leading-relaxed">
                    Granular Traceability
                  </h3>
                  <p className="text-climitra-text font-montserrat text-base leading-relaxed">
                    Every ton is verifiable with GPS, sensors, and timestamps from field to registry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CALL TO ACTION SECTION */}
      <div
        className="relative w-full h-auto py-10 md:py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/images/image 109.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div  className="absolute inset-0 bg-black opacity-50"></div>
        <div style={{fontFamily: 'Montserrat, sans-serif'}} className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4 mt-0 md:-mt-10">
            <h2 className="text-white font-montserrat font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-center mb-4 md:mb-5">
              No Guesswork. Just Verified Carbon.
            </h2>
            <p className="text-white font-montserrat text-center text-base md:text-lg leading-normal max-w-[30rem] md:max-w-2xl ls:max-w-3xl mx-auto mb-8 md:mb-10">
              From satellite-based biomass mapping to digital MRV, Climitra ensures every ton removed is real,
              traceable, and credit-ready.
            </p>
            <div className="flex justify-center w-full">
              <button onClick={() => handleNavigation("contact")} className="bg-climitra-green text-white font-montserrat font-bold text-base md:text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center px-5 py-3 rounded-lg">
                <span className="font-montserrat font-semibold text-base leading-none text-center">
                  Partner with us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TechPage