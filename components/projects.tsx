'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowUpRight } from 'lucide-react';

type WebProject = {
  name: string;
  url: string;
};

const webProjects: WebProject[] = [
  { name: 'Sublime Digital', url: 'https://www.sublimedigital.io' },
  { name: 'Launchpad Strategies', url: 'https://www.launchpad-strategies.com' },
  { name: 'Versa Law', url: 'https://www.versalawfirm.com' },
  {
    name: 'American Made Media Company',
    url: 'https://www.americanmadeco.com',
  },
  // { name: 'Frontline Strategies', url: '' },
  { name: 'Approvable', url: 'https://approvable.vercel.app' },
  { name: 'Hahn Strategies', url: 'https://hahn-strategies.vercel.app' },
  { name: 'Mike Haridopolos', url: 'https://www.mike4congress.com' },
  { name: '3D Media', url: 'https://andrew-bourgeois.vercel.app' },
  {
    name: 'Hageman for Wyoming',
    url: 'https://www.hagemanforwyoming.com/home',
  },
];

type BrandingProject = {
  name: string;
  image: string;
};

const brandingProjects: BrandingProject[] = [
  { name: 'Sublime Digital', image: '/images/branding/sublime-digital.jpg' },
  { name: 'DB Creative', image: '/images/branding/db-branding.jpg' },
  {
    name: 'Launchpad Strategies',
    image: '/images/branding/launchpad-strategies.jpg',
  },
  { name: 'Versa Law', image: '/images/branding/versa-law-logo.jpg' },
  { name: 'Desert Rogues', image: '/images/branding/desert-rogues.jpg' },
  { name: 'Mike Haridopolos', image: '/images/branding/haridopolos-logo.jpg' },
  { name: 'Reach', image: '/images/branding/rii-logo.jpg' },
  { name: 'TCS', image: '/images/branding/tcs-logo.jpg' },
  {
    name: 'Girard for Congress',
    image: '/images/branding/girard-for-congress-logo.jpg',
  },
  { name: 'RATLR', image: '/images/branding/ratlr-logo.jpg' },
  {
    name: 'Tom Sell for Congress',
    image: '/images/branding/tom-sell-logo.jpg',
  },
  {
    name: 'Michael Henry for AG',
    image: '/images/branding/henry-ag-logo.jpg',
  },
  { name: 'Trainor for TX', image: '/images/branding/trainor-logo.png' },
  {
    name: '17th Street Media',
    image: '/images/branding/17th-street-media.jpg',
  },
];

function ProjectGrid({ projects }: { projects: WebProject[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-white/8 md:grid-cols-3">
      {projects.map((project) => {
        const inner = (
          <>
            <p className="text-[13px] text-zinc-500 transition-colors group-hover:text-zinc-200">
              {project.name}
            </p>
            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="shrink-0 text-zinc-700 transition-colors group-hover:text-zinc-400"
            />
          </>
        );

        const shared =
          'group flex items-center justify-between bg-black px-6 py-7 transition-colors hover:bg-white/4';

        return project.url ? (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={shared}
          >
            {inner}
          </a>
        ) : (
          <div key={project.name} className={shared}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<BrandingProject | null>(null);

  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 flex items-center gap-5">
          <span className="font-mono text-[11px] text-zinc-700">01</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
            Projects
          </span>
        </div>

        <Tabs defaultValue="web">
          <TabsList className="mb-10 h-auto w-full justify-start gap-0 rounded-none border-b border-white/10 bg-transparent p-0">
            <TabsTrigger
              value="web"
              className="rounded-none border-b-[1.5px] border-transparent bg-transparent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600 shadow-none transition-colors hover:text-zinc-300 data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              Web
            </TabsTrigger>
            <TabsTrigger
              value="branding"
              className="rounded-none border-b-[1.5px] border-transparent bg-transparent px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-600 shadow-none transition-colors hover:text-zinc-300 data-[state=active]:border-white data-[state=active]:text-white data-[state=active]:shadow-none"
            >
              Branding
            </TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <ProjectGrid projects={webProjects} />
          </TabsContent>
          <TabsContent value="branding">
            <div className="grid grid-cols-2 gap-px bg-white/8 md:grid-cols-3">
              {brandingProjects.map((project) => (
                <button
                  key={project.name}
                  onClick={() => setSelected(project)}
                  className="group flex items-center justify-between bg-black px-6 py-7 text-left transition-colors hover:bg-white/4"
                >
                  <p className="text-[13px] text-zinc-500 transition-colors group-hover:text-zinc-200">
                    {project.name}
                  </p>
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="border-white/10 bg-black p-0 sm:max-w-2xl">
          <DialogHeader className="border-b border-white/10 px-6 py-4">
            <DialogTitle className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-400 font-normal">
              {selected?.name}
            </DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="relative aspect-video w-full">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
