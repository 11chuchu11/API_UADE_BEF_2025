// Texts
import { getTexts } from '../../text'

export function StatsBar() {
	const texts = getTexts()
	const sb = texts.statsbar
	return (
		<div className="mx-auto w-full max-w-5xl rounded-xl bg-background ring-1 ring-primary/10 shadow-sm mb-15">
			<div className="grid grid-cols-1 md:grid-cols-3">
				<div className="flex flex-col items-center justify-center py-8 px-6">
					<div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-primary tabular-nums">
						{sb.families.value}
					</div>
					<div className="mt-3 text-sm md:text-base text-primary">{sb.families.label}</div>
				</div>
				<div className="flex flex-col items-center justify-center py-8 px-6 md:border-l md:border-chart-3">
					<div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-primary tabular-nums">
						{sb.appointments.value}
					</div>
					<div className="mt-3 text-sm md:text-base text-primary">{sb.appointments.label}</div>
				</div>
				<div className="flex flex-col items-center justify-center py-8 px-6 md:border-l md:border-chart-3">
					<div className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight text-primary tabular-nums">
						{sb.experience.value}
					</div>
					<div className="mt-3 text-sm md:text-base text-primary">{sb.experience.label}</div>
				</div>
			</div>
		</div>
	)
}
