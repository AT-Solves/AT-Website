import { memo } from "react";
import { UI_CLASSES, INVESTORS_PAGE } from "../config/constants";

const Investors = memo(function Investors() {
    return (
        <main>
            <section className={UI_CLASSES.HERO.SECTION}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className={UI_CLASSES.HERO.TITLE}>{INVESTORS_PAGE.HERO.TITLE}</h1>
                    <p className={UI_CLASSES.HERO.TEXT}>
                        {INVESTORS_PAGE.HERO.DESCRIPTION}
                    </p>
                </div>
            </section>
        </main>
    );
});

Investors.displayName = "Investors";

export default Investors;
