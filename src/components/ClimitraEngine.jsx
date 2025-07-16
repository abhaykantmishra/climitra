import React, { useState, useEffect, useRef } from "react";
import AnimatedImpact from "./AnimatedImpact";
import ClimitraHeader from "./ClimitraHeader";
import Footer from "./Footer";
import { Menu } from "lucide-react";
import TimelineComponent from "./Timeline-desktop";

function ClimitraEngine() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timelineAnimationStarted, setTimelineAnimationStarted] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [showBiomassText, setShowBiomassText] = useState(true);
  const [startShrinking, setStartShrinking] = useState(false);
  const [showBiocharBox, setShowBiocharBox] = useState(false);
  const [biocharPhase, setBiocharPhase] = useState(0);
  const [verticalLineProgress, setVerticalLineProgress] = useState(0);
  const timelineRef = useRef(null);

  // Intersection Observer for timeline animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timelineAnimationStarted) {
            setTimelineAnimationStarted(true);
            startTimelineAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, [timelineAnimationStarted]);

  const startTimelineAnimation = () => {
    setAnimationPhase(0);
    setShowBiomassText(true);
    setStartShrinking(false);
    setShowBiocharBox(false);
    setBiocharPhase(0);
    setVerticalLineProgress(0);
    
    setTimeout(() => setAnimationPhase(1), 1000);
    setTimeout(() => setAnimationPhase(2), 4000);
    setTimeout(() => setAnimationPhase(3), 6000);
    setTimeout(() => setAnimationPhase(4), 8000);
    setTimeout(() => setAnimationPhase(4.5), 9000);
    
    setTimeout(() => {
      setStartShrinking(true);
      setShowBiomassText(false);
    }, 14000);
    
    setTimeout(() => setAnimationPhase(5), 16000);
    
    // Start biochar animation after biomass disappears
    setTimeout(() => {
      setShowBiocharBox(true);
      setBiocharPhase(1); // Emerge as sphere
    }, 16500);
    
    setTimeout(() => setBiocharPhase(2), 17000); // Unmould to box
    setTimeout(() => setBiocharPhase(3), 17500); // Start translation to second circular
    setTimeout(() => setBiocharPhase(4), 19500); // Reach second circular, start vertical line
    
    // Vertical line animation and third element appearance
    setTimeout(() => setVerticalLineProgress(1), 20000); // Start vertical line translation
    setTimeout(() => setBiocharPhase(5), 22000); // Third element and card appear
    
    // Continue vertical line to fourth element
    setTimeout(() => setVerticalLineProgress(2), 22500); // Continue line to fourth
    setTimeout(() => setBiocharPhase(6), 24500); // Fourth element and card appear
  };

  const handleNavigation = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page);
    }
  };

  return (
    <div className="bg-[rgba(253,253,253,1)] flex flex-col overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[38.1875rem] overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
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
          zIndex={10}
        />

        {/* Hero Text */}
        <div className="absolute w-full top-[14.75rem] px-4 sm:px-6 md:px-8 flex flex-col items-center z-10">
          <h1 className="text-white font-semibold font-montserrat leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-[57.6875rem] text-center mx-auto">
            Unlocking India's billion-ton biomass opportunity for Climate Action
          </h1>

          {/* CTA Button */}
          <div className="mt-[5.3125rem] flex justify-center">
            <button onClick={() => handleNavigation("contact")} className="w-32 sm:w-36 md:w-40 lg:w-44 h-9 sm:h-10 md:h-11 lg:h-12 px-4 py-2 bg-teal-800 rounded-full flex items-center justify-center gap-2 text-white text-sm font-semibold font-montserrat hover:bg-teal-700 transition-colors duration-200">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* TIMELINE SECTION - Desktop and Mobile */}
      <div className="w-full bg-white">
        {/* Desktop Layout */}
        <TimelineComponent />

        {/* Mobile Layout - Responsive design */}
        <div className="mobile:block lg:hidden w-full bg-white" style={{ 
          paddingTop: 'clamp(2rem, 8vw, 3rem)', 
          paddingLeft: 'clamp(1rem, 4vw, 1.5rem)', 
          paddingRight: 'clamp(1rem, 4vw, 1.5rem)', 
          paddingBottom: 'clamp(4rem, 12vw, 6rem)' 
        }}>
          {/* Header */}
          <div className="text-center" style={{ marginBottom: 'clamp(2rem, 8vw, 3rem)' }}>
            <h2 className="font-semibold font-montserrat mb-3" style={{ 
              fontSize: 'clamp(1.25rem, 5.5vw, 1.5rem)', 
              lineHeight: 'clamp(1.75rem, 7vw, 2rem)' 
            }}>
              Behind the <span className="text-teal-800">Climitra Engine</span>
            </h2>
            <div className="bg-teal-800 mx-auto" style={{ 
              width: 'clamp(4rem, 18vw, 5rem)', 
              height: 'clamp(2px, 1vw, 4px)', 
              marginBottom: 'clamp(1rem, 5vw, 1.5rem)' 
            }}></div>
            <p className="font-normal font-montserrat text-neutral-500" style={{ 
              fontSize: 'clamp(0.75rem, 3.5vw, 1rem)', 
              lineHeight: 'clamp(1.125rem, 5vw, 1.5rem)', 
              padding: '0 clamp(0.5rem, 3vw, 1rem)' 
            }}>
              Building a <span className="text-teal-800 font-semibold">vertically integrated ecosystem</span> for waste biomass-driven industrial decarbonization and carbon dioxide removal (CDR) in India
            </p>
          </div>

          {/* Mobile Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-6 w-0.5 bg-teal-800" style={{ height: 'calc(3 * clamp(180px, 50vw, 192px) + 3 * 4rem + 24px)' }}></div>

            {/* Timeline Item 1: Biomass Mapping */}
            <div className="relative mb-16" style={{ height: 'clamp(180px, 50vw, 192px)' }}>
              <div className="absolute left-0 top-6 bg-white rounded-full border-2 border-zinc-100 flex items-center justify-center z-10" style={{ width: '45.841px', height: '45.841px' }}>
                <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute left-12 top-12 border-t-2 border-dotted border-teal-800" style={{ right: 'calc(clamp(50px, 15vw, 70px) + 6.729px)' }}></div>
              <div className="absolute bg-teal-800 rounded-full z-10" style={{ 
                right: 'clamp(50px, 15vw, 70px)', 
                top: '48px', 
                width: '13.458px', 
                height: '13.458px', 
                transform: 'translateY(-50%)' 
              }}></div>
              <div className="absolute flex items-center justify-center" style={{ 
                right: 'clamp(8px, 2vw, 12px)',
                top: '32px',
                width: 'clamp(32px, 8vw, 49px)', 
                height: 'clamp(32px, 8vw, 49px)' 
              }}>
                <img src="images/satellite.png" alt="Satellite" className="object-contain" style={{ 
                  width: 'clamp(24px, 6vw, 36px)', 
                  height: 'clamp(24px, 6vw, 36px)' 
                }} />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-9 bg-teal-800 text-white font-semibold font-montserrat z-20 overflow-hidden" style={{ 
                borderRadius: 'clamp(3px, 1.2vw, 5px)', 
                padding: 'clamp(4px, 1.5vw, 8px) clamp(6px, 2vw, 12px)',
                fontSize: 'clamp(10px, 2.8vw, 12px)',
                outline: 'clamp(1px, 0.4vw, 2px) solid',
                outlineColor: '#134e4a',
                outlineOffset: 'clamp(-1px, -0.3vw, -2px)'
              }}>
                <div className="text-center justify-start leading-none">Biomass</div>
              </div>
              <div className="absolute right-0 top-20 flex flex-col items-end gap-2" style={{ 
                width: 'clamp(240px, 70vw, 281.395px)', 
                height: 'clamp(140px, 45vw, 174.76px)' 
              }}>
                <div className="bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)', 
                  height: 'clamp(20px, 6.5vw, 26.465px)', 
                  padding: 'clamp(2px, 0.8vw, 3.385px) clamp(4px, 1.5vw, 8px)' 
                }}>
                  <h3 className="justify-start text-teal-800 font-semibold font-montserrat text-center" style={{
                    fontSize: 'clamp(10px, 3vw, 12px)',
                    lineHeight: 'clamp(12px, 3.6vw, 14px)'
                  }}>
                    Biomass Mapping and Mobilisation
                  </h3>
                </div>
                <p className="text-neutral-500 font-normal font-source-sans leading-tight text-right mb-3" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)',
                  fontSize: 'clamp(10px, 3vw, 12px)',
                  lineHeight: 'clamp(14px, 4.2vw, 16px)'
                }}>
                  We digitize biomass supply chains using AI-led satellite mapping and local intel, mobilizing 1,000+ tons/day to meet industrial specs—solving visibility, quality, and logistics at scale for steel decarbonization.
                </p>
                <button onClick={() => {handleNavigation("tech")}} className="bg-teal-800 text-white rounded-lg font-medium font-montserrat flex items-center justify-center whitespace-nowrap" style={{
                  padding: 'clamp(6px, 2vw, 8px) clamp(8px, 3vw, 12px)',
                  fontSize: 'clamp(9px, 2.5vw, 12px)',
                  borderRadius: 'clamp(4px, 1.5vw, 8px)'
                }}>
                  Know More
                </button>
              </div>
            </div>

            {/* Timeline Item 2: Bespoke Conversion Technology */}
            <div className="relative mb-16" style={{ height: 'clamp(180px, 50vw, 192px)' }}>
              <div className="absolute left-0 top-6 bg-white rounded-full border-2 border-zinc-100 flex items-center justify-center z-10" style={{ width: '45.841px', height: '45.841px' }}>
                <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute left-12 top-12 border-t-2 border-dotted border-teal-800" style={{ right: 'calc(clamp(50px, 15vw, 70px) + 6.729px)' }}></div>
              <div className="absolute bg-teal-800 rounded-full z-10" style={{ 
                right: 'clamp(50px, 15vw, 70px)', 
                top: '48px', 
                width: '13.458px', 
                height: '13.458px', 
                transform: 'translateY(-50%)' 
              }}></div>
              <div className="absolute flex items-center justify-center" style={{ 
                right: 'clamp(8px, 2vw, 12px)',
                top: '32px',
                width: 'clamp(32px, 8vw, 49px)', 
                height: 'clamp(32px, 8vw, 49px)' 
              }}>
                <img src="images/fire.png" alt="Fire" className="object-contain" style={{ 
                  width: 'clamp(24px, 6vw, 36px)', 
                  height: 'clamp(24px, 6vw, 36px)' 
                }} />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-9 bg-teal-800 text-white font-semibold font-montserrat z-20 overflow-hidden" style={{ 
                borderRadius: 'clamp(3px, 1.2vw, 5px)', 
                padding: 'clamp(4px, 1.5vw, 8px) clamp(6px, 2vw, 12px)',
                fontSize: 'clamp(10px, 2.8vw, 12px)',
                outline: 'clamp(1px, 0.4vw, 2px) solid',
                outlineColor: '#134e4a',
                outlineOffset: 'clamp(-1px, -0.3vw, -2px)'
              }}>
                <div className="text-center justify-start leading-none">Biomass</div>
              </div>
              <div className="absolute right-0 top-20 flex flex-col items-end gap-2" style={{ 
                width: 'clamp(240px, 70vw, 281.395px)', 
                height: 'clamp(140px, 45vw, 174.76px)' 
              }}>
                <div className="bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)', 
                  height: 'clamp(20px, 6.5vw, 26.465px)', 
                  padding: 'clamp(2px, 0.8vw, 3.385px) clamp(4px, 1.5vw, 8px)' 
                }}>
                  <h3 className="justify-start text-teal-800 font-semibold font-montserrat text-center" style={{
                    fontSize: 'clamp(10px, 3vw, 12px)',
                    lineHeight: 'clamp(12px, 3.6vw, 14px)'
                  }}>
                    Bespoke Conversion Technology
                  </h3>
                </div>
                <p className="text-neutral-500 font-normal font-source-sans leading-tight text-right mb-3" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)',
                  fontSize: 'clamp(10px, 3vw, 12px)',
                  lineHeight: 'clamp(14px, 4.2vw, 16px)'
                }}>
                  We build advanced pyrolysis systems tailored to local biomass, delivering consistent quality across 25+ industrial parameters including calorific value, volatile matter, ash, moisture, and fixed carbon.
                </p>
                <button onClick={() => {handleNavigation("tech")}} className="bg-teal-800 text-white rounded-lg font-medium font-montserrat flex items-center justify-center whitespace-nowrap" style={{
                  padding: 'clamp(6px, 2vw, 8px) clamp(8px, 3vw, 12px)',
                  fontSize: 'clamp(9px, 2.5vw, 12px)',
                  borderRadius: 'clamp(4px, 1.5vw, 8px)'
                }}>
                  Know More
                </button>
              </div>
            </div>

            {/* Timeline Item 3: Industrial Decarbonization */}
            <div className="relative mb-16" style={{ height: 'clamp(180px, 50vw, 192px)' }}>
              <div className="absolute left-0 top-6 bg-white rounded-full border-2 border-zinc-100 flex items-center justify-center z-10" style={{ width: '45.841px', height: '45.841px' }}>
                <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute left-12 top-12 border-t-2 border-dotted border-lime-500" style={{ right: 'calc(clamp(50px, 15vw, 70px) + 6.729px)' }}></div>
              <div className="absolute bg-teal-800 rounded-full z-10" style={{ 
                right: 'clamp(50px, 15vw, 70px)', 
                top: '48px', 
                width: '13.458px', 
                height: '13.458px', 
                transform: 'translateY(-50%)' 
              }}></div>
              <div className="absolute flex items-center justify-center" style={{ 
                right: 'clamp(8px, 2vw, 12px)',
                top: '32px',
                width: 'clamp(32px, 8vw, 49px)', 
                height: 'clamp(32px, 8vw, 49px)' 
              }}>
                <img src="images/smoke.png" alt="Industrial" className="object-contain" style={{ 
                  width: 'clamp(24px, 6vw, 36px)', 
                  height: 'clamp(24px, 6vw, 36px)' 
                }} />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-9 bg-lime-500 text-white font-semibold font-montserrat z-20 overflow-hidden" style={{ 
                borderRadius: 'clamp(3px, 1.2vw, 5px)', 
                padding: 'clamp(4px, 1.5vw, 8px) clamp(6px, 2vw, 12px)',
                fontSize: 'clamp(10px, 2.8vw, 12px)',
                outline: 'clamp(1px, 0.4vw, 2px) solid',
                outlineColor: '#65a30d',
                outlineOffset: 'clamp(-1px, -0.3vw, -2px)'
              }}>
                <div className="text-center justify-start leading-none">Biochar</div>
              </div>
              <div className="absolute right-0 top-20 flex flex-col items-end gap-2" style={{ 
                width: 'clamp(240px, 70vw, 281.395px)', 
                height: 'clamp(140px, 45vw, 174.76px)' 
              }}>
                <div className="bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)', 
                  height: 'clamp(20px, 6.5vw, 26.465px)', 
                  padding: 'clamp(2px, 0.8vw, 3.385px) clamp(4px, 1.5vw, 8px)' 
                }}>
                  <h3 className="justify-start text-teal-800 font-semibold font-montserrat text-center" style={{
                    fontSize: 'clamp(10px, 3vw, 12px)',
                    lineHeight: 'clamp(12px, 3.6vw, 14px)'
                  }}>
                    Industrial Decarbonization
                  </h3>
                </div>
                <p className="text-neutral-500 font-normal font-source-sans leading-tight text-right mb-3" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)',
                  fontSize: 'clamp(10px, 3vw, 12px)',
                  lineHeight: 'clamp(14px, 4.2vw, 16px)'
                }}>
                  We integrate into steel plants with dynamic biochar blending, real-time emissions tracking, and ESG dashboards—fully aligned with CBAM, CCTS, and green steel compliance pathways.
                </p>
                <button onClick={() => {handleNavigation("industrial")}} className="bg-teal-800 text-white rounded-lg font-medium font-montserrat flex items-center justify-center whitespace-nowrap" style={{
                  padding: 'clamp(6px, 2vw, 8px) clamp(8px, 3vw, 12px)',
                  fontSize: 'clamp(9px, 2.5vw, 12px)',
                  borderRadius: 'clamp(4px, 1.5vw, 8px)'
                }}>
                  Know More
                </button>
              </div>
            </div>

            {/* Timeline Item 4: Carbon Market Integration */}
            <div className="relative mb-16" style={{ height: 'clamp(180px, 50vw, 192px)' }}>
              <div className="absolute left-0 top-6 bg-white rounded-full border-2 border-zinc-100 flex items-center justify-center z-10" style={{ width: '45.841px', height: '45.841px' }}>
                <img src="/images/timeline-item.svg" alt="Timeline Item" className="w-8 h-8 object-contain" />
              </div>
              <div className="absolute left-12 top-12 border-t-2 border-dotted border-lime-500" style={{ right: 'calc(clamp(50px, 15vw, 70px) + 6.729px)' }}></div>
              <div className="absolute bg-teal-800 rounded-full z-10" style={{ 
                right: 'clamp(50px, 15vw, 70px)', 
                top: '48px', 
                width: '13.458px', 
                height: '13.458px', 
                transform: 'translateY(-50%)' 
              }}></div>
              <div className="absolute flex items-center justify-center" style={{ 
                right: 'clamp(8px, 2vw, 12px)',
                top: '32px',
                width: 'clamp(32px, 8vw, 49px)', 
                height: 'clamp(32px, 8vw, 49px)' 
              }}>
                <img src="images/tree.png" alt="Carbon" className="object-contain" style={{ 
                  width: 'clamp(24px, 6vw, 36px)', 
                  height: 'clamp(24px, 6vw, 36px)' 
                }} />
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-9 bg-lime-500 text-white font-semibold font-montserrat z-20 overflow-hidden" style={{ 
                borderRadius: 'clamp(3px, 1.2vw, 5px)', 
                padding: 'clamp(4px, 1.5vw, 8px) clamp(6px, 2vw, 12px)',
                fontSize: 'clamp(10px, 2.8vw, 12px)',
                outline: 'clamp(1px, 0.4vw, 2px) solid',
                outlineColor: '#65a30d',
                outlineOffset: 'clamp(-1px, -0.3vw, -2px)'
              }}>
                <div className="text-center justify-start leading-none">Biochar</div>
              </div>
              <div className="absolute right-0 top-20 flex flex-col items-end gap-2" style={{ 
                width: 'clamp(240px, 70vw, 281.395px)', 
                height: 'clamp(140px, 45vw, 174.76px)' 
              }}>
                <div className="bg-teal-50 inline-flex justify-center items-center gap-2.5 overflow-hidden" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)', 
                  height: 'clamp(20px, 6.5vw, 26.465px)', 
                  padding: 'clamp(2px, 0.8vw, 3.385px) clamp(4px, 1.5vw, 8px)' 
                }}>
                  <h3 className="justify-start text-teal-800 font-semibold font-montserrat text-center" style={{
                    fontSize: 'clamp(10px, 3vw, 12px)',
                    lineHeight: 'clamp(12px, 3.6vw, 14px)'
                  }}>
                    Carbon Market Integration
                  </h3>
                </div>
                <p className="text-neutral-500 font-normal font-source-sans leading-tight text-right mb-3" style={{ 
                  width: 'clamp(200px, 62vw, 247.544px)',
                  fontSize: 'clamp(10px, 3vw, 12px)',
                  lineHeight: 'clamp(14px, 4.2vw, 16px)'
                }}>
                  We generate high-integrity carbon removal credits through a digital MRV framework, enabling 100+ year carbon sequestration and access to both voluntary and compliance markets.
                </p>
                <button onClick={() => {handleNavigation("cdr")}} className="hover:cursor-pointer  bg-teal-800 text-white rounded-lg font-medium font-montserrat flex items-center justify-center whitespace-nowrap" style={{
                  padding: 'clamp(6px, 2vw, 8px) clamp(8px, 3vw, 12px)',
                  fontSize: 'clamp(9px, 2.5vw, 12px)',
                  borderRadius: 'clamp(4px, 1.5vw, 8px)'
                }}>
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* IMPACT SECTION */}

      <AnimatedImpact />

      {/* CURRENT PROJECTS SECTION - Fixed width, 5.0rem gap, center-aligned */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-[#0c0c0c] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-none font-montserrat">
            Our <span className="text-climitra-green">Current</span> Projects
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-climitra-green mx-auto mt-3 sm:mt-4 md:mt-6"></div>
        </div>

        <div className="max-w-[64.0rem] mx-auto mt-[5.0rem] flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[5.0rem]">
          {/* Project 1 */}
          <div className="w-[17.75rem] h-[19.1875rem] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 lg:mb-0">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/389c7961cf69c74d45a01118e0bd13ccdbf78a96?placeholderIfAbsent=true"
                alt="Uttarakhand Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[1.5rem] px-4 pb-5">
              <h3 className="text-climitra-green text-base sm:text-lg md:text-xl font-medium leading-tight font-montserrat">
                Uttarakhand
              </h3>
              <p className="text-climitra-text italic text-sm sm:text-base leading-relaxed mt-1">
                Lantana camara
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-md border border-climitra-green px-4 py-2 text-sm font-medium text-climitra-green">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 (center) */}
          <div className="w-[17.75rem] h-[19.1875rem] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-12 lg:mb-0">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/6b12783ee2f81663334c50ab55a560fdb37dff93?placeholderIfAbsent=true"
                alt="Punjab Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[1.5rem] px-4 pb-5">
              <h3 className="text-climitra-green text-base sm:text-lg md:text-xl font-medium leading-tight font-montserrat">
                Punjab
              </h3>
              <p className="text-climitra-text italic text-sm sm:text-base leading-relaxed mt-1">
                Rice stubble
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-md border border-climitra-green px-4 py-2 text-sm font-medium text-climitra-green">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-[17.75rem] h-[19.1875rem] flex flex-col justify-between rounded-xl bg-climitra-bg-green overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="aspect-[1.775] relative overflow-hidden">
              <img
                src="images/image-101.png"
                alt="Gujarat Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-[1.5rem] px-4 pb-5">
              <h3 className="text-climitra-green text-base sm:text-lg md:text-xl font-medium leading-tight font-montserrat">
                Gujarat
              </h3>
              <p className="text-climitra-text italic text-sm sm:text-base leading-relaxed mt-1">
                Prosopis juliflora
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center justify-center rounded-md border border-climitra-green px-4 py-2 text-sm font-medium text-climitra-green">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* START YOUR JOURNEY SECTION */}
      <div className="bg-[rgba(250,250,250,1)] px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[#0c0c0c] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-none font-montserrat">
            Start your{" "}
            <span className="text-climitra-green">journey today</span> with us
          </h2>
          <div className="w-20 sm:w-24 md:w-32 h-1 bg-climitra-green mx-auto mt-3 sm:mt-4 md:mt-6"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[5.0rem] gap-y-[5.0rem] mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-8 lg:px-[10.9375rem] place-items-center">
            {[
              {
                img: "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/b377c6313c9e46f2b7081d0c0609c2a6ea51713b?placeholderIfAbsent=true",
                title: "Credit Buyers",
                desc: "Explore verified carbon credits",
                cta: "Explore",
                link: "cdr",
                arrow:
                  "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/422e4d2b95e4dc3d8c6b01042244c338355f67ac?placeholderIfAbsent=true",
              },
              {
                img: "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/358ea4d139e39d6dba3446844d09388bd21cbc9a?placeholderIfAbsent=true",
                title: "Industrial Partners",
                desc: "Discover fossil fuel replacement solutions",
                cta: "Discover",
                link: "industrial",
                arrow:
                  "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/60be63b5e06df429cad54f4c29ed758644c99cc5?placeholderIfAbsent=true",
              },
              {
                img: "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/b0a09aeaf89bbfa497b83c19260926f8a4ff2d90?placeholderIfAbsent=true",
                title: "Researchers & NGOs",
                desc: "Access our technology platform",
                cta: "Our Technology",
                link: "tech",
                arrow:
                  "https://cdn.builder.io/api/v1/image/assets/fa40ec4c4f874f5487270f37d6db6a59/dc4ff0ac9a84b69ec6e0859e2dffadb2e4e94b87?placeholderIfAbsent=true",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="w-[16.0rem] h-[17.6875rem] rounded-xl bg-climitra-bg-green flex flex-col justify-between overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="pt-6 px-4 pb-4">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-20 h-20 object-contain mx-auto"
                  />
                  <div className="mt-5 h-px border border-dashed border-climitra-green" />
                  <div className="mt-5 text-left">
                    <h3 className="text-[rgba(28,98,72,1)] text-[1.0625rem] font-medium leading-[1.3] font-montserrat">
                      {card.title}
                    </h3>
                    <p className="text-climitra-text text-[0.8625rem] font-light leading-[1.4] mt-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
                <div onClick={() => handleNavigation(card?.link)} className="hover:cursor-pointer  flex items-center justify-between px-4 h-[3.5rem] bg-climitra-green text-white font-semibold text-[0.9375rem] rounded-b-xl">
                  <span>{card.cta}</span>
                  <img
                    src={card.arrow}
                    alt="Arrow"
                    className="w-[1.125rem] h-[1.125rem] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ClimitraEngine;
