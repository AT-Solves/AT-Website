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
    PROFILE: "/profile",
};

export const NAVIGATION = {
    ITEMS: [
        { label: "Home", path: ROUTES.HOME },
        { label: "Products", path: ROUTES.PRODUCTS },
        { label: "Profile", path: ROUTES.PROFILE },
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

export const PROFILE_PAGE = {
    HERO: {
        TITLE: "Yamini Devasena Pasumarthy",
        SUBTITLE: "Quality Engineering Leader | AI Product Manager | Innovation Architect",
        DESCRIPTION: "15+ years driving scalable systems, KPI-driven quality strategies, and AI-powered engineering excellence.",
    },
    CONTACT: {
        EMAIL: "yaminidevasena.achiever@gmail.com",
        PHONE: "8897765322",
        LOCATION: "Hyderabad, India",
        GITHUB: "https://github.com/AT-Solves",
        WEBSITE: "http://achieverthoughts.com/",
        LINKEDIN_ICON: "💼",
        GITHUB_ICON: "🔗",
        EMAIL_ICON: "✉️",
        LOCATION_ICON: "📍",
        PHONE_ICON: "📱",
    },
    EXECUTIVE_SUMMARY: {
        TITLE: "Executive Summary",
        ICON: "⭐",
        TEXT: "Quality Engineering leader with 15+ years of experience delivering scalable, high-reliability systems across healthcare, e-commerce, and electro-mobility domains. Proven in driving KPI-led quality strategy, architecting robust automation frameworks, and leading distributed teams to deliver predictable, high-quality releases. Leveraging AI-driven solutions to optimize release cycles, reduce manual effort, and significantly improve engineering productivity and decision-making.",
    },
    ABOUT: {
        TITLE: "About",
        ICON: "👤",
        TEXT: "Visionary leader with a passion for thoughtful engineering and responsible innovation. Specialized in bridging the gap between quality assurance and product management through AI-assisted workflows and data-driven decision making. Founded Achiever Thoughts to create a platform for exploring ideas, systems, and technology with long-term intent and responsibility.",
    },
    EXPERIENCE: {
        TITLE: "Professional Experience",
        ICON: "💼",
        ITEMS: [
            {
                ROLE: "Test Manager / Automation Architect",
                COMPANY: "BOSCH | Movado Group Inc.",
                PERIOD: "Jul 2021 – Present",
                HIGHLIGHTS: [
                    "Owned end-to-end quality strategy for multi-brand e-commerce platform",
                    "Designed Cypress-based automation framework increasing regression coverage",
                    "Implemented ROVO-based 'Release Lens' agent for intelligent change impact analysis",
                    "Built 'Issue Lens' agent integrated with JIRA for automated test case generation",
                    "Led offshore QA teams improving delivery efficiency through structured governance",
                ],
            },
            {
                ROLE: "Tool Developer",
                COMPANY: "BOSCH | SAFT Batteries",
                PERIOD: "Mar 2019 – Jun 2021",
                HIGHLIGHTS: [
                    "Designed and developed engineering tools including Bootloader and Power Supply Programming tools",
                    "Built reusable protocol libraries for CAN, CANOpen, and Modbus communication",
                    "Developed C# WPF applications using MVVM architecture for real-time battery monitoring",
                    "Integrated tools with Battery Management Unit (BMU) hardware and power systems",
                ],
            },
            {
                ROLE: "Automation Architect / SDET 2",
                COMPANY: "BOSCH | Philips Healthcare",
                PERIOD: "Apr 2016 – Feb 2019",
                HIGHLIGHTS: [
                    "Led automation of MRI workflows across use case, workflow, and test case levels",
                    "Designed automation frameworks using Coded UI with OOP and Page Object Model principles",
                    "Integrated automation with MRI hardware systems for real-time validation",
                    "Improved automation efficiency through reusable components and optimization strategies",
                ],
            },
        ],
    },
    EXPERTISE: {
        TITLE: "Core Competencies",
        ICON: "🎯",
        CATEGORIES: [
            {
                NAME: "AI-Driven Quality Engineering",
                ICON: "🤖",
                SKILLS: ["Generative AI", "Agentic AI", "AI-Assisted Testing", "Prompt Engineering", "Agentic Workflows"],
            },
            {
                NAME: "Automation & Engineering",
                ICON: "⚙️",
                SKILLS: ["Cypress", "Playwright", "Selenium", "API Testing", "Framework Design"],
            },
            {
                NAME: "Testing Expertise",
                ICON: "✅",
                SKILLS: ["Functional Testing", "UI Testing", "Performance Testing", "Security Testing", "STLC/SDLC"],
            },
            {
                NAME: "Product & Leadership",
                ICON: "📊",
                SKILLS: ["Quality Strategy", "KPI-Driven Governance", "Release Management", "SAFe Agile", "Team Leadership"],
            },
            {
                NAME: "Programming",
                ICON: "💻",
                SKILLS: ["C#", "Python", "Java", "PowerShell", "JavaScript"],
            },
        ],
    },
    ACHIEVEMENTS: {
        TITLE: "Key Achievements",
        ICON: "🏆",
        ITEMS: [
            "Led KPI-driven quality governance across multiple releases, improving predictability",
            "Designed and implemented ROVO-based 'Release Lens' agent reducing QA analysis time by 60%",
            "Increased automation adoption reducing manual testing effort by 70% across programs",
            "Built AI-driven agents automating test-case generation and bug detection workflows",
            "Enabled intelligent code-review insights with branch linkage improving code quality and traceability",
            "Successfully led and mentored offshore QA teams improving delivery quality and efficiency",
            "Architected reusable automation frameworks adopted across multiple product teams",
        ],
    },
    CERTIFICATIONS: {
        TITLE: "Professional Certifications",
        ICON: "🎓",
        ITEMS: [
            { NAME: "AI Product Manager Certification", DATE: "Dec 2025 – Apr 2026", STATUS: "✓ Recent" },
            { NAME: "SAFe 6 Product Owner/Product Manager (POPM)", DATE: "Dec 2024", STATUS: "✓ Active" },
            { NAME: "ISTQB Advanced Level Test Manager", DATE: "Nov 2022", STATUS: "✓ Active" },
        ],
    },
    VISION: {
        TITLE: "Vision & Philosophy",
        ICON: "🌟",
        TEXT: "I believe in thoughtful engineering and responsible innovation. Quality is not just about finding bugs—it's about understanding systems, enabling teams, and creating lasting value. Every project is an opportunity to advance our understanding of what's possible when technology meets intentionality.",
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
