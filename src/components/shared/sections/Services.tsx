import { ServiceCard } from "../cards/SharedCard";

export function Services() {
    const items = [
        { title: "Atención médica", description: "Ofrezco cuidados preventivos, seguimiento de enfermedades crónicas y orientación personalizada para cada miembro de su hogar." },
        { title: "Atención cercana", description: "Reserve fácilmente y acceda a un servicio de confianza, enfocado en su bienestar y el de sus seres." },
        { title: "Cuidamos tu Familia", description: "Experiencia en diagnóstico temprano, control de salud y tratamientos adaptados a cada etapa de la vida." },
        { title: "Prevención", description: "Evaluaciones médicas completas, chequeos periódicos y planes de prevención diseñados para mantener su salud estable." },
        { title: "Profesionalismo", description: "Un espacio pensado para brindar atención médica humana, cercana y con la mejor calidad en cada visita." },
        { title: "Bienestar físico y mental", description: "Orientación integral en hábitos saludables, manejo del estrés y cuidado de la salud mental." },
    ];

    return (
        <section className="bg-chart-3/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py">
                <p className="text-center uppercase font-bold text-primary max-w-7xl px-6 lg:px-8 py-11 lg:py ">
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