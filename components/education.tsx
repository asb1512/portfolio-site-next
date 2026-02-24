const education = [
  {
    period: "2014–2018",
    school: "University of Florida",
    degrees: [
      "BA, Linguistics",
      "BA, French & Francophone Studies",
    ],
  },
  {
    period: "Feb 2020–Aug 2021",
    school: "Flatiron School",
    degrees: ["Full-Stack Web Development"],
  },
]

export default function Education() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 flex items-center gap-5">
          <span className="font-mono text-[11px] text-zinc-700">05</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Education
          </span>
        </div>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <div
              key={i}
              className="grid grid-cols-1 gap-3 md:grid-cols-[160px_1fr] md:gap-12"
            >
              <p className="pt-[2px] font-mono text-[11px] leading-6 text-zinc-500">
                {edu.period}
              </p>
              <div>
                <h3 className="mb-2 text-[14px] font-semibold text-white">
                  {edu.school}
                </h3>
                {edu.degrees.map((deg, j) => (
                  <p key={j} className="text-[13px] leading-6 text-zinc-600">
                    {deg}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
