function RegulatoryTimeline() {
  const timelineData = [
    {
      year: "2026",
      title: " CBAM (EU) Penalties Begin",
      points: ["Carbon levy of $85-100 per tonne CO₂", "EU import taxes starting 1 January, 2026"],
    },
    {
      year: "2027",
      title: "CCTS(India) Full Implementation",
      points: [
        "Mandatory for 9 heavy industries including steel",
        "Compliance cost $15-25/tonne",
        "Unified registry for voluntary + compliance markets",
      ],
    },
    {
      year:"2028",
      title: "Green Steel Procurement Policy (India)",
      points: ["Govt to mandate tiered use of green-rated steel in public projects", "Targets: 20% (3-star), 5% (4-star), 1% (5-star) for projects > ₹1 crore"],
    },
    {
      year: "2030",
      title: "NDC Emissions Targets(India)",
      points: [
        "45% carbon intensity reduction compared to 2005 levels",
        "Steel: ~50% emissions reduction via cleaner fuels, energy efficiency",
      ],
    },
    {
      year: "2070",
      title: "Net Zero India",
      points: ["Economy-wide carbon neutrality", "Hard-to-abate industries to drive ~40% of total cuts"],
    },
  ]

  return (
    <div className="bg-white w-full h-auto py-12 md:py-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        .timeline-line-desktop {
          border-image: repeating-linear-gradient(to right, #1c6248 0 19px, transparent 19px 38px) 1;
        }
      `}</style>

      <div className="max-w-[80rem] w-full mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-[2.5rem]">
          <div className="relative">
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-[2.25rem] font-semibold leading-tight md:leading-[2.75rem] mb-3 md:mb-[1.125rem]">
              <span className="text-[#0C0C0C]">The </span>
              <span className="text-[#1C6248]">Critical</span>
              <span className="text-[#0C0C0C]"> Regulatory Timeline</span>
            </h2>
            <div className="w-24 md:w-[8.375rem] h-1 md:h-[0.25rem] bg-[#1C6248] mx-auto"></div>
          </div>
        </div>

        {/* Desktop Timeline Container */}
        <div className="hidden lg:block relative w-[66.5625rem] h-[33.375rem] mx-auto mt-[5rem]">
          {/* Main Timeline Line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[1065px] h-0 z-0">
            <div className="w-full border-t-[4px] border-dashed border-[#1C6248] timeline-line-desktop relative">
              <div className="absolute right-[-1.25rem] top-[-0.825rem] w-0 h-0 border-l-[1.25rem] border-l-[#1C6248] border-t-[0.75rem] border-t-transparent border-b-[0.75rem] border-b-transparent"></div>
            </div>
          </div>

          {/* 2026 */}
          <div className="absolute left-[0.5rem] top-[1rem] w-[14.25rem] h-[21.875rem]">
            {/* Arrow Up */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(14.1875rem-1.5625rem-3.5625rem)] w-[0.75rem] h-[3.5625rem] flex flex-col items-center">
              <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-r-[0.375rem] border-r-transparent border-b-[0.625rem] border-b-[#1C6248]"></div>
              <div className="w-[0.125rem] h-[2.9375rem] bg-[#1C6248]"></div>
            </div>
            {/* Year Badge */}
            <div className="absolute top-[14.1875rem] left-1/2 transform -translate-x-1/2 w-[11.4375rem] h-[3.375rem] bg-[#1C6248] rounded-[1.4375rem] flex items-center justify-center">
              <span className="text-white font-montserrat text-[1.625rem] font-semibold">2026</span>
            </div>
            {/* Title */}
            <div className="absolute left-0 top-[19.25rem] w-[13.625rem] h-[3.75rem] text-center">
              <span className="text-[#1C6248] font-montserrat text-[1.375rem] font-semibold leading-[1.875rem]">
                CBAM (EU) Penalties Begin
              </span>
            </div>
            {/* Top Content */}
            <div className="absolute left-0 top-0 w-[14.25rem] h-[7.125rem]">
              <div className="flex items-start gap-[0.625rem] mb-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.625rem]">
                  EU import taxes starting 1 January, 2026
                </p>
              </div>
              <div className="flex items-start gap-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.625rem]">
                  Carbon levy of $85-100 per tonne CO₂
                </p>
              </div>
            </div>
          </div>

          {/* 2027 */}
          <div className="absolute left-[15.375rem] top-[9.4375rem] w-[17.5625rem] h-[23.9375rem]">
            {/* Arrow Down */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(5.9rem+3.375rem+1.5625rem)] w-[0.75rem] h-[3.5625rem] flex flex-col items-center">
              <div className="w-[0.125rem] h-[2.9375rem] bg-[#1C6248]"></div>
              <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-r-[0.375rem] border-r-transparent border-t-[0.625rem] border-t-[#1C6248]"></div>
            </div>
            {/* Year Badge */}
            <div className="absolute top-[5.9rem] left-1/2 transform -translate-x-1/2 w-[11.4375rem] h-[3.375rem] bg-[#1C6248] rounded-[1.4375rem] flex items-center justify-center">
              <span className="text-white font-montserrat text-[1.625rem] font-semibold">2027</span>
            </div>
            {/* Title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[0.625rem] w-[13.625rem] text-center">
              <span className="text-[#1C6248] font-montserrat text-[1.375rem] font-semibold leading-[1.875rem]">
                CCTS (India) Implementation
              </span>
            </div>
            {/* Bottom Content */}
            <div className="absolute left-0 top-[15.9125rem] w-[17.5625rem] h-[9.25rem]">
              <div className="flex items-start gap-[0.625rem] mb-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.625rem]">
                Carbon market compliance becomes mandatory for 9 heavy industries, including steel
                </p>
              </div>
              <div className="flex items-start gap-[0.625rem] mb-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.625rem]">
                Estimated compliance cost: $15–25/tonne CO₂
                </p>
              </div>
            </div>
          </div>

          {/* 2030 */}
          <div className="absolute left-[31.625rem] top-0 w-[18.5625rem] h-[22.375rem]">
            {/* Arrow Up */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(15.1875rem-1.5625rem-3.5625rem)] w-[0.75rem] h-[3.5625rem] flex flex-col items-center">
              <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-r-[0.375rem] border-r-transparent border-b-[0.625rem] border-b-[#1C6248]"></div>
              <div className="w-[0.125rem] h-[2.9375rem] bg-[#1C6248]"></div>
            </div>
            {/* Year Badge */}
            <div className="absolute top-[15.1875rem] left-1/2 transform -translate-x-1/2 w-[11.4375rem] h-[3.375rem] bg-[#1C6248] rounded-[1.4375rem] flex items-center justify-center">
              <span className="text-white font-montserrat text-[1.625rem] font-semibold">2030</span>
            </div>
            {/* Title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[19.6875rem] w-[13.625rem] text-center">
              <span className="text-[#1C6248] font-montserrat text-[1.375rem] font-semibold leading-[1.875rem]">
                NDC Emissions Targets (India)
              </span>
            </div>
            {/* Top Content */}
            <div className="absolute left-0 top-0 w-[18.5625rem] h-[8.125rem]">
              <div className="flex items-start gap-[0.625rem] mb-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.875rem]">
                  45% carbon intensity reduction compared to 2005 levels
                </p>
              </div>
              <div className="flex items-start gap-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.875rem]">
                  Steel: ~50% emissions reduction via cleaner fuels, energy efficiency
                </p>
              </div>
            </div>
          </div>

          {/* 2070 */}
          <div className="absolute left-[48.6875rem] top-[11.3125rem] w-[18rem] h-[18.5625rem]">
            {/* Arrow Down */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[calc(4rem+3.375rem+1.5625rem)] w-[0.75rem] h-[3.5625rem] flex flex-col items-center">
              <div className="w-[0.125rem] h-[2.9375rem] bg-[#1C6248]"></div>
              <div className="w-0 h-0 border-l-[0.375rem] border-l-transparent border-r-[0.375rem] border-r-transparent border-t-[0.625rem] border-t-[#1C6248]"></div>
            </div>
            {/* Year Badge */}
            <div className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 w-[11.4375rem] h-[3.375rem] bg-[#1C6248] rounded-[1.4375rem] flex items-center justify-center">
              <span className="text-white font-montserrat text-[1.625rem] font-semibold">2070</span>
            </div>
            {/* Title */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-[0.625rem] w-[13.625rem] text-center">
              <span className="text-[#1C6248] font-montserrat text-[1.375rem] font-semibold leading-[1.875rem]">
                Net Zero India
              </span>
            </div>
            {/* Bottom Content */}
            <div className="absolute left-0 top-[14.0rem] w-[18rem] h-[5.75rem]">
              <div className="flex items-start gap-[0.625rem] mb-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.625rem]">
                  Economy-wide carbon neutrality
                </p>
              </div>
              <div className="flex items-start gap-[0.625rem]">
                <div className="w-[0.3125rem] h-[0.3125rem] bg-[#1C6248] rounded-full mt-[0.6875rem] flex-shrink-0"></div>
                <p className="text-[#6C6C6C] font-montserrat text-[1rem] leading-[1.625rem]">
                  Hard-to-abate industries to drive ~40% of total cuts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline Container */}
        <div className="block lg:hidden px-4 py-8">
          <div className="relative flex flex-col items-center">
            {/* Main Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#1C6248] h-full"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="relative w-full max-w-md mx-auto my-6">
                {/* Year Badge - positioned on the main vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 z-10 bg-[#1C6248] rounded-full px-4 py-2 text-white font-semibold text-lg shadow-md">
                  {item.year}
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mt-8 border border-gray-200 text-center">
                  <h3 className="text-[#1C6248] font-semibold text-xl mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-left">
                    {" "}
                    {/* Align points to left within card */}
                    {item.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1C6248] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#6C6C6C] text-base leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegulatoryTimeline
