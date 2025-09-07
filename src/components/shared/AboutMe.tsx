
type AboutDoctorProps = {
    name?: string;
    surname?: string;
    photoSrc?: string | null;
    className?: string;
}

export function AboutMe({
    name = "Daniel",
    surname = "Diaz",
    photoSrc = null,
    className,
}: AboutDoctorProps) {
    return (
        <section className={["bg-secondary", className].filter(Boolean).join(" ")}>
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
                <div className="flex justify-center">
                    {photoSrc ? (
                        <img
                            src={photoSrc}
                            alt={`Foto del Dr. ${name} ${surname}`}
                            className="h-auto w-72 sm:w-80 md:w-[28rem] object-contain drop-shadow-xl"
                            loading="lazy"
                        />
                    ) : (
                        <div
                            aria-label="Imagen Doctor"
                            className="w-72 sm:w-80 md:w-[28rem] aspect-[4/3] rounded-2xl
                         bg-emerald-100/30 ring-1 ring-emerald-200/60
                         flex items-center justify-center text-emerald-700/70 text-sm"
                        >
                            Imagen 
                        </div>
                    )}
                </div>

                <div>
                    <p className="text-primary text-sm font-bold uppercase tracking-widest">
                        Sobre mí
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-gray-950">
                        Conozca a <span className="text-primary">{name} {surname}</span> y
                        <br className="hidden sm:block" /> su misión como Doctor
                    </h2>

                    <div className="mt-6 space-y-6 text-gray-800 md:text-base leading-relaxed">
                        <p>
                            El Dr. {name} {surname} es médico formado en la Universidad de Buenos Aires UBA,
                            especialista en Pediatría y Medicina Familiar, dedicado a brindar
                            atención integral, cercana y humana a cada paciente.
                        </p>
                        <p>
                            Su propósito es acompañar a las personas en todas las etapas de la vida,
                            ofreciendo prevención, diagnóstico y tratamientos adaptados a cada
                            necesidad.
                        </p>
                        <p>
                            Con años de experiencia en medicina comunitaria, busca mejorar la calidad
                            de vida de las familias mediante un cuidado personalizado y accesible.
                            La escucha activa, el respeto y la empatía son pilares de su atención.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}