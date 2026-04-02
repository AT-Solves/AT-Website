import { memo } from "react";
import products from "../data/products.json";
import "../styles/products.css";
import { PRODUCTS_PAGE, UI_CLASSES, PRODUCT_LABELS } from "../config/constants";

const Products = memo(function Products() {
    return (
        <main>
            <section className={UI_CLASSES.HERO.SECTION}>
                <div className={`${UI_CLASSES.HERO.INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className={UI_CLASSES.HERO.TITLE}>
                        {PRODUCTS_PAGE.HERO.TITLE}
                    </h1>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className={UI_CLASSES.HERO.TEXT}>
                        {PRODUCTS_PAGE.HERO.DESCRIPTION}
                    </p>
                </div>
            </section>

            <section className={`${UI_CLASSES.SECTIONS.SECTION} ${UI_CLASSES.SECTIONS.SECTION_ALT}`}>
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className={UI_CLASSES.SECTIONS.TITLE}>
                        {PRODUCTS_PAGE.SECTION_TITLE}
                    </h2>
                    <div className={UI_CLASSES.SECTIONS.DIVIDER}></div>

                    <div className={UI_CLASSES.GRID.GRID_3}>
                        {products.map((product) => (
                            <article key={product.id} className={`${UI_CLASSES.CARDS.CARD} ${UI_CLASSES.PRODUCTS.PRODUCT_CARD}`}>
                                <h3>{product.name}</h3>

                                <p className={UI_CLASSES.PRODUCTS.PRODUCT_META}>
                                    {PRODUCT_LABELS.CATEGORY_LABEL} {product.category}
                                </p>

                                <p>{product.description}</p>

                                <p className={UI_CLASSES.PRODUCTS.PRODUCT_STATUS}>
                                    {PRODUCT_LABELS.STATUS_LABEL} {product.status}
                                </p>

                                <div className={UI_CLASSES.PRODUCTS.PRODUCT_ACTIONS}>
                                    <a
                                        href={product.url}
                                        className={UI_CLASSES.BUTTONS.PRIMARY}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {PRODUCTS_PAGE.BUTTON_LABELS.LAUNCH}
                                    </a>
                                    <a
                                        href={product.github}
                                        className={UI_CLASSES.BUTTONS.SECONDARY}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {PRODUCTS_PAGE.BUTTON_LABELS.GITHUB}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
});

Products.displayName = "Products";

export default Products;
