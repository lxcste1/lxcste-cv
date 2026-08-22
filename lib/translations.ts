export const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      contact: "Contacto",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tenés un proyecto en mente? ¡Hablemos!",
      info: {
        title: "Información de contacto",
        email: "Email",
        location: "Ubicación",
        locationValue: "Buenos Aires, Argentina",
        social: "Redes sociales",
      },
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        subject: "Asunto",
        subjectPlaceholder: "¿De qué quieres hablar?",
        message: "Mensaje",
        messagePlaceholder: "Contame sobre tu proyecto...",
        send: "Enviar mensaje",
        sending: "Enviando...",
        success: "Mensaje enviado correctamente. Te responderé pronto.",
        error: "Hubo un error al enviar el mensaje. Intentá de nuevo.",
      },
    },
    projects: {
      title: "Proyectos",
      subtitle:
        "Una selección de proyectos personales y profesionales en los que he trabajado.",
      viewProject: "Ver proyecto",
      inDevelopment: "En desarrollo",
      comingSoon: "Próximamente",
      items: [
        {
          title: "Team Builder",
          description:
            "Aplicación web diseñada para la creación y gestión de equipos de fútbol, optimizando la organización de partidos de forma intuitiva.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
          ],
          url: "https://www.team-builder.com.ar/",
          imageUrl:
            "https://res.cloudinary.com/dznm0lzwj/image/upload/v1774652107/portfolio/team-builder_screenshot_uqn96j.png",
          status: "active",
        },
        {
          title: "Origen del Sur",
          description:
            "E-commerce especializado en la venta de mates y accesorios artesanales, enfocado en brindar una experiencia de compra fluida y estética.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
          ],
          url: "https://origendelsur.com.ar/",
          imageUrl:
            "https://res.cloudinary.com/dznm0lzwj/image/upload/v1774722164/portfolio/origendelsur_screenshot_biakll.png",
          status: "active",
        },
        {
          title: "Slotify",
          description:
            "Plataforma SaaS para la gestión y reserva de turnos, enfocada en simplificar la agenda de profesionales y emprendedores.",
          technologies: ["React", "Next.js", "TypeScript", "NestJS", "OAuth"],
          url: null,
          imageUrl:
            "https://res.cloudinary.com/dznm0lzwj/image/upload/v1774722343/portfolio/slotify_screenshot_lpvdqs.png",
          status: "development",
        },
      ],
    },
    resume: {
      hero: {
        eyebrow: "Ingeniero frontend / Buenos Aires, Argentina",
        heading: "Construyendo productos digitales con sistemas frontend modernos.",
        summary: "Soy Lucas Tello, Ingeniero Frontend con mas de 5 años de experiencia creando aplicaciones web escalables, librerias reutilizables de componentes y experiencias de producto con React, Next.js y TypeScript.",
        cta: "Ver proyectos seleccionados",
        contact: "Contactame",
      },
      currently: {
        label: "Actualmente",
        ariaLabel: "En este momento",
        items: [
          " Construyendo sistemas frontend compartidos en La Nacion",
          " Desarrollando Slotify, un SaaS multi-tenant",
          " Integrando IA al flujo de ingenieria",
        ],
      },
      profile: {
        eyebrow: "Perfil",
        statement: "Combino pensamiento de producto con oficio frontend: desde arquitectura de componentes y design systems hasta performance, SEO y los detalles que hacen que una interfaz se sienta natural.",
      },
      openToRemote: "Abierto a oportunidades remotas",
      experienceSection: {
        eyebrow: "01 / Experiencia",
        title: "Experiencia entregando interfaces utiles y escalables.",
      },
      expertise: {
        eyebrow: "02 / Especialidad",
        title: "Los problemas de ingenieria que disfruto resolver.",
        items: [
          "Arquitectura Frontend",
          "Design Systems",
          "Ingenieria de Producto",
          "Performance y Core Web Vitals",
          "SEO Tecnico",
          "Desarrollo Aumentado con IA",
        ],
      },
      ai: {
        eyebrow: "03 / Ingenieria con IA",
        heading: "La IA es parte de mi sistema de desarrollo, no una etiqueta.",
        description: "Uso Specification Driven Development, OpenSpec, OpenCode y agentes especializados para hacer mas deliberados el planning, la implementacion, la documentacion y el review. El objetivo son mejores decisiones y software de mayor calidad, no atajos.",
      },
      projectsSection: {
        eyebrow: "04 / Proyectos seleccionados",
        title: "Proyectos construidos a partir del problema.",
        flagship: {
          label: "Proyecto principal / En desarrollo",
          title: "Slotify",
          description: "Una plataforma SaaS multi-tenant para negocios basados en turnos: centros de estetica, pilates y gimnasios. Diseñada desde cero con configuracion por organizacion, acceso por roles, reservas online y una experiencia administrativa enfocada en la operacion.",
          details: { architecture: "Architecture", stack: "Stack", focus: "Focus", archValue: "Multi-tenant SaaS", stackValue: "Next.js / TypeScript / Supabase", focusValue: "Reusable systems / Product UX" },
        },
        rows: [
          { title: "Origen del Sur", description: "Experiencia ecommerce enfocada en identidad visual, SEO y una compra sin friccion." },
          { title: "Team Builder", description: "Aplicacion de gestion de equipos y partidos con una interfaz practica y centrada en el jugador." },
        ],
      },
      technology: {
        eyebrow: "05 / Herramientas",
        title: "Tecnologias elegidas para entregar productos confiables.",
      },
      education: {
        label: "Educacion",
        degree: "Ingenieria en Informatica",
        period: "UNDAV / 2019 - Actualidad",
        foundation: "Base",
        foundationRole: "Operaciones de Infraestructura",
        foundationDesc: "Sistemas, disponibilidad y monitoreo",
      },
      cta: "Construyamos algo con criterio",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
    },
    footer: {
      rights: "All rights reserved.",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's talk!",
      info: {
        title: "Contact information",
        email: "Email",
        location: "Location",
        locationValue: "Buenos Aires, Argentina",
        social: "Social media",
      },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        subject: "Subject",
        subjectPlaceholder: "What do you want to talk about?",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent successfully. I'll get back to you soon.",
        error: "There was an error sending the message. Please try again.",
      },
    },
    projects: {
      title: "Projects",
      subtitle:
        "A selection of personal and professional projects I've worked on.",
      viewProject: "View project",
      inDevelopment: "In development",
      comingSoon: "Coming soon",
      items: [
        {
          title: "Team Builder",
          description:
            "Web application designed for creating and managing football teams, optimizing match organization in an intuitive way.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
          ],
          url: "https://www.team-builder.com.ar/",
          imageUrl:
            "https://res.cloudinary.com/dznm0lzwj/image/upload/v1774652107/portfolio/team-builder_screenshot_uqn96j.png",
          status: "active",
        },
        {
          title: "Origen del Sur",
          description:
            "E-commerce specialized in selling mates and artisanal accessories, focused on providing a smooth and aesthetic shopping experience.",
          technologies: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
          ],
          url: "https://origendelsur.com.ar/",
          imageUrl:
            "https://res.cloudinary.com/dznm0lzwj/image/upload/v1774722164/portfolio/origendelsur_screenshot_biakll.png",
          status: "active",
        },
        {
          title: "Slotify",
          description:
            "SaaS platform for appointment management and booking, focused on simplifying the schedule of professionals and entrepreneurs.",
          technologies: ["React", "Next.js", "TypeScript", "NestJS", "OAuth"],
          url: null,
          imageUrl:
            "https://res.cloudinary.com/dznm0lzwj/image/upload/v1774722343/portfolio/slotify_screenshot_lpvdqs.png",
          status: "development",
        },
      ],
    },
    resume: {
      hero: {
        eyebrow: "Frontend engineer / Buenos Aires, Argentina",
        heading: "Building considered digital products with modern frontend systems.",
        summary: "I'm Lucas Tello, a Frontend Engineer with 5+ years of experience building scalable web applications, reusable component libraries and product experiences with React, Next.js and TypeScript.",
        cta: "Explore selected work",
        contact: "Get in touch",
      },
      currently: {
        label: "Currently",
        ariaLabel: "Current focus",
        items: [
          " Building shared frontend systems at La Nacion",
          " Developing Slotify, a multi-tenant SaaS",
          " Integrating AI into the engineering workflow",
        ],
      },
      profile: {
        eyebrow: "Profile",
        statement: "I pair product thinking with frontend craft - from component architecture and design systems to performance, SEO and the details that make an interface feel inevitable.",
      },
      openToRemote: "Open to remote opportunities",
      experienceSection: {
        eyebrow: "01 / Experience",
        title: "A track record of shipping useful, scalable interfaces.",
      },
      expertise: {
        eyebrow: "02 / Expertise",
        title: "The engineering problems I enjoy owning.",
        items: [
          "Frontend Architecture",
          "Design Systems",
          "Product Engineering",
          "Performance & Core Web Vitals",
          "Technical SEO",
          "AI-Augmented Development",
        ],
      },
      ai: {
        eyebrow: "03 / AI Engineering",
        heading: "AI is part of my development system, not a feature label.",
        description: "I use Specification Driven Development, OpenSpec, OpenCode and specialized agents to make planning, implementation, documentation and review more deliberate. The goal is clearer decisions and higher-quality software, not shortcuts.",
      },
      projectsSection: {
        eyebrow: "04 / Selected work",
        title: "Projects built from the problem outward.",
        flagship: {
          label: "Flagship project / In development",
          title: "Slotify",
          description: "A multi-tenant SaaS platform for appointment-based businesses: beauty studios, pilates centers and gyms. Designed from the ground up around organization-level configuration, role-based access, online booking and an operations-focused admin experience.",
          details: { architecture: "Architecture", stack: "Stack", focus: "Focus", archValue: "Multi-tenant SaaS", stackValue: "Next.js / TypeScript / Supabase", focusValue: "Reusable systems / Product UX" },
        },
        rows: [
          { title: "Origen del Sur", description: "Commerce experience shaped around visual identity, SEO and a frictionless purchase path." },
          { title: "Team Builder", description: "Team and match-management application with a practical, player-first interface." },
        ],
      },
      technology: {
        eyebrow: "05 / Toolkit",
        title: "Tools chosen for dependable product delivery.",
      },
      education: {
        label: "Education",
        degree: "Computer Science Engineering",
        period: "UNDAV / 2019 - Present",
        foundation: "Foundation",
        foundationRole: "Infrastructure Operations",
        foundationDesc: "Systems, availability and monitoring",
      },
      cta: "Let's build something considered",
    },
  },
} as const;

export type { Language, TranslationKey } from "@/types/language";
