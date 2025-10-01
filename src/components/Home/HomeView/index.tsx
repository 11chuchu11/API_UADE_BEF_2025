// Components
import { AboutMe } from '../AboutMe'
import { ContactDoctor } from '../Contact'
import { HeroDoctor } from '../Hero'
import { StatsBar } from '../Hero/StatsBar'
import { Services } from '../Services'

export const HomeView = () => {
	return (
		<>
			<HeroDoctor />
			<section className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 -mt-14 lg:-mt-20 mb-12">
				<StatsBar />
			</section>
			<Services />
			<AboutMe />
			<ContactDoctor />
		</>
	)
}


