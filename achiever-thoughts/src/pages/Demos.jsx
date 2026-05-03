import { memo } from "react";
import { UI_CLASSES, DEMOS_PAGE } from "../config/constants";

const Demos = memo(function Demos() {
    return (
        <main>
            <section className={UI_CLASSES.HERO.SECTION}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className={UI_CLASSES.HERO.TITLE}>{DEMOS_PAGE.HERO.TITLE}</h1>
                    <p className={UI_CLASSES.HERO.TEXT}>
                        {DEMOS_PAGE.HERO.DESCRIPTION}
                    </p>
                </div>
            </section>
        </main>
    );
});

Demos.displayName = "Demos";

export default Demos;
