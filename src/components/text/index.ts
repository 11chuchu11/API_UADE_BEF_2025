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
        reservation_text: "Para reservar una cita presiona el botón!",
        reserveLabel: "Reserva de citas"
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
    },
    about: {
        sectionLabel: "Sobre mí",
        headingPrefix: "Conozca a",
        headingSuffix: "y su misión como Doctor",
        paragraphs: [
            (name: string, surname: string) =>
                `El Dr. ${name} ${surname} es médico formado en la Universidad de Buenos Aires UBA,
            especialista en Pediatría y Medicina Familiar, dedicado a brindar
            atención integral, cercana y humana a cada paciente.`,
            () =>
                `Su propósito es acompañar a las personas en todas las etapas de la vida,
            ofreciendo prevención, diagnóstico y tratamientos adaptados a cada necesidad.`,
            () =>
                `Con años de experiencia en medicina comunitaria, busca mejorar la calidad
            de vida de las familias mediante un cuidado personalizado y accesible.
            La escucha activa, el respeto y la empatía son pilares de su atención.`,
        ],
    },
    contact: {
        titleLine1: "Entra en contacto con",
        titleLine2Prefix: "el",
        doctorFullName: "Doctor Daniel Diaz",
        address: "Independencia 1234 CABA",
        email: "info@doctordanieldiaz.com.ar",
        buttonLabel: "Escriba sus consultas",
        altDoctor: "Imagen del doctor",
      }
      
})