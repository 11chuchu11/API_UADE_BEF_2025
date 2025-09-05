import { ServiceCard } from "../cards/SharedCard";

export function Services() {
    const items = [
        { title: "Atención médica", description: "Ofrezco cuidados preventivos..." },
        { title: "Atención cercana", description: "Reserve fácilmente su turno..." },
        { title: "Cuidamos tu Familia", description: "Experiencia en diagnóstico..." },
        { title: "Prevención", description: "Evaluaciones médicas completas..." },
        { title: "Profesionalismo", description: "Un espacio pensado para brindar..." },
        { title: "Bienestar físico y mental", description: "Orientación integral..." },
    ];

    return (
        <section className="bg-background/60">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py">
                <p className="text-center max-w-7xl px-6 lg:px-8 py-11 lg:py">
                    Servicios
                </p>
                <h2 className="mt-3 text-center text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
                    ¿Cómo podemos ayudarte <br className="hidden sm:block" />
                    a <span className="text-primary">sentirse mejor</span>?
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
                    {items.map((it) => (<ServiceCard key={it.title} title={it.title} description={it.description} />))}
                </div>
            </div>
        </section>
    )

}