"use client"

import { motion } from "motion/react"

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

const fadeUp = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 12 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
}

const viewport = { once: true, margin: "-80px" }

export default function Education() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          className="mb-16 flex items-center gap-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        >
          <span className="font-mono text-[11px] text-zinc-700">05</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Education
          </span>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 gap-3 md:grid-cols-[160px_1fr] md:gap-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.7, ease: [0.25, 0, 0, 1], delay: i * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
