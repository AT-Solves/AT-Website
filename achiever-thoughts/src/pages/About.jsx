import { memo } from "react";
import { ABOUT_PAGE, UI_CLASSES } from "../config/constants";

const About = memo(function About() {
    return (
        <main>
            {/* Hero Section */}
            <section className={UI_CLASSES.HERO.SECTION}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className={UI_CLASSES.HERO.TITLE}>
                        {ABOUT_PAGE.HERO.TITLE}
                    </h1>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className={UI_CLASSES.HERO.TEXT}>
                        {ABOUT_PAGE.HERO.DESCRIPTION}
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className={`${UI_CLASSES.SECTIONS.SECTION} ${UI_CLASSES.SECTIONS.SECTION_ALT}`}>
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className={UI_CLASSES.SECTIONS.TITLE}>
                        {ABOUT_PAGE.MISSION.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className={UI_CLASSES.SECTIONS.TEXT}>
                        {ABOUT_PAGE.MISSION.DESCRIPTION}
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className={UI_CLASSES.SECTIONS.SECTION}>
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className={UI_CLASSES.SECTIONS.TITLE}>
                        {ABOUT_PAGE.VALUES.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <div className={UI_CLASSES.GRID.GRID_3}>
                        {ABOUT_PAGE.VALUES.ITEMS.map((value) => (
                            <div key={value.id} className={`${UI_CLASSES.CARDS.CARD}`}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approach Section */}
            <section className={`${UI_CLASSES.SECTIONS.SECTION} ${UI_CLASSES.SECTIONS.SECTION_ALT}`}>
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className={UI_CLASSES.SECTIONS.TITLE}>
                        {ABOUT_PAGE.APPROACH.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className={UI_CLASSES.SECTIONS.TEXT}>
                        {ABOUT_PAGE.APPROACH.DESCRIPTION}
                    </p>
                </div>
            </section>

            {/* Founder Section */}
            <section className={UI_CLASSES.SECTIONS.SECTION}>
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className={UI_CLASSES.SECTIONS.TITLE}>
                        {ABOUT_PAGE.FOUNDER.LABELS.SECTION_TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>

                    <div className={UI_CLASSES.CARDS.CARD}>
                        <h3>{ABOUT_PAGE.FOUNDER.NAME}</h3>
                        <p><strong>{ABOUT_PAGE.FOUNDER.TITLE}</strong></p>
                        <p>{ABOUT_PAGE.FOUNDER.BIO}</p>

                        <h4>{ABOUT_PAGE.FOUNDER.LABELS.CONTACT_TITLE}</h4>
                        <p>
                            <a href={`mailto:${ABOUT_PAGE.FOUNDER.CONTACT.EMAIL}`}>{ABOUT_PAGE.FOUNDER.CONTACT.EMAIL}</a>
                            {' '}•{' '}
                            <a href={ABOUT_PAGE.FOUNDER.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {' '}•{' '}
                            {ABOUT_PAGE.FOUNDER.CONTACT.LOCATION}
                        </p>

                        <h4>{ABOUT_PAGE.FOUNDER.LABELS.HIGHLIGHTS_TITLE}</h4>
                        <ul>
                            {ABOUT_PAGE.FOUNDER.HIGHLIGHTS.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>

                        <h4>{ABOUT_PAGE.FOUNDER.LABELS.CERTS_TITLE}</h4>
                        <ul>
                            {ABOUT_PAGE.FOUNDER.CERTIFICATIONS.map((c, i) => (
                                <li key={i}>{c.name} — {c.date}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
});

About.displayName = "About";

export default About;
