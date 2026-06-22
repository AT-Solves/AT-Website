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
    INVESTORS: "/investors",
    ABOUT: "/about",
    PROFILE: "/profile",
    AI_ACHIEVER: "/ai-achiever",
};

export const NAVIGATION = {
    ITEMS: [
        { label: "Home", path: ROUTES.HOME },
        { label: "AI Achiever", path: ROUTES.AI_ACHIEVER },
        { label: "Profile", path: ROUTES.PROFILE },
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
        SUBTITLE: "AI Product Manager | QA & Agile Leader | AI Builder",
        DESCRIPTION: "16+ years driving AI products, LLMs, agentic workflows, and KPI-driven quality strategy across ecommerce, healthcare, and mobility systems.",
    },
    CONTACT: {
        EMAIL: "yaminiliveid@live.com",
        PHONE: "+91-8897765322",
        LOCATION: "India",
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
        TEXT: "With 16+ years across ecommerce, healthcare, financial services, and mobility systems, I bring a rare T-shaped profile: deep expertise in QA architecture, test strategy, and Agile delivery, combined with broad capability across LLMs, prompt engineering, agentic workflows, multi-agent systems, and GenAI product development. I am a Certified AI Product Manager who has achieved 40–70% defect reduction, near-zero critical defect escape rates, and 93% manual / 89% automation coverage across live products. I translate complex technical AI concepts into clear product outcomes—and I build the tools to prove it.",
    },
    ABOUT: {
        TITLE: "About",
        ICON: "👤",
        TEXT: "Visionary AI Product Manager and QA leader with a rare T-shaped profile combining deep quality engineering expertise with broad GenAI and agentic AI capabilities. Specialized in shipping AI products from concept to production—including Issue Lens (Agentic AI for JIRA in production), QA Mill (VS Code extension in development), and multi-agent systems. Founded Achiever Thoughts to create an elite learning platform that bridges the gap between technical depth and accessible product thinking.",
    },
    EXPERIENCE: {
        TITLE: "Professional Experience",
        ICON: "💼",
        ITEMS: [
            {
                ROLE: "QA Manager / Agile Specialist / Automation Architect",
                COMPANY: "BOSCH Global Software Technologies | Movado Multi-Brand Ecommerce",
                PERIOD: "Mar 2021 – Present",
                HIGHLIGHTS: [
                    "Led end-to-end QA strategy for multi-brand ecommerce platform achieving 40–70% defect reduction per release",
                    "Maintained 93% manual and 89% automation coverage through rigorous test governance",
                    "Built and led QA team of 6 engineers managing hiring, onboarding, and mentoring",
                    "Acted as SAFe Product Owner grooming backlog and facilitating PI Planning and sprint ceremonies",
                    "Built Issue Lens—an Atlassian Rovo AI agent that reduced grooming effort by 50% and test-plan creation from hours to minutes",
                ],
            },
            {
                ROLE: ".NET Developer | Embedded Systems Engineer",
                COMPANY: "BOSCH | SAFT Batteries Energy Storage",
                PERIOD: "Feb 2019 – Feb 2021",
                HIGHLIGHTS: [
                    "Architected and developed Bootloader HMI for SAFT Batteries firmware update system",
                    "Implemented CAN and Modbus protocols for ECU and power supply communication",
                    "Developed .NET libraries for data serialization and safe firmware update mechanisms",
                    "Thoroughly tested and debugged embedded systems for reliability and performance",
                ],
            },
            {
                ROLE: "Automation Architect | Healthcare QA Lead",
                COMPANY: "BOSCH | Philips MRI Healthcare Imaging",
                PERIOD: "Aug 2015 – Feb 2019",
                HIGHLIGHTS: [
                    "Architected Coded UI test automation framework for Philips MRI from the ground up as project standard",
                    "Integrated automation into CI/CD pipeline for continuous healthcare-grade quality assurance",
                    "Drove SAFe Agile adoption coaching teams on PI Planning and Agile ceremonies",
                    "Clearly communicated automation status, risks, and quality progress to stakeholders each sprint",
                ],
            },
        ],
    },
    EXPERTISE: {
        TITLE: "Core Competencies",
        ICON: "🎯",
        CATEGORIES: [
            {
                NAME: "AI & Product",
                ICON: "🤖",
                SKILLS: ["LLMs", "Prompt Engineering", "Agentic AI", "Multi-Agent Systems", "GenAI Products", "AI Strategy", "Roadmapping", "Backlog Management"],
            },
            {
                NAME: "Testing & QA",
                ICON: "✅",
                SKILLS: ["Functional Testing", "Regression", "Performance", "API Testing", "Accessibility", "Security", "BDD", "TDD", "Mutation Testing", "Risk Analysis"],
            },
            {
                NAME: "Agile & Delivery",
                ICON: "📊",
                SKILLS: ["SAFe 6", "Scrum", "Kanban", "PI Planning", "Sprint Events", "Release Management", "Lean", "XP"],
            },
            {
                NAME: "Tools & Platforms",
                ICON: "🔧",
                SKILLS: ["ADO", "JIRA", "Confluence", "Jenkins", "Git", "Selenium", "Postman", "JMeter", "VS Code", "Figma"],
            },
            {
                NAME: "Programming",
                ICON: "💻",
                SKILLS: ["Python", "C#", "Java", "JavaScript", "PowerShell", "VBScript"],
            },
        ],
    },
    ACHIEVEMENTS: {
        TITLE: "Key Achievements",
        ICON: "🏆",
        ITEMS: [
            "Shipped Issue Lens (Agentic AI for JIRA) in production—automating backlog analysis and reducing grooming effort by 50%",
            "Built and launched QA Mill—a VS Code extension for automated test generation and mutation testing (in development)",
            "Achieved 40–70% defect reduction per release through shift-left testing, risk analysis, and early detection",
            "Maintained 93% manual and 89% automation coverage—above industry benchmarks—across live products",
            "Built and led QA team of 6 engineers from scratch managing hiring, onboarding, and performance management",
            "Independently built and shipped 5+ AI products spanning agentic AI, multi-agent systems, and GenAI workflows",
            "Designed and implemented Coded UI automation framework for Philips MRI establishing it as project standard",
            "Coached 10–20 professionals on SAFe practices and Agile transformation through structured workshops",
        ],
    },
    CERTIFICATIONS: {
        TITLE: "Professional Certifications",
        ICON: "🎓",
        ITEMS: [
            { NAME: "Certified AI Product Manager", DATE: "2025", STATUS: "✓ Current" },
            { NAME: "SAFe 6 Product Owner / Product Manager (POPM)", DATE: "Dec 2024", STATUS: "✓ Active" },
            { NAME: "ISTQB Advanced Level Test Manager", DATE: "2022", STATUS: "✓ Active" },
        ],
    },
    VISION: {
        TITLE: "Vision & Philosophy",
        ICON: "🌟",
        TEXT: "I believe in thoughtful engineering and responsible innovation. Quality is not just about finding bugs—it's about understanding systems, enabling teams, and creating lasting value. Every project is an opportunity to advance our understanding of what's possible when technology meets intentionality. My goal is to bridge the gap between technical depth and clear product thinking, enabling teams to ship AI products that are both sophisticated and understandable.",
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
