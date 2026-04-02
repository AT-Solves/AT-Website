import { memo } from "react";
import { UI_CLASSES } from "../config/constants";

const Demos = memo(function Demos() {
    return (
        <main>
            <section className={UI_CLASSES.HERO.SECTION}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className={UI_CLASSES.HERO.TITLE}>Demos</h1>
                    <p className={UI_CLASSES.HERO.TEXT}>
                        Explore interactive demonstrations of our projects and products.
                    </p>
                </div>
            </section>
        </main>
    );
});

Demos.displayName = "Demos";

export default Demos;
