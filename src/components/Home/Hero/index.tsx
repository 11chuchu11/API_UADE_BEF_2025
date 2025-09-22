// Components
import { ActionButton } from "@components/ui/buttons/ActionButton";

// Texts
import { getTexts } from "../text";
type Props = {
	doctorName?: string
	doctorSurname?: string
	pictureSrc?: string
}

export function HeroDoctor({ doctorName = 'Daniel ', doctorSurname = 'Diaz', pictureSrc = '/assets/doctor.png' }: Props) {
	const texts = getTexts()
	return (
		<section className="relative overflow-hidden bg-secondary pt-6 pb-12 lg:pb-16">
			<div className="mx-auto mt-12 mb-10 max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
					{/* Texto */}
					<div>
						<div className="h-1 w-16 bg-primary rounded-full mb-6" />
						<p className="text-primary font-semibold tracking-wide uppercase text-sm">{texts.hero.welcome}</p>

						<h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
							DOCTOR <span className="text-chart-2">{doctorName.toUpperCase()}</span>
							<span className="text-primary">{doctorSurname.toUpperCase()}</span>
						</h1>

						<p className="mt-5 text-foreground text-base md:text-lg max-w-prose">
							Doctor{' '}
							<span className="font-medium text-primary">
								{doctorName}
								{doctorSurname}
							</span>{' '}
							{texts.hero.intro_1} <span className="font-semibold">{texts.hero.dr_speciality}</span> y{' '}
							<span className="font-semibold">{texts.hero.dr_speciality2}</span>
							{texts.hero.intro_3} <span className="font-semibold">{texts.hero.intro_4}</span> {texts.hero.intro_5}
						</p>

						<p className="mt-5 text-foreground">{texts.hero.reservation_text}</p>

						<div className="mt-6">
							<ActionButton>{texts.hero.reserveLabel}</ActionButton>
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
	)
}

