import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6">
        <div className="flex flex-row justify-center items-center gap-4">
          <Image
            src="/images/ab_logo.svg"
            alt="Andrew Bourgeois"
            width={32}
            height={32}
          />
          <span className="font-mono text-xs tracking-[0.35em] text-white uppercase select-none">
            AB
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/asb1512"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 transition-colors hover:text-white"
          >
            <Github size={14} strokeWidth={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-s-bourgeois/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 transition-colors hover:text-white"
          >
            <Linkedin size={14} strokeWidth={1.5} />
          </a>
          <a
            href="mailto:a.s.bourgeois@icloud.com"
            aria-label="Email"
            className="text-zinc-600 transition-colors hover:text-white"
          >
            <Mail size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </nav>
  );
}
