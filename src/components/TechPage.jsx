import React, { useState } from "react";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";

const TechPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState("multi-source");

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
  };

  return (
    <div className="bg-white flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "611px", minHeight: "611px", maxHeight: "611px" }}
      >
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

        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1C6248E5] to-[#00000000] z-10"
          style={{
            width: "100%",
            height: "100%",
          }}
        />

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

        {/* HERO TEXT - Matches Screenshot and Spec */}
        <div
          className="absolute left-1/2 z-20"
          style={{
            top: "242.21px",
            transform: "translateX(-50%)",
            width: "958px",
            height: "116px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <h1
            className="font-montserrat text-white text-center"
            style={{
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "120%",
              letterSpacing: "0",
              width: "958px",
              height: "116px",
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              pointerEvents: "auto",
            }}
          >
            Pioneering biomass tech for reliable,
            <br />
            sustainable impact
          </h1>
        </div>
      </div>

      {/* THREE GAPS SECTION */}
      <div className="relative w-full bg-[#F0FFF9] py-20">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <img
            src="/images/image 44.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-climitra-green"></div>
        </div>

        {/* Section Title */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="text-center">
            <h2
              className="font-montserrat text-center"
              style={{
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "0",
                width: "738px",
                height: "44px",
                margin: "0 auto 1rem auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="text-climitra-dark">Intelligent&nbsp;</span>
              <span
                className="text-climitra-green"
                style={{
                  fontWeight: 600,
                  fontSize: "36px",
                  lineHeight: "44px",
                  letterSpacing: "0",
                  fontFamily: "Montserrat",
                }}
              >
                Biomass Ecosystem
              </span>
              <span className="text-climitra-dark">&nbsp;Creation</span>
            </h2>
            <div className="w-[12.4375rem] h-1 bg-climitra-green mx-auto rounded"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/images/Group 423.png"
                alt="Biomass Ecosystem"
                className="w-full h-auto object-contain"
                style={{
                  filter: "brightness(1.1) contrast(1.15) saturate(1.2)",
                  imageRendering: "crisp-edges",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h3
                  className="font-montserrat mb-4"
                  style={{
                    fontWeight: 600,
                    fontSize: "32px",
                    lineHeight: "120%",
                    letterSpacing: "0",
                  }}
                >
                  <span
                    className="text-climitra-dark"
                    style={{
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Three{" "}
                  </span>
                  <span
                    className="text-climitra-green"
                    style={{
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Gaps
                  </span>
                  <span
                    className="text-climitra-dark"
                    style={{
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                      fontFamily: "Montserrat",
                    }}
                  >
                    . One{" "}
                  </span>
                  <span
                    className="text-climitra-green"
                    style={{
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Platform
                  </span>
                </h3>
              </div>

              {/* Gap 1 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-6 flex-nowrap">
                  <h4
                    className="font-montserrat text-climitra-dark font-semibold whitespace-nowrap"
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                    }}
                  >
                    Untapped Biomass Potential
                  </h4>
                  <svg
                    className="w-6 h-4 flex-shrink-0"
                    viewBox="0 0 23 6"
                    fill="none"
                  >
                    <path
                      d="M22.5 3L17.5 0.113249V5.88675L22.5 3ZM0 3V3.5H18V3V2.5H0V3Z"
                      fill="black"
                    />
                  </svg>
                  <h4
                    className="font-montserrat text-climitra-green font-semibold whitespace-nowrap"
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                    }}
                  >
                    Precision Discovery
                  </h4>
                </div>
                <p
                  className="font-source-sans-pro text-climitra-text"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "130%",
                    letterSpacing: "5%",
                    verticalAlign: "middle",
                  }}
                >
                  We identify and digitize overlooked biomass resources using
                  AI, remote sensing, and field validation to unlock new supply
                  streams.
                </p>
              </div>

              {/* Gap 2 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-6 flex-nowrap">
                  <h4
                    className="font-montserrat text-climitra-dark font-semibold whitespace-nowrap"
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                    }}
                  >
                    Patchy Logistics
                  </h4>
                  <svg
                    className="w-6 h-4 flex-shrink-0"
                    viewBox="0 0 23 6"
                    fill="none"
                  >
                    <path
                      d="M22.5 3L17.5 0.113249V5.88675L22.5 3ZM0 3V3.5H18V3V2.5H0V3Z"
                      fill="black"
                    />
                  </svg>
                  <h4
                    className="font-montserrat text-climitra-green font-semibold whitespace-nowrap"
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                    }}
                  >
                    Coordinated Movement
                  </h4>
                </div>
                <p
                  className="font-source-sans-pro text-climitra-text"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "130%",
                    letterSpacing: "5%",
                    verticalAlign: "middle",
                  }}
                >
                  We connect dispersed biomass zones through cluster-based
                  planning and optimized routing to ensure reliable,
                  cost-effective mobilization.
                </p>
              </div>

              {/* Gap 3 */}
              <div className="space-y-4">
                <div className="flex items-center space-x-6 flex-nowrap">
                  <h4
                    className="font-montserrat text-climitra-dark font-semibold whitespace-nowrap"
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                    }}
                  >
                    No Central Visibility
                  </h4>
                  <svg
                    className="w-6 h-4 flex-shrink-0"
                    viewBox="0 0 23 6"
                    fill="none"
                  >
                    <path
                      d="M22.5 3L17.5 0.113249V5.88675L22.5 3ZM0 3V3.5H18V3V2.5H0V3Z"
                      fill="black"
                    />
                  </svg>
                  <h4
                    className="font-montserrat text-climitra-green font-semibold whitespace-nowrap"
                    style={{
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "120%",
                      letterSpacing: "0",
                    }}
                  >
                    Unified Tracking
                  </h4>
                </div>
                <p
                  className="font-source-sans-pro text-climitra-text"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "130%",
                    letterSpacing: "5%",
                    verticalAlign: "middle",
                  }}
                >
                  We bring all supply data onto one platform for real-time
                  monitoring, planning, and traceability across the value chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-POWERED BIOMASS MONITORING SECTION */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="font-montserrat text-black"
              style={{
                fontWeight: 600,
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "0%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "100%",
                textAlign: "center",
              }}
            >
              <span className="text-black">AI-Powered </span>
              <span className="text-climitra-green">Biomass Monitoring</span>
              <span className="text-black"> Solution</span>
            </h2>
            <div
              className="w-32 h-1 bg-climitra-green mx-auto rounded"
              style={{ marginTop: "18px" }}
            ></div>
            <p
              className="font-montserrat mx-auto"
              style={{
                fontWeight: 400,
                fontSize: "22px",
                lineHeight: "142%",
                letterSpacing: "0%",
                color: "#5D5D5D",
                width: "972px",
                height: "62px",
                margin: "30px auto 0 auto",
              }}
            >
              Transforming waste-biomass through precision mapping, community
              engagement, and sustainable supply chain optimization.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Side - Features */}
            <div className="space-y-6">
              {/* Multi-Source Data Integration */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "multi-source" ? "p-8" : "p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("multi-source")}
                style={{
                  minHeight:
                    expandedSection === "multi-source" ? "400px" : "100px",
                  height:
                    expandedSection === "multi-source" ? "400px" : "100px",
                }}
              >
                <h3
                  className="font-montserrat text-[#1C6248] mb-4"
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "-0.01em",
                    marginBottom:
                      expandedSection === "multi-source" ? "16px" : "0",
                  }}
                >
                  Multi-Source Data Integration
                </h3>
                {expandedSection === "multi-source" && (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Hyperspectral imaging (200+ bands, 5m resolution) for
                        species-specific spectral signatures
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Sentinel-2 & Landsat vegetation indices (NDVI, SAVI,
                        GRI) for large-scale validation
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        LIDAR mapping for understory detection and biomass
                        density estimation
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Ground validation with GPS-tagged stratified plots
                        (10×10m)
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 pb-5">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Integration of weather forecasts and landscape data for
                        optimal collection timing
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Land Insights & Engagement */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "land-insights" ? "p-8" : "p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("land-insights")}
                style={{
                  minHeight:
                    expandedSection === "land-insights" ? "400px" : "100px",
                  height:
                    expandedSection === "land-insights" ? "400px" : "100px",
                }}
              >
                <h3
                  className="font-montserrat text-[#1C6248] mb-4"
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "-0.01em",
                    marginBottom:
                      expandedSection === "land-insights" ? "16px" : "0",
                  }}
                >
                  Land Insights & Engagement
                </h3>
                {expandedSection === "land-insights" && (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Granular land classification
                        (agricultural/community/revenue/forest lands)
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Tailored engagement strategies based on land ownership
                        patterns
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Community-driven removal protocols with local van
                        panchayats
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Supply Forecasting */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "supply-forecasting" ? "p-8" : "p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("supply-forecasting")}
                style={{
                  minHeight:
                    expandedSection === "supply-forecasting"
                      ? "400px"
                      : "100px",
                  height:
                    expandedSection === "supply-forecasting"
                      ? "400px"
                      : "100px",
                }}
              >
                <h3
                  className="font-montserrat text-[#1C6248] mb-4"
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "-0.01em",
                    marginBottom:
                      expandedSection === "supply-forecasting" ? "16px" : "0",
                  }}
                >
                  Supply Forecasting
                </h3>
                {expandedSection === "supply-forecasting" && (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        AI-powered biomass quality prediction using machine
                        learning models
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Seasonal availability forecasting with fire return
                        interval analysis
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Biomass hotspot classification based on density tiers (
                        {"<25% to >65%"}) to guide sourcing priorities and
                        cluster design.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Weather-integrated collection planning to optimize
                        harvest timing
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Ecosystem Coordination */}
              <div
                className={`border border-[#7A9B8E] rounded-2xl bg-white cursor-pointer transition-all duration-300 ${expandedSection === "ecosystem" ? "p-8" : "p-6 flex items-center justify-start"}`}
                onClick={() => setExpandedSection("ecosystem")}
                style={{
                  minHeight:
                    expandedSection === "ecosystem" ? "400px" : "100px",
                  height: expandedSection === "ecosystem" ? "400px" : "100px",
                }}
              >
                <h3
                  className="font-montserrat text-[#1C6248] mb-4"
                  style={{
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "-0.01em",
                    marginBottom:
                      expandedSection === "ecosystem" ? "16px" : "0",
                  }}
                >
                  Ecosystem Coordination
                </h3>
                {expandedSection === "ecosystem" && (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Decentralized processing clusters within 5km of biomass
                        sources
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Uncertainty management through buffer mechanisms and
                        alternative sourcing strategies
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Real-time inventory management with digital twin
                        operations
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-climitra-green rounded-full mt-3 flex-shrink-0"></div>
                      <p
                        className="text-climitra-text font-montserrat"
                        style={{
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "26px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        End-to-end traceability from collection to biochar
                        production
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Dynamic Image with Fixed Positioning */}
            <div
              className="relative flex flex-col justify-between h-full"
              style={{ minHeight: "620px" }}
            >
              <div className="flex justify-center items-center flex-1">
                <img
                  src={sectionData[expandedSection].image}
                  alt="AI Monitoring Solution"
                  className="w-full object-contain"
                  style={{
                    maxWidth: "90%",
                    height: "662px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="mt-8 px-4">
                <p
                  className="text-climitra-green text-center font-montserrat italic"
                  style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "26px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {sectionData[expandedSection].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PYROLYSIS REACTOR SYSTEM SECTION */}
      <div
        className="bg-[#FAFAFA] py-5rem relative overflow-hidden"
        style={{ width: "100%", minHeight: "64.3125rem" }}
      >
        <div className="max-w-7xl mx-auto px-1rem lg:px-2rem relative">
          {/* Section Header */}
          <div className="text-center mb-5rem" style={{ paddingTop: "5rem" }}>
            <div className="mb-1.5rem">
              <h2
                className="font-montserrat text-center mb-1rem"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontStyle: "normal",
                  fontSize: "36px",
                  lineHeight: "142%",
                  letterSpacing: "0%",
                  whiteSpace: "nowrap",
                  width: "100%",
                  margin: "0 auto",
                  display: "block",
                  textAlign: "center",
                  height: "51px",
                }}
              >
                <span className="text-climitra-green">Pyrolysis</span>
                <span
                  style={{ width: "0.5em", display: "inline-block" }}
                ></span>
                <span className="text-climitra-dark">Reactor System</span>
              </h2>
              {/* Custom line 30px below the heading */}
              <div
                style={{
                  width: "134px",
                  height: "0px",
                  borderBottom: "4px solid #1C6248",
                  margin: "20px auto 0 auto",
                }}
              ></div>
            </div>
            <p
              style={{
                width: "844px",
                height: "31px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "22px",
                lineHeight: "142%",
                letterSpacing: "0%",
                color: "#5D5D5D",
                margin: "30px auto 0 auto",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              Precision-engineered biochar production for industrial
              applications and CDR
            </p>
          </div>

          {/* Main Content Container */}
          <div
            className="relative"
            style={{ height: "45rem", marginTop: "-80px" }}
          >
            {/* Central Reactor Image */}
            <div
              className="absolute inset-x-0 flex justify-center"
              style={{ top: "10rem" }}
            >
              <img
                src="/images/Downpic.cc-2354761597 1.png"
                alt="Pyrolysis Reactor"
                className="object-contain"
                style={{ width: "35.8125rem", height: "22rem" }}
              />
            </div>

            {/* Feature Cards Layout */}
            <div className="absolute inset-0">
              {/* Top Left Card - Digitally Controlled Pyrolysis */}
              <div
                className="absolute bg-white border border-climitra-green rounded-[1.176rem] flex flex-col justify-center items-center"
                style={{
                  width: "13.125rem",
                  height: "15.25rem",
                  left: "4.25rem",
                  top: "18.875rem",
                  padding: "1.5rem 0.978rem 1.442rem 0.9375rem",
                }}
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ width: "11.1875rem", height: "12.3125rem" }}
                >
                  <div
                    className="border border-climitra-green rounded-[0.785rem] flex justify-center items-center mb-1rem"
                    style={{
                      width: "3.1875rem",
                      height: "3.1875rem",
                      padding: "0.470rem 0.449rem 0.436rem 0.458rem",
                    }}
                  >
                    <img
                      src="/images/Mask group (40).png"
                      alt="Digital Control Icon"
                      className="object-contain"
                      style={{ width: "2.25rem", height: "2.25rem" }}
                    />
                  </div>
                  <h4
                    className="font-montserrat text-climitra-dark text-center mb-1rem"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: "142%",
                      width: "11.1875rem",
                      height: "2.875rem",
                    }}
                  >
                    Digitally Controlled Pyrolysis
                  </h4>
                  <p
                    className="font-montserrat text-[#5D5D5D] text-center"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      lineHeight: "142%",
                      width: "11.1875rem",
                      height: "5.3125rem",
                    }}
                  >
                    PLC-based automation manages temperature, residence time,
                    and heating rate for stable, high-yield operation
                  </p>
                </div>
              </div>

              {/* Top Right Card - Modular & Biomass-Agnostic */}
              <div
                className="absolute bg-white border border-climitra-green rounded-[1.176rem] flex flex-col justify-center items-center"
                style={{
                  width: "13.125rem",
                  height: "15.25rem",
                  right: "4.25rem",
                  top: "17.875rem",
                  padding: "1.5rem 0.978rem 1.442rem 0.9375rem",
                }}
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ width: "11.1875rem", height: "12.3125rem" }}
                >
                  <div
                    className="border border-climitra-green rounded-[0.785rem] flex justify-center items-center mb-1rem"
                    style={{
                      width: "3.1875rem",
                      height: "3.1875rem",
                      padding: "0.4375rem 0.470rem 0.470rem 0.4375rem",
                    }}
                  >
                    <img
                      src="/images/Mask group (39).png"
                      alt="Modular Icon"
                      className="object-contain"
                      style={{ width: "2.25rem", height: "2.25rem" }}
                    />
                  </div>
                  <h4
                    className="font-montserrat text-climitra-dark text-center mb-1rem"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: "142%",
                      width: "11.1875rem",
                      height: "2.875rem",
                    }}
                  >
                    Modular & Biomass-Agnostic
                  </h4>
                  <p
                    className="font-montserrat text-[#5D5D5D] text-center"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      lineHeight: "142%",
                      width: "11.1875rem",
                      height: "5.3125rem",
                    }}
                  >
                    Compatible with diverse feedstocks like Prosopis and
                    Lantana; skid-mounted for easy deployment.
                  </p>
                </div>
              </div>

              {/* Bottom Left Card - Industrial-Grade Biochar Quality */}
              <div
                className="absolute bg-white border border-climitra-green rounded-[1.176rem] inline-flex items-center"
                style={{
                  width: "13.0625rem",
                  height: "15.9375rem",
                  left: "25rem",
                  top: "35.375rem",
                  padding: "1.3125rem 0.9375rem",
                }}
              >
                <div
                  className="flex flex-col items-center"
                  style={{ width: "11.2125rem", height: "13.3125rem" }}
                >
                  <div
                    className="border border-climitra-green rounded-[0.785rem] flex justify-center items-center mb-0.4375rem"
                    style={{
                      width: "3.182rem",
                      height: "3.182rem",
                      padding: "0.4375rem 0.470rem 0.470rem 0.4375rem",
                    }}
                  >
                    <img
                      src="/images/Mask group (38).png"
                      alt="Quality Icon"
                      className="object-contain"
                      style={{ width: "2.25rem", height: "2.25rem" }}
                    />
                  </div>
                  <h4
                    className="font-montserrat text-climitra-dark text-center mb-0.4375rem"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: "142%",
                    }}
                  >
                    Industrial-Grade Biochar Quality
                  </h4>
                  <p
                    className="font-montserrat text-[#5D5D5D] text-center"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      lineHeight: "142%",
                    }}
                  >
                    Engineered to meet end-use requirements in heavy industry,
                    with consistent output across 25+ parameters including fixed
                    carbon, ash, moisture and calorific value.
                  </p>
                </div>
              </div>

              {/* Bottom Right Card - Real-Time Monitoring & Optimization */}
              <div
                className="absolute bg-white border border-climitra-green rounded-[1.176rem] flex flex-col items-center"
                style={{
                  width: "13.125rem",
                  height: "15.9375rem",
                  right: "23.8125rem",
                  top: "35.375rem",
                  padding: "1.3125rem 0.978rem 3.380rem 0.9375rem",
                }}
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ width: "11.1875rem", height: "11.25rem" }}
                >
                  <div
                    className="border border-climitra-green rounded-[0.785rem] flex justify-center items-center mb-1rem"
                    style={{
                      width: "3.1875rem",
                      height: "3.1875rem",
                      padding: "0.4375rem 0.470rem 0.470rem 0.4375rem",
                    }}
                  >
                    <img
                      src="/images/Mask group (37).png"
                      alt="Monitoring Icon"
                      className="object-contain"
                      style={{ width: "2.25rem", height: "2.25rem" }}
                    />
                  </div>
                  <h4
                    className="font-montserrat text-climitra-dark text-center mb-1rem"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      lineHeight: "142%",
                      width: "11.1875rem",
                      height: "2.875rem",
                    }}
                  >
                    Real-Time Monitoring & Optimization
                  </h4>
                  <p
                    className="font-montserrat text-[#5D5D5D] text-center"
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      lineHeight: "142%",
                      width: "11.1875rem",
                      height: "4.25rem",
                    }}
                  >
                    IoT-enabled sensors track process performance and enable
                    auto-adjustments for efficiency and quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Lines and Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Vertical Line from Central image down */}
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

              <div
                className="absolute dotted-circle"
                style={{
                  left: "20.4375rem",
                  top: "24.5rem",
                  width: "4.625rem",
                  height: "4.625rem",
                }}
              >
                <img
                  src="/images/Component 58.png"
                  alt="Dotted Circle"
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className="absolute dotted-circle"
                style={{
                  left: "29.445rem",
                  top: "20.6875rem",
                  width: "4.625rem",
                  height: "4.625rem",
                }}
              >
                <img
                  src="/images/Component 58.png"
                  alt="Dotted Circle"
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className="absolute dotted-circle"
                style={{
                  left: "36.875rem",
                  top: "23.125rem",
                  width: "4.625rem",
                  height: "4.625rem",
                }}
              >
                <img
                  src="/images/Component 58.png"
                  alt="Dotted Circle"
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className="absolute dotted-circle"
                style={{
                  right: "20.2375rem",
                  top: "23.375rem",
                  width: "4.625rem",
                  height: "4.625rem",
                }}
              >
                <img
                  src="/images/Component 58.png"
                  alt="Dotted Circle"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Responsive adjustments for smaller screens */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .absolute[style*="left: 5.25rem"] {
              left: 2rem !important;
            }
            .absolute[style*="right: 5.25rem"] {
              right: 2rem !important;
            }
            .absolute[style*="left: 26.375rem"] {
              left: 50% !important;
              transform: translateX(-50%) !important;
              top: 38rem !important;
            }
            .absolute[style*="right: 5.25rem"][style*="top: 35.375rem"] {
              right: 50% !important;
              transform: translateX(50%) !important;
              top: 58rem !important;
            }
          }

          @media (max-width: 768px) {
            .absolute[style*="width: 35.8125rem"] {
              width: 90% !important;
              height: auto !important;
              position: relative !important;
              top: 2rem !important;
            }
            .absolute[style*="width: 13.125rem"] {
              width: 80% !important;
              max-width: 20rem !important;
              position: relative !important;
              margin: 1rem auto !important;
              left: auto !important;
              right: auto !important;
              top: auto !important;
              transform: none !important;
            }
            .absolute[style*="pointer-events-none"] > * {
              display: none !important;
            }
          }
        `}</style>
      </div>

      {/* DATA INFRASTRUCTURE SECTION */}
      <div className="bg-[#F0FFF9] h-[1425px] relative">
        <div className="w-[1280px] mx-auto px-[123px] pt-[80px] pb-[117px] flex flex-col items-center gap-[80px]">
          {/* Section Header */}
          <div className="w-[972px] h-[198px] relative">
            <div className="w-[872px] h-[106px] flex-shrink-0 absolute left-[50px] top-0">
              <h2 className="w-[872px] text-[36px] font-montserrat leading-[44px] text-center absolute left-0 top-0 h-[88px]">
                <span className="font-semibold text-climitra-dark">
                  Data Infrastructure for{" "}
                </span>
                <span className="font-semibold text-climitra-green">
                  Reliable Industrial Decarbonization
                </span>
              </h2>
              <div className="w-[134px] h-1 bg-climitra-green absolute left-[368px] top-[106px]"></div>
            </div>
            <p className="w-[972px] text-[#5D5D5D] text-center font-montserrat text-[22px] font-normal leading-[142%] absolute left-0 top-[136px] h-[62px]">
              We connect plant-level emissions data with compliance-ready ESG
              dashboards, enabling transparency from the ground to the
              boardroom.
            </p>
          </div>

          {/* Dashboard Sections */}
          <div className="w-[1034px] h-[950px] relative">
            {/* Live Operational Dashboards */}
            <div className="w-[1034px] h-[445px] flex-shrink-0 absolute left-0 top-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51b418d36dbbe482240b87ce10d521e1825bd5c2?width=890"
                alt="Live Operational Dashboard"
                className="w-[445px] h-[445px] flex-shrink-0 aspect-square absolute left-[589px] top-0"
              />
              <div className="w-[509px] h-[262px] flex-shrink-0 absolute left-0 top-[92px]">
                <div className="w-[509px] h-[184px] flex-shrink-0 absolute left-0 top-0">
                  <p className="w-[509px] text-climitra-text font-montserrat text-[22px] font-normal leading-[142%] absolute left-0 top-[60px] h-[124px]">
                    Track biochar usage, blending ratios, and emissions in real
                    time — enabling performance optimization directly inside
                    plant workflows.
                  </p>
                  <h3
                    className="text-climitra-green font-montserrat font-semibold leading-[142%] absolute left-0 top-0"
                    style={{
                      width: "417px",
                      height: "40px",
                      fontWeight: 600,
                      fontStyle: "SemiBold",
                      fontSize: "28px",
                      lineHeight: "142%",
                      letterSpacing: "0%",
                    }}
                  >
                    Live Operational Dashboards
                  </h3>
                </div>
                <button className="inline-flex py-[13px] px-[19px] justify-center items-center gap-[10px] rounded-[8px] bg-climitra-green absolute left-0 top-[214px] w-[162px] h-[48px]">
                  <span className="text-white font-montserrat text-[18px] font-medium leading-normal">
                    Coming Soon
                  </span>
                </button>
              </div>
            </div>

            {/* Automated ESG & Compliance Reporting */}
            <div className="w-[1005px] h-[445px] flex-shrink-0 absolute left-[14px] top-[505px]">
              <div className="w-[480px] h-[302px] flex-shrink-0 absolute left-[525px] top-[72px]">
                <div className="w-[480px] h-[224px] flex-shrink-0 absolute left-0 top-0">
                  <p
                    className="text-climitra-text font-montserrat leading-[142%] absolute left-0 top-[100px]"
                    style={{
                      width: "480px",
                      height: "124px",
                      fontWeight: 400,
                      fontStyle: "Regular",
                      fontSize: "22px",
                      lineHeight: "142%",
                      letterSpacing: "0%",
                      color: "#6C6C6C",
                    }}
                  >
                    Structured emissions data integrates with ESG disclosures
                    and supports compliance with CBAM, CCTS, and industrial
                    decarbonization mandates.
                  </p>
                  <h3
                    className="text-climitra-green font-montserrat font-semibold leading-[142%] absolute left-0 top-0"
                    style={{
                      width: "441px",
                      height: "80px",
                      fontWeight: 600,
                      fontStyle: "SemiBold",
                      fontSize: "28px",
                      lineHeight: "142%",
                      letterSpacing: "0%",
                    }}
                  >
                    Automated ESG & Compliance Reporting
                  </h3>
                </div>
                <button className="inline-flex py-[13px] px-[19px] justify-center items-center gap-[10px] rounded-[8px] bg-climitra-green absolute left-0 top-[254px] w-[162px] h-[48px]">
                  <span className="text-white text-center font-montserrat text-[18px] font-medium leading-normal">
                    Coming Soon
                  </span>
                </button>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7944b508d99778c6437b924b3b21ff7392da2d0a?width=890"
                alt="ESG Compliance Reporting"
                className="w-[445px] h-[445px] flex-shrink-0 aspect-square absolute left-0 top-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FROM CRADLE-TO-CREDIT MRV SECTION */}
      <div className="bg-white min-h-[45.9375rem] relative">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 pt-[5rem] pb-[7.3rem] flex flex-col items-center gap-[5rem]">
          {/* Section Header */}
          <div className="w-full max-w-[60.75rem] flex flex-col items-center gap-[2rem]">
            <div className="flex flex-col items-center gap-[0.875rem]">
              <h2 className="text-center font-montserrat font-semibold leading-[44px]" style={{
                width: "872px",
                height: "44px",
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "36px",
                lineHeight: "44px",
                letterSpacing: "0%",
              }}>
                <span className="text-climitra-dark">From </span>
                <span className="text-climitra-green">Cradle</span>
                <span className="text-climitra-dark">-to-</span>
                <span className="text-climitra-green">Credit MRV</span>
              </h2>
              <div className="w-[8.375rem] h-[0.25rem] bg-climitra-green"></div>
            </div>
            <p className="text-center font-montserrat text-[1.375rem] font-normal leading-[142%] text-[#5D5D5D] max-w-[60.75rem] lg:text-[1.375rem] md:text-[1.25rem] sm:text-[1.125rem]">
              We monitor every stage from field to registry to deliver credits
              that are transparent, traceable and trusted
            </p>
          </div>

          {/* Process Flow */}
          <div className="w-full max-w-[71.375rem] flex flex-col items-center gap-[5rem]">
            {/* Process Steps */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
              {/* Biomass Source */}
              <div className="flex flex-col items-center gap-[1.5rem] min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-[5rem] h-[5rem] flex items-center justify-center rounded-full border-[0.123rem] border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (29).png"
                      alt="Biomass Source Icon"
                      className="w-[2.125rem] h-[2.125rem] filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium leading-[142%] text-center" style={{
                width: "177.43px",
                height: "30.6px",
                fontWeight: 500,
                fontStyle: "Medium",
                fontSize: "21.57px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                  Biomass Source
                </span>
              </div>

              {/* Arrow 1 */}
              <div className="hidden lg:block" style={{ marginTop: "-3.125rem" }}>
                <svg
                  width="2.875rem"
                  height="1.25rem"
                  viewBox="0 0 46 12"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M1.22656 5.21066C0.685181 5.21066 0.246305 5.64954 0.246305 6.19092C0.246305 6.7323 0.685181 7.17118 1.22656 7.17118V5.21066ZM45.3382 6.19092L35.5356 0.531399V11.8504L45.3382 6.19092ZM1.22656 6.19092V7.17118H4.90253V6.19092V5.21066H1.22656V6.19092ZM12.2545 6.19092V7.17118H19.6064V6.19092V5.21066H12.2545V6.19092ZM26.9583 6.19092V7.17118H34.3103V6.19092V5.21066H26.9583V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>

              {/* Conversion */}
              <div className="flex flex-col items-center gap-[1.5rem] min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-[5rem] h-[5rem] flex items-center justify-center rounded-full border-[0.123rem] border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (30).png"
                      alt="Conversion Icon"
                      className="w-[2.125rem] h-[2.125rem] filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium leading-[142%] text-center" style={{
                width: "177.43px",
                height: "30.6px",
                fontWeight: 500,
                fontStyle: "Medium",
                fontSize: "21.57px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                  Conversion
                </span>
              </div>

              {/* Arrow 2 */}
              <div className="hidden lg:block" style={{ marginTop: "-3.125rem" }}>
                <svg
                  width="2.875rem"
                  height="1.25rem"
                  viewBox="0 0 46 12"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M1.375 5.21066C0.833619 5.21066 0.394742 5.64954 0.394742 6.19092C0.394742 6.7323 0.833619 7.17118 1.375 7.17118V5.21066ZM45.4866 6.19092L35.684 0.531399V11.8504L45.4866 6.19092ZM1.375 6.19092V7.17118H5.05097V6.19092V5.21066H1.375V6.19092ZM12.4029 6.19092V7.17118H19.7548V6.19092V5.21066H12.4029V6.19092ZM27.1068 6.19092V7.17118H34.4587V6.19092V5.21066H27.1068V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>

              {/* Transport */}
              <div className="flex flex-col items-center gap-[1.5rem] min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-[5rem] h-[5rem] flex items-center justify-center rounded-full border-[0.123rem] border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (31).png"
                      alt="Transport Icon"
                      className="w-[2.125rem] h-[2.125rem] filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium leading-[142%] text-center" style={{
                width: "177.43px",
                height: "30.6px",
                fontWeight: 500,
                fontStyle: "Medium",
                fontSize: "21.57px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                  Transport
                </span>
              </div>

              {/* Arrow 3 */}
              <div className="hidden lg:block" style={{ marginTop: "-3.125rem" }}>
                <svg
                  width="2.875rem"
                  height="1.25rem"
                  viewBox="0 0 46 12"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M1.51562 5.21066C0.974244 5.21066 0.535367 5.64954 0.535367 6.19092C0.535367 6.7323 0.974244 7.17118 1.51562 7.17118V5.21066ZM45.6272 6.19092L35.8246 0.531399V11.8504L45.6272 6.19092ZM1.51562 6.19092V7.17118H5.19159V6.19092V5.21066H1.51562V6.19092ZM12.5435 6.19092V7.17118H19.8955V6.19092V5.21066H12.5435V6.19092ZM27.2474 6.19092V7.17118H34.5993V6.19092V5.21066H27.2474V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>

              {/* Application */}
              <div className="flex flex-col items-center gap-[1.5rem] min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-[5rem] h-[5rem] flex items-center justify-center rounded-full border-[0.123rem] border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (32).png"
                      alt="Application Icon"
                      className="w-[2.125rem] h-[2.125rem] filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium leading-[142%] text-center" style={{
                width: "177.43px",
                height: "30.6px",
                fontWeight: 500,
                fontStyle: "Medium",
                fontSize: "21.57px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                  Application
                </span>
              </div>

              {/* Arrow 4 */}
              <div className="hidden lg:block" style={{ marginTop: "-3.125rem" }}>
                <svg
                  width="2.875rem"
                  height="1.25rem"
                  viewBox="0 0 46 12"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M1.65625 5.21066C1.11487 5.21066 0.675992 5.64954 0.675992 6.19092C0.675992 6.7323 1.11487 7.17118 1.65625 7.17118V5.21066ZM45.7678 6.19092L35.9653 0.531399V11.8504L45.7678 6.19092ZM1.65625 6.19092V7.17118H5.33222V6.19092V5.21066H1.65625V6.19092ZM12.6841 6.19092V7.17118H20.0361V6.19092V5.21066H12.6841V6.19092ZM27.388 6.19092V7.17118H34.7399V6.19092V5.21066H27.388V6.19092Z"
                    fill="#1C6248"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>

              {/* Carbon Registry */}
              <div className="flex flex-col items-center gap-[1.5rem] min-w-[11.0625rem]">
                <div className="relative">
                  <div className="w-[5rem] h-[5rem] flex items-center justify-center rounded-full border-[0.123rem] border-climitra-green bg-climitra-green">
                    <img
                      src="/images/Mask group (33).png"
                      alt="Carbon Registry Icon"
                      className="w-[2.125rem] h-[2.125rem] filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="text-climitra-green font-montserrat font-medium leading-[142%] text-center" style={{
                width: "177.43px",
                height: "30.6px",
                fontWeight: 500,
                fontStyle: "Medium",
                fontSize: "21.57px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                  Carbon Registry
                </span>
              </div>
            </div>

            {/* Feature Boxes */}
            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-6">
              {/* Digital MRV System */}
              <div className="flex flex-col lg:flex-row items-start gap-4 flex-1 max-w-[19.5625rem]">
                <div className="flex-shrink-0" style={{ marginTop: "1.5rem" }}>
                  <img
                    src="/images/Mask group (34).png"
                    alt="Digital MRV System Icon"
                    className="w-[3.125rem] h-[3.125rem] filter"                 
                  />
                </div>
                <div className="flex flex-col gap-[0.3125rem] flex-1">
                  <h3 className="text-climitra-green font-montserrat font-semibold leading-[142%]" style={{
                width: "243px",
                height: "26px",
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "18px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                    Digital MRV System
                  </h3>
                  <p className="text-climitra-text font-montserrat leading-[142%]" style={{
                width: "253px",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "16px",
                lineHeight: "142%",
                letterSpacing: "0%",
                color: "#6C6C6C",
              }}>
                    Real-time data across sourcing, production, and application
                    for complete emissions tracking.
                  </p>
                </div>
              </div>

              {/* Lifecycle Carbon Accounting */}
              <div className="flex flex-col lg:flex-row items-start gap-4 flex-1 max-w-[24.625rem]">
                <div className="flex-shrink-0"style={{ marginTop: "1.5rem" }}>
                  <img
                    src="/images/Mask group (35).png"
                    alt="Lifecycle Carbon Accounting Icon"
                    className="w-[3.1875rem] h-[3.1875rem] filter"
                  />
                </div>
                <div className="flex flex-col gap-[0.3125rem] flex-1">
                  <h3 className="text-climitra-green font-montserrat font-semibold leading-[142%]" style={{
                width: "323px",
                height: "26px",
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "18px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                    Lifecycle Carbon Accounting (LCA)
                  </h3>
                  <p className="text-climitra-text font-montserrat leading-[142%]" style={{
                width: "253px",
                fontWeight: 400,
                fontStyle: "Regular",
                fontSize: "16px",
                lineHeight: "142%",
                letterSpacing: "0%",
                color: "#6C6C6C",
              }}>
                    Quantified net GHG impact from biomass origin to end use,
                    aligned with global standards.
                  </p>
                </div>
              </div>

              {/* Granular Traceability */}
              <div className="flex flex-col lg:flex-row items-start gap-4 flex-1 max-w-[19.5625rem]">
                <div className="flex-shrink-0"style={{ marginTop: "1.5rem" }}>
                  <img
                    src="/images/Mask group (36).png"
                    alt="Granular Traceability Icon"
                    className="w-[2.625rem] h-[2.625rem] filter mt-[0.1875rem]"
  
                  />
                </div>
                <div className="flex flex-col gap-[0.3125rem] flex-1">
                  <h3 className="text-climitra-green font-montserrat font-semibold leading-[142%]" style={{
                width: "251px",
                height: "26px",
                fontWeight: 600,
                fontStyle: "SemiBold",
                fontSize: "18px",
                lineHeight: "142%",
                letterSpacing: "0%",
              }}>
                    Granular Traceability
                  </h3>
                  <p className="text-climitra-text font-montserrat text-[1rem] font-normal leading-[142%] max-w-[15.8125rem]">
                    Every ton is verifiable with GPS, sensors, and timestamps
                    from field to registry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION SECTION */}
      <div 
        className="relative overflow-hidden" 
        style={{ 
          height: "331px",
          backgroundImage: "url('/images/image 109.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0" style={{ background: "#000000", opacity: 0.57 }}></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4" style={{ marginTop: "-40px" }}>
            <h2 className="text-white font-montserrat font-semibold leading-[120%] text-center flex items-center justify-center" style={{
              width: "910px",
              height: "48px",
              fontWeight: 600,
              fontStyle: "SemiBold",
              fontSize: "40px",
              lineHeight: "120%",
              letterSpacing: "0%",
              margin: "85px auto 20px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              No Guesswork. Just Verified Carbon
            </h2>
            <p className="text-white font-sofia text-center flex items-center justify-center" style={{
              width: "757px",
              height: "44px",
              fontWeight: 400,
              fontStyle: "Medium",
              fontSize: "22px",
              lineHeight: "100%",
              letterSpacing: "0%",
              margin: "0 auto 60px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              From satellite-based biomass mapping to digital MRV, Climitra ensures every ton removed is real, traceable, and credit-ready
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <button
                className="bg-climitra-green text-white font-montserrat font-bold text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
                style={{
                  width: "176px",
                  height: "44px",
                  borderRadius: "8px",
                  padding: "12px 22px",
                  gap: "10px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <span style={{
                  width: "132px",
                  height: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 600,
                  fontStyle: "SemiBold",
                  fontSize: "16px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center"
                }}>
                  Partner with us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TechPage;
