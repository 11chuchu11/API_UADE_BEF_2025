import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { HeroDoctor } from "../../components/shared/banners/HeroDoctor"
import { StatsBar } from "../../components/data-display/stats/StatsBar"
export default function Prueba() {
  return (
    <>
      <Header />
      <HeroDoctor />
      <section className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 -mt-14 lg:-mt-20 mb-12">
        <StatsBar />
      </section>
      <div className="min-h-screen bg-[#FFFAF1]">
        <div className="pt-32 px-20">
          <h1 className="text-6xl font-bold text-[#00856F] mb-8">Prueba</h1>
          <p className="text-lg text-[#384633] mb-8">
            Esta es una página de prueba para ver el comportamiento del header al hacer scroll.
          </p>

          <div className="space-y-8">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="bg-[#DCE9E2] p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-[#00856F] mb-4">
                  Sección {i + 1}
                </h2>
                <p className="text-[#384633]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
