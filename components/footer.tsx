'use client';

import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
};

const viewport = { once: true, margin: '-80px' };

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div
          className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        >
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
        </motion.div>

        <motion.div
          className="mt-16 border-t border-white/8 pt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1], delay: 0.1 }}
        >
          <p className="font-mono text-[11px] text-zinc-800">
            © {new Date().getFullYear()} Andrew Bourgeois
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
