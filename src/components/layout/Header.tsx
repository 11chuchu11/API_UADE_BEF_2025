import React, { useEffect, useMemo, useState, useCallback } from "react";
import { Button } from "@components/ui/button";
import { LoginDialog } from "../feedback/LoginDialog";
import { cn } from "@/lib/utils";
import { getTexts } from "../Home/text";
import { getTextsAdmin } from "../Admin/text";
import { useNavigate } from "react-router";
import { useHeaderVariant } from "@/hooks/useHeaderVariant";

const Header: React.FC = () => {
	const texts = getTexts();
	const textsAdmin = getTextsAdmin();
	const navigate = useNavigate();
	const { headerAtTop, headerScrolled, titleAtTop, titleScrolled, center, action } =
		useHeaderVariant();

	const [scrolled, setScrolled] = useState(false);
	const [loginOpen, setLoginOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleLogout = () => navigate("/");

	const navItems = useMemo(
		() => [
			texts.header.navbar.link_1,
			texts.header.navbar.link_2,
			texts.header.navbar.link_3,
			texts.header.navbar.link_4,
		],
		[texts.header.navbar]
	);

	const ctaClass = cn(
		"rounded-full uppercase px-4 py-2 transition-all duration-500 ease-in-out border",
		scrolled
			? "bg-primary text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary"
			: "bg-primary-foreground text-primary border-primary hover:bg-primary hover:text-primary-foreground hover:border-primary-foreground"
	);

	const navItemClass = useCallback(
		(isScrolled: boolean) =>
			cn(
				"relative inline-flex h-12 items-center px-2 leading-none select-none",
				isScrolled ? "text-background hover:text-muted" : "text-primary hover:text-chart-2",
				"after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2",
				"after:-bottom-[1px] after:h-[3px] after:w-10 after:rounded-full after:bg-current",
				"after:opacity-0 after:transition-opacity after:duration-300",
				"hover:after:opacity-100 focus-visible:after:opacity-100"
			),
		[]
	);

	return (
		<header
			className={cn(
				"w-full fixed z-50 transition-all duration-1000 ease-in-out",
				scrolled ? headerScrolled : headerAtTop
			)}
		>
			<div className="flex items-center justify-between">
				<div>
					<h1
						className={cn(
							"text-xl font-bold transition-colors duration-1000 ease-in-out",
							scrolled ? titleScrolled : titleAtTop
						)}
					>
						{texts.header.h1}
					</h1>
				</div>

				{center.kind === "nav" ? (
					<nav className="flex items-center gap-24">
						{navItems.map((txt, i) => (
							<a key={i} href="#home" className={navItemClass(scrolled)}>
								{txt}
							</a>
						))}
					</nav>
				) : (
					<h2
						className={cn(
							"text-xl font-bold transition-colors duration-1000 ease-in-out",
							scrolled ? titleScrolled : titleAtTop
						)}
					>
						{textsAdmin.header.text_center}
					</h2>
				)}

				{action.kind === "login" ? (
					<Button onClick={() => setLoginOpen(true)} className={ctaClass} aria-label="Abrir login">
						{texts.header.text_login}
					</Button>
				) : (
					<Button onClick={handleLogout} className={ctaClass} aria-label="Desloguear">
						{texts.header.text_logout}
					</Button>
				)}
			</div>

			{action.kind === "login" && (
				<LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
			)}
		</header>
	);
};

export { Header };
