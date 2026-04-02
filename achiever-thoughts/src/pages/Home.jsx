import "../styles/variables.css";
import "../styles/base.css";
import "../styles/layout.css";
import "../styles/home.css";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
                       
            {/* HERO */}
            <section className="hero" aria-labelledby="home-title">
                <div className="hero-inner container">
                    <h1 id="home-title" className="hero-title">
                        Achiever Thoughts
                    </h1>

                    <div className="hero-divider"></div>

                    <p className="hero-text">
                        A calm and thoughtful space to explore ideas, systems,
                        and technology built with long term intent and responsibility.
                    </p>

                    <nav className="hero-actions" aria-label="Primary actions">
                        <Link to="/products" className="button-primary">
                            View Products
                        </Link>
                        <Link to="/demos" className="button-secondary">
                            Explore Demos
                        </Link>
                    </nav>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <main>
                <section className="section section-alt">
                    <div className="container">
                        <h2 className="section-title">
                            What This Platform Represents
                        </h2>
                        <div className="section-divider"></div>

                        <div className="grid-3">
                            <article className="card">
                                <img
                                    src={`${import.meta.env.BASE_URL}TEIcon.png`}
                                    alt=""
                                    className="card-icon"
                                    aria-hidden="true"
                                />
                                <h3>Thoughtful Engineering</h3>
                                <p>
                                    Systems designed with clarity, discipline,
                                    and long term maintainability.
                                </p>
                            </article>

                            <article className="card">
                                <img
                                    src={`${import.meta.env.BASE_URL}SEIcon.png`}
                                    alt=""
                                    className="card-icon"
                                    aria-hidden="true"
                                />
                                <h3>Structured Exploration</h3>
                                <p>
                                    Ideas examined through careful analysis,
                                    prototypes, and demonstrations.
                                </p>
                            </article>

                            <article className="card">
                                <img
                                    src={`${import.meta.env.BASE_URL}RPIcon.png`}
                                    alt=""
                                    className="card-icon"
                                    aria-hidden="true"
                                />
                                <h3>Responsible Progress</h3>
                                <p>
                                    Technology choices guided by impact,
                                    safety, and sustainability.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            
        </>
    );
}
