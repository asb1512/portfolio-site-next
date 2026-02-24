'use client';

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';

const skills = [
  'Next.js',
  'Payload CMS',
  'TypeScript',
  'Figma',
  'Adobe Photoshop',
  'React.js',
  'Cloudflare',
  'Vercel',
  'French',
  'German',
  'Spanish',
];

const fadeUp = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
};

const viewport = { once: true, margin: '-80px' };

export default function Skills() {
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
          <span className="font-mono text-[11px] text-zinc-700">04</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Skills
          </span>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1], delay: 0.1 }}
        >
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="rounded-none border-white/15 px-5 py-2 font-mono text-[12px] font-normal tracking-[0.1em] text-zinc-400"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
