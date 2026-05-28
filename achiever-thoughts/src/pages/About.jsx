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
        </main>
    );
});

About.displayName = "About";

export default About;
