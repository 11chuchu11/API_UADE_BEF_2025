import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { HeroDoctor } from "../../components/Home/Hero"
import { StatsBar } from "../../components/Home/Hero/StatsBar"
import { AboutMe } from "../../components/Home/AboutMe"
import { ContactDoctor } from "../../components/Home/Contact"
import { Services } from "../../components/Home/Services"
export default function Prueba() {
  return (
    <>
      <Header />
      <HeroDoctor />
      <section className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 -mt-14 lg:-mt-20 mb-12">
        <StatsBar />
      </section>
      <Services/>
      <AboutMe/>
      <ContactDoctor/>
      <Footer />
    </>
  )
}