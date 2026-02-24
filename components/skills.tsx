import { Badge } from "@/components/ui/badge"

const skills = ["Next.js", "Payload CMS", "TypeScript", "Figma"]

export default function Skills() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 flex items-center gap-5">
          <span className="font-mono text-[11px] text-zinc-700">04</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Skills
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="rounded-none border-white/15 px-5 py-2 font-mono text-[12px] font-normal tracking-[0.1em] text-zinc-400"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
