import { Contact } from "@/components/home/contact";
import { Hero } from "@/components/home/hero";
import { Projects } from "@/components/home/projects";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Projects index={1} total={2} />
        <Contact index={2} total={2} />
      </main>
      <SiteFooter />
    </>
  );
}
