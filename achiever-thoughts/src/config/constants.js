/**
 * constants.js
 * Centralized configuration for Achiever Thoughts application
 * Single source of truth for all app metadata, routes, content, and styling
 */

export const APP_CONFIG = {
    NAME: "Achiever Thoughts",
    TAGLINE: "A calm and thoughtful space to explore ideas, systems, and technology",
    DESCRIPTION: "A calm and thoughtful space to explore ideas, systems, and technology built with long term intent and responsibility.",
    HOMEPAGE: "https://achieverthoughts.com",
    YEAR_FOUNDED: new Date().getFullYear(),
    LOGO_ALT: "Achiever Thoughts logo",
};

export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    ABOUT: "/about",
};

export const NAVIGATION = {
    ITEMS: [
        { label: "Home", path: ROUTES.HOME },
        { label: "Products", path: ROUTES.PRODUCTS },
        { label: "About", path: ROUTES.ABOUT },
    ],
};

export const NAVBAR_LABELS = {
    MENU_TEXT: "Menu",
};

export const HOME_PAGE = {
    HERO: {
        TITLE: "Achiever Thoughts",
        DESCRIPTION: "A calm and thoughtful space to explore ideas, systems, and technology built with long term intent and responsibility.",
    },
    SECTION_TITLE: "What This Platform Represents",
    CARDS: [
        {
            id: "thoughtful-engineering",
            title: "Thoughtful Engineering",
            description: "Systems designed with clarity, discipline, and long term maintainability.",
            icon: "TEIcon.png",
        },
        {
            id: "structured-exploration",
            title: "Structured Exploration",
            description: "Ideas examined through careful analysis, prototypes, and demonstrations.",
            icon: "SEIcon.png",
        },
        {
            id: "responsible-progress",
            title: "Responsible Progress",
            description: "Technology choices guided by impact, safety, and sustainability.",
            icon: "RPIcon.png",
        },
    ],
    ACTIONS: {
        PRIMARY: {
            label: "View Products",
            path: ROUTES.PRODUCTS,
        },
        SECONDARY: {
            label: "Learn More",
            path: ROUTES.ABOUT,
        },
    },
};

export const PRODUCTS_PAGE = {
    HERO: {
        TITLE: "Rapid Prototyping Applications",
        DESCRIPTION: "A collection of AI-driven prototypes built through exploration, learning, and applied product thinking.",
    },
    SECTION_TITLE: "Applications Portfolio",
    BUTTON_LABELS: {
        LAUNCH: "Launch Application",
        GITHUB: "View GitHub",
    },
};

export const ABOUT_PAGE = {
    HERO: {
        TITLE: "About Achiever Thoughts",
        DESCRIPTION: "Thoughtful exploration of ideas, systems, and technology with a focus on long-term responsibility and impact.",
    },
    MISSION: {
        TITLE: "Our Mission",
        DESCRIPTION: "We believe in the power of calm, intentional exploration. At Achiever Thoughts, we create spaces for deep thinking about technology, business, and innovation. Our work balances ambition with responsibility, ensuring that every solution we pursue serves a meaningful purpose.",
    },
    VALUES: {
        TITLE: "Our Core Values",
        ITEMS: [
            {
                id: "clarity",
                title: "Clarity",
                description: "Clear thinking leads to better decisions. We prioritize understanding over complexity.",
            },
            {
                id: "discipline",
                title: "Discipline",
                description: "Structured approaches to exploration. Every project is built with intentionality and care.",
            },
            {
                id: "impact",
                title: "Impact",
                description: "Meaningful progress. We measure success by positive outcomes and sustainable growth.",
            },
        ],
    },
    APPROACH: {
        TITLE: "Our Approach",
        DESCRIPTION: "We combine rigorous analysis with creative exploration. Through prototypes, demonstrations, and collaborative dialogue, we develop solutions that are both innovative and responsible. Every project is an opportunity to advance our understanding of what's possible when technology meets thoughtfulness.",
    },
    FOUNDER: {
        NAME: "Yamini Devasena Pasumarthy",
        TITLE: "Founder & Quality Engineering Leader",
        CONTACT: {
            EMAIL: "yaminidevasena.achiever@gmail.com",
            GITHUB: "https://github.com/AT-Solves",
            PHONE: "8897765322",
            LOCATION: "Hyderabad, India",
            WEBSITE: "http://achieverthoughts.com/",
        },
        BIO: "Quality Engineering leader with 15+ years of experience delivering scalable, high-reliability systems across healthcare, e-commerce, and electro-mobility domains. Proven in driving KPI-led quality strategy, architecting robust automation frameworks, and leading distributed teams to deliver predictable, high-quality releases.",
        HIGHLIGHTS: [
            "15+ years delivering scalable, high-reliability systems",
            "Led KPI-driven quality strategy and governance for multi-brand platforms",
            "Designed automation frameworks (Cypress) to increase regression coverage",
            "Built AI-driven agents (ROVO, Issue Lens) to automate release analysis and test-case generation",
            "Integrated CI workflows and intelligent code-review/coverage insights",
        ],
        CERTIFICATIONS: [
            { name: "AI Product Manager Certification", date: "Dec 2025 – Apr 2026" },
            { name: "SAFe 6 Product Owner/Product Manager (POPM)", date: "Dec 2024" },
            { name: "ISTQB Advanced Level Test Manager", date: "Nov 2022" },
        ],
        LABELS: {
            SECTION_TITLE: "Founder",
            CONTACT_TITLE: "Contact",
            HIGHLIGHTS_TITLE: "Selected Highlights",
            CERTS_TITLE: "Certifications",
        },
    },
};

export const DEMOS_PAGE = {
    HERO: {
        TITLE: "Demos",
        DESCRIPTION: "Explore interactive demonstrations of our projects and products.",
    },
};

export const INVESTORS_PAGE = {
    HERO: {
        TITLE: "Investors",
        DESCRIPTION: "Information for investors and partners interested in our vision and projects.",
    },
};

export const FOOTER = {
    COPY_YEAR: new Date().getFullYear(),
    COPY_TEXT: `© ${new Date().getFullYear()} ${APP_CONFIG.NAME}`,
    BACKGROUND: "#f4f4f4",
    TEXT_ALIGN: "center",
    PADDING: "1rem",
};

export const UI_CLASSES = {
    // Layout
    LAYOUT: {
        NAVBAR: "navbar",
        NAVBAR_INNER: "navbar-inner",
        CONTAINER: "container",
        BRAND: "brand",
        BRAND_LOGO: "brand-logo",
        NAV_TOGGLE: "nav-toggle",
        NAV: "nav",
        NAV_OPEN: "open",
    },
    // Hero
    HERO: {
        SECTION: "hero",
        INNER: "hero-inner",
        TITLE: "hero-title",
        DIVIDER: "hero-divider",
        TEXT: "hero-text",
        ACTIONS: "hero-actions",
    },
    // Sections
    SECTIONS: {
        SECTION: "section",
        SECTION_ALT: "section-alt",
        TITLE: "section-title",
        DIVIDER: "section-divider",
    },
    // Grid
    GRID: {
        GRID_3: "grid-3",
    },
    // Cards
    CARDS: {
        CARD: "card",
        CARD_ICON: "card-icon",
    },
    // Buttons
    BUTTONS: {
        PRIMARY: "button-primary",
        SECONDARY: "button-secondary",
    },
    // Products
    PRODUCTS: {
        PRODUCT_CARD: "product-card",
        PRODUCT_META: "product-meta",
        PRODUCT_STATUS: "product-status",
        PRODUCT_ACTIONS: "product-actions",
    },
    // Footer
    FOOTER: {
        FOOTER: "footer",
    },
};

export const NAVBAR_ARIA = {
    TOGGLE_LABEL: "Toggle navigation",
    NAV_LABEL: "Main navigation",
};

export const HOME_ARIA = {
    HOME_TITLE_ID: "home-title",
    SECTION_LABEL: "Primary actions",
};

export const PRODUCT_LABELS = {
    CATEGORY_LABEL: "Category:",
    STATUS_LABEL: "Status:",
};
