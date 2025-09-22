// Texts
import { getTexts } from "../../text";

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
    const texts = getTexts();

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
                        {texts.about.sectionLabel}
                    </p>

                    <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
                        {texts.about.headingPrefix}{" "}
                        <span className="text-primary">{name} {surname}</span>{" "}
                        {texts.about.headingSuffix}
                    </h2>

                    <div className="mt-6 space-y-6 text-foreground md:text-base leading-relaxed">
                        {texts.about.paragraphs.map((p, idx) => (
                            <p key={idx}>{p(name, surname)}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}