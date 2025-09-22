import { HeroDoctor } from "../components/Home/Hero";
import { StatsBar } from "../components/Home/Hero/StatsBar";
import { Services } from "../components/Home/Services";
import { AboutMe } from "../components/Home/AboutMe";
import { ContactDoctor } from "../components/Home/Contact";

export default function Home() {
  return (
    <>
      <HeroDoctor />
      <section className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 -mt-14 lg:-mt-20 mb-12">
        <StatsBar />
      </section>
      <Services />
      <AboutMe />
      <ContactDoctor />
    </>
  );
}
