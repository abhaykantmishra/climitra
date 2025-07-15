import React from 'react';

const TimelineSection = () => {
  return (
    <div className="w-[80.0rem] h-[115.625rem] relative bg-white overflow-hidden mx-auto my-12">
      {/* ABSOLUTE POSITIONED TIMELINE BLOCK */}
        <div className="w-96 h-0 left-[16.75rem] top-[89.125rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-zinc-100"></div>
        <div className="w-80 h-0 left-[40.0rem] top-[47.1875rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-lime-500"></div>
        <div className="w-80 h-0 left-[40.0rem] top-[68.875rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-lime-500"></div>
        <div className="w-96 h-0 left-[40.0rem] top-[23.5rem] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-0.0625rem] outline-teal-800"></div>
        <div className="w-80 h-0 left-[43.4375rem] top-[68.875rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-zinc-100"></div>
        <img className="w-24 h-24 left-[74.5rem] top-[20.5rem] absolute" src="images/satellite.png" alt="" />
        <div className="px-4 py-[0.3125rem] left-[45.125rem] top-[28.0rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Biomass Mapping and Mobilisation</div>
        </div>
        <div className="w-96 left-[46.5625rem] top-[32.3125rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="w-96 text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We digitize biomass supply chains using AI-led satellite mapping and local intel,
            mobilizing 1,000+ tons/day to meet industrial specs—solving visibility, quality,
            and logistics at scale for steel decarbonization.
          </div>
        </div>

        <button className="w-40 h-10 px-5 py-3 left-[66.5625rem] top-[41.0625rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">Know More</span>
        </button>
        <button className="w-40 h-10 px-5 py-3 left-[5.5rem] top-[64.9375rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">Know More</span>
        </button>
        <div className="px-4 py-[0.3125rem] left-[5.5rem] top-[51.875rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Bespoke Conversion Technology</div>
        </div>
        <div className="w-96 left-[5.5rem] top-[56.1875rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We build advanced pyrolysis systems tailored to local biomass, delivering consistent quality across 25+ industrial parameters including calorific value, volatile matter, ash, moisture, and fixed carbon.
          </div>
        </div>
        <img className="w-24 h-24 left-[5.5rem] top-[44.375rem] absolute" src="images/fire.png" alt="" />
        <div className="px-4 py-[0.3125rem] left-[51.75rem] top-[73.5625rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Industrial Decarbonization</div>
        </div>
        <div className="w-96 left-[48.625rem] top-[77.875rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch text-right justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We integrate into steel plants with dynamic biochar blending, real-time emissions tracking, and ESG dashboards—fully aligned with CBAM, CCTS, and green steel compliance pathways.
          </div>
        </div>
        <button className="w-40 h-10 px-5 py-3 left-[66.5625rem] top-[85.25rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat'] whitespace-nowrap">Know More</span>
        </button>
        <img className="w-24 h-24 left-[68.875rem] top-[66.0625rem] absolute" src="images/smoke.png" alt="" />
        <img
          className="w-8 h-8 left-[15.0625rem] top-[46.375rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="px-4 py-[0.3125rem] left-[5.875rem] top-[93.8125rem] absolute bg-emerald-50 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-teal-800 text-2xl font-semibold font-['Montserrat'] leading-7">Carbon Market Integration</div>
        </div>
        <div className="w-96 left-[5.875rem] top-[98.125rem] absolute inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch justify-center text-neutral-500 text-lg font-normal font-['Source_Sans_Pro'] leading-snug tracking-wide">
            We generate high-integrity carbon removal credits through a digital MRV framework, enabling 100+ year carbon sequestration and access to both voluntary and compliance markets.
          </div>
        </div>
        <button className="w-32 h-10 px-5 py-3 left-[5.875rem] top-[106.875rem] absolute bg-teal-800 rounded-lg outline outline-[0.075rem] outline-offset-[-0.075rem] outline-teal-800 inline-flex justify-center items-center gap-2.5 overflow-hidden">
          <span className="text-center text-white text-base font-medium font-['Montserrat']">Know More</span>
        </button>
        <img className="w-24 h-24 left-[5.875rem] top-[86.3125rem] absolute" src="images/tree.png" alt="" />
        <div className="w-28 h-28 left-[36.625rem] top-[19.875rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-80 h-0 left-[43.4375rem] top-[23.3125rem] absolute border-t-2 border-dotted" style={{ borderColor: '#1C6248' }}></div>
        <img
          className="w-8 h-8 left-[62.955rem] top-[22.3125rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div data-property-1="Component 35" className="w-80 h-6 left-[43.8125rem] top-[22.5rem] absolute"></div>
        <div className="w-24 h-8 left-[51.1875rem] top-[22.25rem] absolute bg-teal-800 rounded-xl outline outline-2 outline-offset-[-0.125rem] outline-teal-800 overflow-hidden">
          <div className="left-[1.125rem] top-[0.5625rem] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">Biomass</div>
        </div>
        <div className="w-96 h-0 left-[17.0625rem] top-[47.375rem] absolute outline outline-2 outline-offset-[-0.0625rem] outline-teal-800"></div>
        <img
          className="w-8 h-8 left-[15.375rem] top-[88.125rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="w-28 h-28 left-[36.625rem] top-[43.8125rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-28 h-28 left-[36.625rem] top-[65.4375rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-24 h-8 left-[50.6875rem] top-[67.8125rem] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[1.3125rem] top-[0.5625rem] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">Biochar</div>
        </div>
        <div className="w-28 h-28 left-[36.625rem] top-[85.6875rem] absolute bg-white rounded-[5.3125rem] outline outline-2 outline-offset-[-0.125rem] outline-zinc-100 overflow-hidden flex items-center justify-center">
          <img
            src="/images/timeline-item.svg"
            alt="Timeline Item"
            className="w-24 h-24 object-contain"
          />
        </div>
        <div className="w-24 h-8 left-[25.4375rem] top-[88.125rem] absolute bg-lime-500 rounded-xl overflow-hidden">
          <div className="left-[1.3125rem] top-[0.5625rem] absolute text-center justify-start text-white text-xs font-semibold font-['Montserrat'] leading-none">Biochar</div>
        </div>
        <img
          className="w-8 h-8 left-[62.955rem] top-[67.875rem] absolute"
          src="/images/ellipse-124.svg"
          alt="Ellipse"
        />
        <div className="w-[37.5625rem] left-[21.1875rem] top-[5.0rem] absolute text-center justify-start">
          <span className="text-neutral-950 text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">Behind the </span>
          <span className="text-teal-800 text-4xl font-semibold font-['Montserrat'] leading-[3.125rem]">Climitra Engine</span>
        </div>
        <div className="w-32 h-0 left-[35.8125rem] top-[9.25rem] absolute outline outline-4 outline-offset-[-0.125rem] outline-teal-800"></div>
        <div className="w-[63.5rem] left-[8.25rem] top-[11.125rem] absolute text-center justify-center">
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose">Building a </span>
          <span className="text-teal-800 text-xl font-semibold font-['Montserrat'] leading-loose">vertically integrated ecosystem</span>
          <span className="text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose"> for waste biomass-driven industrial decarbonization and carbon dioxide removal (CDR) in India</span>
        </div>
    </div>
  );
};

export default TimelineSection;
