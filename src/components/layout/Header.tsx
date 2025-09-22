import React, { useEffect, useState } from 'react';

// Components
import { Button } from '@components/ui/button';

// Utils
import { cn } from '@/lib/utils';

// texts
import { getTexts } from '../text';
import { Link } from 'react-router';
const Header: React.FC = () => {

    const texts = getTexts();

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={cn(
            "w-full fixed z-50 transition-all duration-1000 ease-in-out",
            scrolled
                ? "bg-primary text-white px-20 py-4 shadow-lg" // brand-green
                : "bg-secondary text-white px-20 py-4" // brand-green-light
        )}>
            <div className="flex items-center justify-between">
                {/* Logo/Título */}
                <div>
                    <h1 className={cn(
                        "text-xl font-bold transition-colors duration-1000 ease-in-out",
                        scrolled ? "text-background" : "text-primary" // brand-beige : brand-green
                    )}>
                        {texts.header.h1}
                    </h1>
                </div>

                {/* Navegación */}
                <nav className="flex gap-24">
                    <a
                        href="#home"
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled
                                ? "text-background hover:text-muted" // brand-beige hover: brand-green-light-02
                                : "text-primary hover:text-chart-2" // brand-green hover: brand-green-hover
                        )}
                    >
                        {texts.header.navbar.link_1}
                    </a>
                    <a
                        href="#home"
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled
                                ? "text-background hover:text-muted" // brand-beige hover: brand-green-light-02
                                : "text-primary hover:text-chart-2" // brand-green hover: brand-green-hover
                        )}
                    >
                        {texts.header.navbar.link_2}
                    </a>
                    <a
                        href="#home"
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled
                                ? "text-background hover:text-muted" // brand-beige hover: brand-green-light-02
                                : "text-primary hover:text-chart-2" // brand-green hover: brand-green-hover
                        )}
                    >
                        {texts.header.navbar.link_3}
                    </a>
                    <a
                        href="#home"
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled
                                ? "text-background hover:text-mute" // brand-beige hover: brand-green-light-02
                                : "text-primary hover:text-chart-2" // brand-green hover: brand-green-hover
                        )}
                    >
                        {texts.header.navbar.link_4}
                    </a>
                </nav>

                {/* Botón Login */}
                <Button asChild
                    className={cn(
                        "rounded-full uppercase px-4 py-2 transition-all duration-500 ease-in-out border",
                        scrolled
                            ? "bg-primary text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-primary"
                            : "bg-primary-foreground text-primary border-primary hover:bg-primary hover:text-primary-foreground hover:border-primary-foreground"
                    )}
                >
                    <Link to="/admin">
                        {texts.header.text_login}
                    </Link>
                </Button>
            </div>
        </header>
    );
};

export { Header }; 