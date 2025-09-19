import { ReserveButton } from "../../ui/buttons/ReserveButton";

type Props = {
  doctorName?: string;
  doctorSurname?: string;
  pictureSrc?: string;
};

export function HeroDoctor({
  doctorName = "Daniel ",
  doctorSurname = "Diaz",
  pictureSrc = "/assets/doctor.png",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-secondary pb-12 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          {/* Texto */}
          <div>
            <div className="h-1 w-16 bg-emerald-600 rounded-full mb-6" />
            <p className="text-emerald-700 font-semibold tracking-wide uppercase text-sm">
              Bienvenidos! 👋
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              DOCTOR{" "}
              <span className="text-chart-2">{doctorName.toUpperCase()}</span>
              <span className="text-primary">{doctorSurname.toUpperCase()}</span>
            </h1>

            <p className="mt-5 text-slate-700 text-base md:text-lg max-w-prose">
              Doctor <span className="font-medium">{doctorName}</span> – Experto en{" "}
              <span className="font-semibold">Pediatría Infantil</span> y{" "}
              <span className="font-semibold">Medicina Familiar</span>, está listo para
              recibirte en su consulta para cuidar de tu{" "}
              <span className="font-semibold">Salud</span> y la de tus seres queridos.
            </p>

            <p className="mt-5 text-slate-700">Para reservar una cita presiona el botón!</p>

            <div className="mt-6">
              <ReserveButton />
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-72 sm:w-80 md:w-[28rem]">
              <img
                src={pictureSrc}
                alt={`Foto del Dr. ${doctorName}`}
                className="w-full h-auto object-contain drop-shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 h-6 bg-white z-0" />  ← eliminado */}
    </section>
  );
}
