import React, { useState } from "react";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";

const TeamPage = () => {
  const [activeTab, setActiveTab] = useState("team");
  const [isExpanded, setIsExpanded] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#FDFDFD] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[38.1875rem] overflow-hidden">
        <img
          src="/images/team.png"
          alt="Team Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
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

        <div className="absolute w-full top-[10rem] sm:top-[12rem] md:top-[15.1381rem] px-4 flex flex-col items-center z-20">
          <div className="w-full max-w-[18.875rem] flex items-center justify-center">
            <h1 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3.75rem] leading-[120%] font-semibold font-montserrat text-center">
              Our Team
            </h1>
          </div>
          <div className="w-full max-w-[29.25rem] mt-[1.5rem] sm:mt-[2rem] md:mt-[2.5rem] flex items-center justify-center">
            <p className="text-white text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] leading-[100%] font-semibold font-montserrat text-center">
              Driven by <span className="text-white">Purpose.</span> Defined by
              People
            </p>
          </div>
        </div>
      </div>

      {/* MEET THE TEAM SECTION */}
      <div className="w-full bg-[#FDFDFD] py-8 sm:py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] font-semibold font-montserrat leading-[1.8rem] sm:leading-[2.25rem] md:leading-[2.75rem] mb-4 text-center">
              <span className="text-[#0C0C0C]">Meet the </span>
              <span className="text-[#1C6248]">Team</span>
            </h2>
            <div className="w-[6rem] sm:w-[7rem] md:w-[8.375rem] h-1 bg-[#1C6248] rounded"></div>
          </div>

          {/* Team Description */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24 px-0 sm:px-4 md:-mx-[0.8125rem]">
            <p className="text-[#6C6C6C] text-sm sm:text-lg md:text-xl font-montserrat font-normal leading-[1.4rem] sm:leading-[1.6rem] md:leading-[1.875rem]">
              Climitra's founding team is a group of dynamic engineers
              passionate about climate solutions. With experience at firms like
              McKinsey, Schlumberger, and Bain, we bring deep technical and
              operational expertise. Our backgrounds span climate innovation,
              advanced engineering, and scalable sustainability solutions.
              Driven by impact, we're unlocking India's billion-ton biomass
              opportunity.
            </p>
          </div>

          {/* Tab Navigation */}
       <div className="flex items-center justify-center mb-8 sm:mb-12 md:mb-16">
  <div className="flex items-center bg-white rounded-lg gap-[40px] sm:gap-[60px] md:gap-[80px]">

              <div className="relative">
                <button
                  onClick={() => setActiveTab("team")}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-lg sm:text-xl md:text-2xl font-semibold font-montserrat transition-colors ${
                    activeTab === "team" ? "text-[#1C6248]" : "text-[#C9C9C8]"
                  }`}
                >
                  Team
                </button>
                {activeTab === "team" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1.2rem] sm:w-[1.4rem] md:w-[1.6875rem] h-1 bg-[#1C6248]"></div>
                )}
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setActiveTab("advisors")}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-lg sm:text-xl md:text-2xl font-semibold font-montserrat transition-colors ${
                    activeTab === "advisors" ? "text-[#1C6248]" : "text-[#C9C9C8]"
                  }`}
                >
                  Advisors
                </button>
                {activeTab === "advisors" && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1.2rem] sm:w-[1.4rem] md:w-[1.6875rem] h-1 bg-[#1C6248]"></div>
                )}
              </div>
            </div>
          </div>

          {/* Team Tab Content */}
          {activeTab === "team" && (
            <div>
{/* Founders Section */}
<div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-24">
  <h3 className="text-[#1C6248] text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-semibold font-montserrat mb-2">
    Founders
  </h3>
  <div className="w-[1.2rem] sm:w-[1.4rem] md:w-[1.6875rem] h-1 bg-[#1C6248] mb-8 sm:mb-12 md:mb-16"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20 max-w-6xl w-full justify-items-center">
    {[
      {
        name: "Shubhankar Mihir Seth",
        img: "/images/Frame 1984078250 (1).png",
      },
      {
        name: "Shaurya Sharma",
        img: "/images/Frame 1984078251.png",
      },
      {
        name: "Aryaman Mihir Seth",
        img: "/images/Frame 1984078252.png",
      },
    ].map((member, index) => (
      <div key={index} className="flex flex-col items-center">
        <div
          className={`relative flex-shrink-0 rounded-lg bg-white overflow-hidden ${
            index === 0
              ? "w-[200px] sm:w-[225px] md:w-[250px] h-[260px] sm:h-[290px] md:h-[320px] -mt-[20px] sm:mt-[-28px] md:-mt-[35px] mb-4 sm:mb-5 md:mb-6"
              : "w-[200px] sm:w-[225px] md:w-[250px] h-[225px] sm:h-[255px] md:h-[285px] mb-4 sm:mb-5 md:mb-6"
          }`}
        >
          <img
            src={member.img}
            alt={member.name}
            className={`absolute w-full h-full ${
              index === 0
                ? "object-contain -translate-y-[8px] sm:-translate-y-[9px] md:-translate-y-[10px]"
                : "object-contain p-1 sm:p-1.5 md:p-2"
            }`}
          />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-[1.5rem] sm:w-[1.625rem] md:w-[1.75rem] h-[1.5rem] sm:h-[1.625rem] md:h-[1.75rem] border-[1.5px] border-[#1C6248] rounded-[0.3125rem] p-[0.2rem] sm:p-[0.225rem] md:p-[0.25rem] flex items-center justify-center">
            <img
              src="/images/linkedin_teams.png"
              alt="LinkedIn"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-[#1C6248] text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] font-medium font-montserrat text-center">
            {member.name}
          </h4>
        </div>
      </div>
    ))}
  </div>
</div>
{/* Core Team Section */}
<div className="flex flex-col items-center mb-[60px] sm:mb-[85px] md:mb-[115px]">

  <h3 className="text-[#1C6248] text-[1.125rem] sm:text-[1.25rem] md:text-[1.5rem] font-semibold font-montserrat mb-2">
    Core Team
  </h3>
  <div className="w-[1.2rem] sm:w-[1.4rem] md:w-[1.6875rem] h-1 bg-[#1C6248] mb-8 sm:mb-12 md:mb-16"></div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-20 max-w-6xl w-full justify-items-center">
    {[
      {
        name: "Nandini Kaushik",
        img: "/images/Frame 1984078251.png",
        imageHeight: "h-[225px] sm:h-[255px] md:h-[285px]",
        imgClass: "object-contain p-1 sm:p-1.5 md:p-2",
        marginTop: "mt-0",
      },
      {
        name: "Sanat Vohra",
        img: "/images/Frame 1984078371.png",
        imageHeight: "h-[235px] sm:h-[265px] md:h-[295px]",
        imgClass: "object-contain p-1 sm:p-1.5 md:p-2",
        marginTop: "-mt-1 sm:-mt-1.5 md:-mt-2",
      },
      {
        name: "Aman Agarwal",
        img: "/images/Frame 1984078370.png",
        imageHeight: "h-[225px] sm:h-[255px] md:h-[285px]",
        imgClass: "object-cover p-0.5 sm:p-0.75 md:p-1 translate-y-[3px] sm:translate-y-[3.5px] md:translate-y-[4px]",
        marginTop: "mt-0",
      },
    ].map((member, index) => (
      <div key={index} className={`flex flex-col items-center ${member.marginTop}`}>
        <div
          className={`relative w-[200px] sm:w-[225px] md:w-[250px] flex-shrink-0 rounded-lg bg-white overflow-hidden mb-4 sm:mb-5 md:mb-6 ${member.imageHeight}`}
        >
          <img
            src={member.img}
            alt={member.name}
            className={`absolute w-full h-full ${member.imgClass}`}
          />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-[1.5rem] sm:w-[1.625rem] md:w-[1.75rem] h-[1.5rem] sm:h-[1.625rem] md:h-[1.75rem] border-[1.5px] border-[#1C6248] rounded-[0.3125rem] p-[0.2rem] sm:p-[0.225rem] md:p-[0.25rem] flex items-center justify-center">
            <img
              src="/images/linkedin_teams.png"
              alt="LinkedIn"
              className="w-full h-full object-contain"
            />
          </div>
          <h4 className="text-[#1C6248] text-[0.875rem] sm:text-[1rem] md:text-[1.125rem] font-medium font-montserrat text-center">
            {member.name}
          </h4>
        </div>
      </div>
    ))}
  </div>
</div>


            </div>
          )}

          {/* Advisors Tab Content */}
          {activeTab === "advisors" && (
            <div>
              {/* Profile Card & Details Section */}
             <div className={`flex ${isExpanded ? "flex-col items-center" : "flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-4"} mb-8 sm:mb-12 md:mb-16`}>

                {/* Image */}
<div
  style={{
    width: isExpanded ? "280px" : window.innerWidth >= 768 ? "280px" : "250px",
    height: isExpanded ? "302px" : window.innerWidth >= 768 ? "330px" : "285px",
  }}
  className="flex-shrink-0 mb-6 sm:mb-6 lg:mb-0 rounded-lg overflow-hidden bg-white"
>
  <img
    src="/images/prof_im.png"
    alt="Prof. Vikram Vishal"
    className="w-full h-full object-contain"
    draggable={false}
  />
</div>


                {/* Info Block */}
                <div
                  className={`flex flex-col ${isExpanded ? "items-center" : "items-center sm:items-start sm:justify-center"} text-left`}
                >
                  {/* LinkedIn + Name */}
                  <div
                    className={`flex items-center gap-2 mb-2 ${isExpanded ? "justify-center" : "justify-center sm:justify-start"}`}
                  >
                    <div className="w-[1.5rem] sm:w-[1.625rem] md:w-[1.75rem] h-[1.5rem] sm:h-[1.625rem] md:h-[1.75rem] border-[0.09375rem] border-[#1C6248] rounded-[0.3125rem] flex items-center justify-center">
                      <img
                        src="/images/linkedin_teams.png"
                        alt="LinkedIn"
                        className="w-[0.65rem] sm:w-[0.7rem] md:w-[0.75rem] h-[0.65rem] sm:h-[0.7rem] md:h-[0.75rem]"
                      />
                    </div>
                    <h3 className="text-[#1C6248] text-lg sm:text-lg md:text-xl font-medium font-montserrat">
                      Prof. Vikram Vishal
                    </h3>
                  </div>

                  {/* Designation */}
                  <p
                    className={`text-[#767676] text-[14px] sm:text-[15px] md:text-[16px] font-light font-montserrat leading-[24px] sm:leading-[27px] md:leading-[30px] ${isExpanded ? "text-center" : "text-center sm:text-left"}`}
                  >
                    Professor, IIT Bombay
                  </p>
                  <p
                    className={`text-[#767676] text-[14px] sm:text-[15px] md:text-[16px] font-light font-montserrat leading-[24px] sm:leading-[27px] md:leading-[30px] ${isExpanded ? "text-center" : "text-center sm:text-left"}`}
                  >
                    Founder, UrjanovaC
                  </p>

                  {/* Read More Button - only when not expanded */}
                  {!isExpanded && (
                    <div className="mt-4">
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 sm:gap-3 bg-[#1C6248] text-white px-4 sm:px-5 md:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold font-montserrat transition-all hover:bg-[#0F4D36]"
                      >
                        <span>Read More</span>
                        <svg
                          className="w-2.5 sm:w-3 h-2 sm:h-2.5 transition-transform rotate-180"
                          viewBox="0 0 12 10"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29341 2.93683C5.48094 2.74936 5.73524 2.64404 6.00041 2.64404C6.26557 2.64404 6.51988 2.74936 6.70741 2.93683L10.7074 6.93683C10.8896 7.12543 10.9904 7.37803 10.9881 7.64023C10.9858 7.90243 10.8806 8.15324 10.6952 8.33865C10.5098 8.52406 10.259 8.62922 9.99681 8.6315C9.73461 8.63378 9.48201 8.53299 9.29341 8.35083L6.00041 5.05783L2.70741 8.35083C2.5188 8.53299 2.2662 8.63378 2.00401 8.6315C1.74181 8.62922 1.491 8.52406 1.30559 8.33865C1.12018 8.15324 1.01501 7.90243 1.01273 7.64023C1.01045 7.37803 1.11125 7.12543 1.29341 6.93683L5.29341 2.93683Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Detailed Bio - only when expanded */}
              {isExpanded && (
                <div className="text-center mb-6 sm:mb-7 md:mb-8 px-0 sm:px-4 md:-mx-[42px]">
                  <p className="text-[#6C6C6C] font-montserrat font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[27px] md:leading-[30px] text-center">
                    Prof. Vikram Vishal serves as a Professor in the Department
                    of Earth Sciences, and the Centre for Climate Studies, at
                    IIT Bombay. His academic journey includes various roles at
                    MIT, Stanford University, Monash University, IIT Roorkee,
                    IIT Bhubaneswar along with professional stints at Tata Steel
                    and Shell. He is the Convener of the DST-National Centre of
                    Excellence in CCUS, and is also the founder and CEO of
                    UrjanovaC Private Limited - a clean energy and net-zero
                    solutions company.
                    <br />
                    <br />
                    Prof. Vishal specializes in decarbonization and enhanced
                    energy recovery. He engages as a CCUS Expert and a Knowledge
                    Partner to lead Indian industries, multiple ministries and
                    chairs two subcommittees on CCUS at the Bureau of Indian
                    Standards. He also serves as the key National Expert on CCUS
                    and CO₂ removal for intergovernmental negotiations at the
                    IPCC.
                    <br />
                    <br />
                    Prof. Vishal holds recognition from all major science
                    academies in India. A three-time national award and two-time
                    Fulbright fellowship recipient, he has authored over a
                    hundred scientific research publications, a dozen national
                    and international S&T roadmaps, and has received five
                    patents.
                  </p>

                  {/* Close Button - positioned below the paragraph */}
                  <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="flex items-center gap-2 sm:gap-3 bg-[#1C6248] text-white px-4 sm:px-5 md:px-6 py-2 rounded-lg text-sm sm:text-base font-semibold font-montserrat transition-all hover:bg-[#0F4D36]"
                    >
                      <span>Close</span>
                      <svg
                        className="w-2.5 sm:w-3 h-2 sm:h-2.5 transition-transform rotate-0"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29341 2.93683C5.48094 2.74936 5.73524 2.64404 6.00041 2.64404C6.26557 2.64404 6.51988 2.74936 6.70741 2.93683L10.7074 6.93683C10.8896 7.12543 10.9904 7.37803 10.9881 7.64023C10.9858 7.90243 10.8806 8.15324 10.6952 8.33865C10.5098 8.52406 10.259 8.62922 9.99681 8.6315C9.73461 8.63378 9.48201 8.53299 9.29341 8.35083L6.00041 5.05783L2.70741 8.35083C2.5188 8.53299 2.2662 8.63378 2.00401 8.6315C1.74181 8.62922 1.491 8.52406 1.30559 8.33865C1.12018 8.15324 1.01501 7.90243 1.01273 7.64023C1.01045 7.37803 1.11125 7.12543 1.29341 6.93683L5.29341 2.93683Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TeamPage;
