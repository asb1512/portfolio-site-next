const experiences = [
  {
    title: "Creative Director & Lead Developer",
    date: "Jan 2023–Present",
    location: null,
    description:
      "Managed a team charged with the creation of client assets, including websites, branding, social media content and ads. Helped modernize client site design practices through the use of modern open-source frameworks, such as Next.js and Payload CMS.",
    bullets: [
      "Web design using Figma and Adobe Creative products",
      "Web development primarily using Next.js and Payload CMS",
    ],
  },
  {
    title: "Full-Stack Developer",
    date: "Sep 2021–Dec 2022",
    location: null,
    description: "In charge of creating internal tools and websites.",
    bullets: [
      "Created a web app allowing employees to generate custom client pitches using React.js, Redux/RTK Toolkit, Prisma.js, and PostgreSQL",
      "Web development primarily using Next.js and Payload CMS",
    ],
  },
  {
    title: "Digital Strategist / Designer",
    date: "Oct 2019–Sep 2021",
    location: null,
    description:
      "Charged with the creation of brand assets, logos, and ad campaigns.",
    bullets: [
      "Used Adobe Photoshop to create MMS graphics for marketing campaigns reaching millions of users",
    ],
  },
  {
    title: "English Language Instructor",
    date: "Oct 2018–Jun 2019",
    location: "Saint-Étienne, France",
    description:
      "English language instructor within the French educational system.",
    bullets: [
      "Applied phonetic knowledge for dialect correction",
      "Real-time translation",
    ],
  },
]

export default function Experience() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 flex items-center gap-5">
          <span className="font-mono text-[11px] text-zinc-700">02</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Experience
          </span>
        </div>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-4 md:grid-cols-[160px_1fr] md:gap-12"
            >
              <div className="pt-[2px]">
                <p className="font-mono text-[11px] leading-6 text-zinc-500">
                  {exp.date}
                </p>
                {exp.location && (
                  <p className="font-mono text-[11px] leading-5 text-zinc-700 mt-1">
                    {exp.location}
                  </p>
                )}
              </div>

              <div>
                <h3 className="mb-3 text-[15px] font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="mb-4 text-[14px] leading-[1.7] text-zinc-500">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[13px] text-zinc-600"
                    >
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 bg-zinc-700" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
