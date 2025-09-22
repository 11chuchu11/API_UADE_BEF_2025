export const getTexts = () => ({
    header: {
        h1: "Dr Daniel Diaz",
        navbar: {
            link_1: "Inicio",
            link_2: "Sobre mi",
            link_3: "Servicios",
            link_4: "Citas"
        },
        text_login: "login"
    },
    footer: {
        text_name_doctor: "Dr Daniel Diaz",
        text_dev_signature: (year: Number) => `©${year} – Sur Studio Website.`,
        copyright: "Todos los derechos reservados."
    },
    hero: {
        welcome: "Bienvenidos! 👋",
        intro_1: "- Experto en",
        dr_speciality: "Pediatría Infantil",
        intro_2: "y",
        dr_speciality2: "Medicina Familiar",
        intro_3: ", está listo para recibirte en su consulta para cuidar de tu",
        intro_4: "Salud",
        intro_5: "y la de tus seres queridos.",
        reservation_text: "Para reservar una cita presiona el botón!"
    },
    statsbar: {
        families: {
            value: "+350",
            label: "Familias Atendidas",
        },
        appointments: {
            value: "+5000",
            label: "Citas Realizadas",
        },
        experience: {
            value: "+10",
            label: "Años de Experiencia",
        },
    }
})