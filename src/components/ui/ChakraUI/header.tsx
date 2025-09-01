import React, {useEffect, useState} from 'react';
import { Box, Flex, Spacer, Button, Link, Heading } from '@chakra-ui/react';
import '../../../styles/components/_header.scss';

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
        <Box as="header" className={scrolled ? "header-Scroll" : "header"} shadow="md">
            <Flex align="center">
                <Box>
                    <Heading as="h1" fontSize="xl" fontWeight="bold">
                        Dr Daniel Diaz
                    </Heading>
                </Box>

                <Spacer />

                <Flex gap={24}>
                    <Link href="#home" className="nav-link">
                        Inicio
                    </Link>
                    <Link href="#home" className="nav-link">
                        Sobre mi
                    </Link>
                    <Link href="#home" className="nav-link">
                        Servicios
                    </Link>
                    <Link href="#home" className="nav-link">
                        Citas
                    </Link>
                </Flex>

                <Spacer />

                <Button className='btn-login'>
                    LOGIN
                </Button>
            </Flex>
        </Box>
    );
};

export default Header;