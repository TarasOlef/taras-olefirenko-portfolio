import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Capabilities } from "@/components/Capabilities";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ValueStrip } from "@/components/ValueStrip";

export default function Home() {
  return (
    <div className="relative flex-1">
      <AnimatedBackground />
      <main>
        <Hero />
        <ValueStrip />
        <About />
        <FeaturedProjects />
        <Capabilities />
        <ProcessTimeline />
        <ContactSection />
      </main>
      <footer className="px-5 pb-10 text-center text-xs text-slate-500 sm:px-8 lg:px-10">
        Productos reales. Software útil. IA cuando aporta valor.
      </footer>
    </div>
  );
}
