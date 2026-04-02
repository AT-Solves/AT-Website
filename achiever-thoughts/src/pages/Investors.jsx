import { memo } from "react";
import { UI_CLASSES } from "../config/constants";

const Investors = memo(function Investors() {
    return (
        <main>
            <section className={UI_CLASSES.HERO.SECTION}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className={UI_CLASSES.HERO.TITLE}>Investors</h1>
                    <p className={UI_CLASSES.HERO.TEXT}>
                        Information for investors and partners interested in our vision and projects.
                    </p>
                </div>
            </section>
        </main>
    );
});

Investors.displayName = "Investors";

export default Investors;
