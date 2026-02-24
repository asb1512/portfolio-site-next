import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}
