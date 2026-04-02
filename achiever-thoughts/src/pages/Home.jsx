import { memo } from "react";
import "../styles/variables.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import {
    HOME_PAGE,
    UI_CLASSES,
    HOME_ARIA,
} from "../config/constants";

const Home = memo(function Home() {
    return (
        <>
            {/* HERO */}
            <section className={UI_CLASSES.HERO.SECTION} aria-labelledby={HOME_ARIA.HOME_TITLE_ID}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 id={HOME_ARIA.HOME_TITLE_ID} className={UI_CLASSES.HERO.TITLE}>
                        {HOME_PAGE.HERO.TITLE}
                    </h1>

                    <div className={UI_CLASSES.HERO.DIVIDER}></div>

                    <p className={UI_CLASSES.HERO.TEXT}>
                        {HOME_PAGE.HERO.DESCRIPTION}
                    </p>

                    <nav className={UI_CLASSES.HERO.ACTIONS} aria-label={HOME_ARIA.SECTION_LABEL}>
                        <Link to={HOME_PAGE.ACTIONS.PRIMARY.path} className={UI_CLASSES.BUTTONS.PRIMARY}>
                            {HOME_PAGE.ACTIONS.PRIMARY.label}
                        </Link>
                        <Link to={HOME_PAGE.ACTIONS.SECONDARY.path} className={UI_CLASSES.BUTTONS.SECONDARY}>
                            {HOME_PAGE.ACTIONS.SECONDARY.label}
                        </Link>
                    </nav>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main>
                <section className={`${UI_CLASSES.SECTIONS.SECTION} ${UI_CLASSES.SECTIONS.SECTION_ALT}`}>
                    <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                        <h2 className={UI_CLASSES.SECTIONS.TITLE}>
                            {HOME_PAGE.SECTION_TITLE}
                        </h2>
                        <div className={UI_CLASSES.SECTIONS.DIVIDER}></div>

                        <div className={UI_CLASSES.GRID.GRID_3}>
                            {HOME_PAGE.CARDS.map((card) => (
                                <article key={card.id} className={UI_CLASSES.CARDS.CARD}>
                                    <img
                                        src={`${import.meta.env.BASE_URL}${card.icon}`}
                                        alt=""
                                        className={UI_CLASSES.CARDS.CARD_ICON}
                                        aria-hidden="true"
                                    />
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
});

Home.displayName = "Home";

export default Home;
