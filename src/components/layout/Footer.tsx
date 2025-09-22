import React from 'react'

// Components
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { Button } from '@components/ui/button'

// Texts
import { getTexts } from '../Home/text'

const Footer: React.FC = () => {
	const texts = getTexts()
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-primary text-background px-20 py-8 md:py-10">
			<div className="max-w-[95rem] mx-auto">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
					<div className="space-y-1">
						<h2 className="font-bold text-xl">{texts.footer.text_name_doctor}</h2>
						<p className="text-sm opacity-90">{texts.footer.text_dev_signature(currentYear)}</p>
						<p className="text-sm opacity-90">{texts.footer.copyright}</p>
					</div>

					<div className="flex-1" />

					<div className="flex gap-4">
						<Button
							asChild
							className="rounded-full px-0 w-10 h-10 border border-background text-background bg-transparent transition-all duration-200 hover:bg-secondary hover:text-primary hover:border-primary transform hover:-translate-y-0.5"
							variant="ghost"
							size="icon">
							<a href="https://instagram.com" aria-label="Instagram" rel="noopener noreferrer" target="_blank">
								<FiInstagram size={18} />
							</a>
						</Button>

						<Button
							asChild
							className="rounded-full px-0 w-10 h-10 border border-background text-background bg-transparent transition-all duration-200 hover:bg-secondary hover:text-primary hover:border-primary transform hover:-translate-y-0.5"
							variant="ghost"
							size="icon">
							<a href="https://facebook.com" aria-label="Facebook" rel="noopener noreferrer" target="_blank">
								<FiFacebook size={18} />
							</a>
						</Button>

						<Button
							asChild
							className="rounded-full px-0 w-10 h-10 border border-background text-backgroundbg-transparent transition-all duration-200 hover:bg-secondary hover:text-primary hover:border-primary transform hover:-translate-y-0.5"
							variant="ghost"
							size="icon">
							<a href="https://youtube.com" aria-label="YouTube" rel="noopener noreferrer" target="_blank">
								<FiYoutube size={18} />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export { Footer }
