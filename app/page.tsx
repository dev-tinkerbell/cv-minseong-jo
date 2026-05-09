import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ResearchIdentity from "@/components/sections/ResearchIdentity";
import ResearchPipeline from "@/components/sections/ResearchPipeline";
import Publications from "@/components/sections/Publications";
import ExperimentalPlatforms from "@/components/sections/ExperimentalPlatforms";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchIdentity />
        <ResearchPipeline />
        <Publications />
        <ExperimentalPlatforms />
        <Timeline />
        <Skills />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
