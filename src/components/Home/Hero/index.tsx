// Components
import { ReserveCta } from "./ReserveCta";
// Texts
import { getTexts } from "../text";
import doctorPortrait from '@/assets/doctorHero.png'

type Props = {
	doctorName?: string
	doctorSurname?: string
	pictureSrc?: string
}


export function HeroDoctor({ doctorName = 'Daniel ', doctorSurname = 'Diaz', pictureSrc = doctorPortrait }: Props) {
	const texts = getTexts()
	return (
		<section id="home" className="relative overflow-hidden bg-secondary ">
			<div className="mx-auto mt-25 max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-6 lg:py-20">
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
							<ReserveCta />
						</div>
					</div>

					<div className="relative">
						<div className="relative mx-auto w-72 sm:w-80 md:w-[28rem]">
							<img
								src={pictureSrc}
								alt={`Foto del Dr. ${doctorName}`}
								className="w-full h-[25rem] xs:h-[30rem] object-contain drop-shadow-xl"
								loading="eager"
							/>
						</div>
					</div>
				</div>
			</div>

		</section>
	)
}

