import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600">
              Get in Touch
            </p>
            <a
              href="mailto:a.s.bourgeois@icloud.com"
              className="text-[22px] font-light text-white transition-colors hover:text-zinc-400"
            >
              a.s.bourgeois@icloud.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/asb1512"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-white"
            >
              <Github size={13} strokeWidth={1.5} />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-s-bourgeois/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-white"
            >
              <Linkedin size={13} strokeWidth={1.5} />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
                LinkedIn
              </span>
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/8 pt-8">
          <p className="font-mono text-[11px] text-zinc-800">
            © {new Date().getFullYear()} Andrew Bourgeois
          </p>
        </div>
      </div>
    </footer>
  )
}
