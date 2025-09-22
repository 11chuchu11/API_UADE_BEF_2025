// Components
import { ServiceCard } from './sharedCards'

// Utils
import { getTexts } from '../text'

export function Services() {
	const texts = getTexts()
	return (
		<section className="bg-background">
			<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py">
				<p className="text-center uppercase font-bold text-primary max-w-7xl px-6 lg:px-8 py-11 lg:py ">{texts.services.sectionLabel}</p>
				<h2 className="mt-3 text-center text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
					{texts.services.headingLine1}
					<br className="hidden sm:block" />
					{texts.services.headingLine2} {''}
					<span className="text-primary">{texts.services.headingHighlight}</span>?
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
					{texts.services.items.map(it => (
						<ServiceCard key={it.title} title={it.title} description={it.description} />
					))}
				</div>
			</div>
		</section>
	)
}
