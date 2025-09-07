//Components
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

type ContactDoctorProps = {
    titlePrefix?: string;
    doctorFullName?: string;
    address?: string;
    email?: string;
    photoSrc?: string | null;
    className?: string;
};

export function ContactDoctor({
    titlePrefix = "Entra en contacto con el",
    doctorFullName = "Doctor Daniel Diaz",
    address = "Independencia 1234 CABA",
    email = "info@doctordanieldiaz.com.ar",
    photoSrc = null,
    className,
}: ContactDoctorProps) {
    return (
        <section className={className ? `bg-background ${className}` : "bg-background"}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            {titlePrefix}
                            <br />
                            <span className="text-primary">{doctorFullName}</span>
                        </h2>

                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-primary ring-1 ring-emerald-200">
                                    <MapPin className="h-4 w-4" />
                                </span>
                                <p className="text-gray-800">{address}</p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-primary ring-1 ring-emerald-200">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <p className="text-gray-800">{email}</p>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <Button
                                type="button"
                                size="lg"
                                className="rounded-full px-6 uppercase tracking-wide"
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Escriba sus consultas
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        {photoSrc ? (
                            <img
                                src={photoSrc}
                                alt="Imagen del doctor"
                                className="h-auto w-[28rem] max-w-full object-contain drop-shadow-xl"
                                loading="lazy"
                            />
                        ) : (
                            <div
                                aria-label="Imagen próximamente"
                                className="w-[28rem] max-w-full aspect-[4/3] rounded-2xl
                           bg-emerald-100/30 ring-1 ring-emerald-200/60
                           flex items-center justify-center text-emerald-700/70 text-sm"
                            >
                                Imagen 
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
