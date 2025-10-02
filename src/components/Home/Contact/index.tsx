// Components
import { MapPin, Mail } from "lucide-react"
import { ActionButton } from "@components/ui/buttons/ActionButton";
import { FaWhatsapp } from "react-icons/fa";
import doctorPortrait from '@/assets/contactDoctor.png'

// Texts
import { getTexts } from "../text";

export function ContactDoctor({ photoSrc = doctorPortrait, className }: { photoSrc?: string; className?: string }) {
	const texts = getTexts()

	return (
		<section id='contact'  className={className ? `bg-background scroll-mt-24 ${className}` : 'scroll-mt-24 bg-background'}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid grid-cols-1 items-center gap-1 lg:grid-cols-2">
					<div>
						<h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
							{texts.contact.titleLine1}
							<span className="block">
								{texts.contact.titleLine2Prefix} <span className="text-primary">{texts.contact.doctorFullName}</span>
							</span>
						</h2>

						<ul className="mt-8 space-y-4">
							<li className="flex items-center gap-3">
								<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/70 text-primary ring-1 ring-emerald-200">
									<MapPin className="h-4 w-4" />
								</span>
								<p className="text-mute-foreground">{texts.contact.address}</p>
							</li>

							<li className="flex items-center gap-3">
								<span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-secondary/70 text-primary ring-1 ring-emerald-200">
									<Mail className="h-4 w-4" />
								</span>
								<p className="text-mute-foreground">{texts.contact.email}</p>
							</li>
						</ul>

						<div className="mt-8">
							<ActionButton icon={<FaWhatsapp className="h-5 w-5" />}>{texts.contact.buttonLabel}</ActionButton>
						</div>
					</div>

					<div className="flex justify-center mt-9 lg:justify-end">
						{photoSrc ? (
							<img
								src={photoSrc}
								alt="Imagen del doctor"
								className="h-auto w-[33rem] max-w-full object-contain drop-shadow-xl"
								loading="lazy"
							/>
						) : (
							<div
								aria-label="Imagen próximamente"
								className="w-[28rem] max-w-full aspect-[4/3] rounded-2xl
                           bg-secondary/60 ring-1 ring-primary/60
                           flex items-center justify-center text-primary text-sm">
								{texts.contact.altDoctor}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}

