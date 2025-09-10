import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

const Header: React.FC = () => {
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
            "w-full z-50 transition-all duration-1000 ease-in-out",
            scrolled 
                ? "fixed top-0 left-0 bg-[#00856F] text-white px-20 py-4 shadow-lg" // brand-green
                : "bg-[#DCE9E2] text-white px-20 py-4" // brand-green-light
        )}>
            <div className="flex items-center justify-between">
                {/* Logo/Título */}
                <div>
                    <h1 className={cn(
                        "text-xl font-bold transition-colors duration-1000 ease-in-out",
                        scrolled ? "text-[#FFFAF1]" : "text-[#00856F]" // brand-beige : brand-green
                    )}>
                        Dr Daniel Diaz
                    </h1>
                </div>

                {/* Navegación */}
                <nav className="flex gap-24">
                    <a 
                        href="#home" 
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled 
                                ? "text-[#FFFAF1] hover:text-[#F7F9F9]" // brand-beige hover: brand-green-light-02
                                : "text-[#00856F] hover:text-[#00453A]" // brand-green hover: brand-green-hover
                        )}
                    >
                        Inicio
                    </a>
                    <a 
                        href="#home" 
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled 
                                ? "text-[#FFFAF1] hover:text-[#F7F9F9]" // brand-beige hover: brand-green-light-02
                                : "text-[#00856F] hover:text-[#00453A]" // brand-green hover: brand-green-hover
                        )}
                    >
                        Sobre mi
                    </a>
                    <a 
                        href="#home" 
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled 
                                ? "text-[#FFFAF1] hover:text-[#F7F9F9]" // brand-beige hover: brand-green-light-02
                                : "text-[#00856F] hover:text-[#00453A]" // brand-green hover: brand-green-hover
                        )}
                    >
                        Servicios
                    </a>
                    <a 
                        href="#home" 
                        className={cn(
                            "font-sans transition-all duration-500 ease-in-out",
                            scrolled 
                                ? "text-[#FFFAF1] hover:text-[#F7F9F9]" // brand-beige hover: brand-green-light-02
                                : "text-[#00856F] hover:text-[#00453A]" // brand-green hover: brand-green-hover
                        )}
                    >
                        Citas
                    </a>
                </nav>

                {/* Botón Login */}
                <Button 
                    className={cn(
                        "rounded-full px-4 py-2 transition-all duration-500 ease-in-out border",
                        scrolled
                            ? "bg-[#00856F] text-[#FFFAF1] border-[#FFFAF1] hover:bg-[#FFFAF1] hover:text-[#00856F] hover:border-[#00856F]"
                            : "bg-[#FFFAF1] text-[#00856F] border-[#00856F] hover:bg-[#00856F] hover:text-[#FFFAF1] hover:border-[#FFFAF1]"
                    )}
                >
                    LOGIN
                </Button>
            </div>
        </header>
    );
};

export { Header }; 