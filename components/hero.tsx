import { Separator } from "@/components/ui/separator"

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <h1 className="mb-10 font-sans text-[clamp(3.5rem,11vw,9.5rem)] font-black uppercase leading-[0.88] tracking-tight text-white">
        Andrew
        <br />
        Bourgeois
      </h1>

      <Separator className="mb-10 bg-white/15" />

      <div className="flex flex-col gap-6 md:flex-row md:gap-16">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600 md:mt-[3px]">
          Frontend Developer
        </p>
        <p className="max-w-xl text-[15px] leading-[1.75] text-zinc-400">
          Frontend developer focused on design, specializing in Next.js and
          Payload CMS. With strong skills in Figma and Photoshop, I create
          visually compelling and functional web experiences that bridge the
          gap between design and development.
        </p>
      </div>
    </section>
  )
}
