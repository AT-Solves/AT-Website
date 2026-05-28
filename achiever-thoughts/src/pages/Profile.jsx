import { memo } from "react";
import { PROFILE_PAGE, UI_CLASSES } from "../config/constants";
import "../styles/profile.css";

const Profile = memo(function Profile() {
    return (
        <main className="profile-page">
            {/* Hero Section */}
            <section className="profile-hero">
                <div className={`profile-hero-inner ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                    <h1 className="profile-name">{PROFILE_PAGE.HERO.TITLE}</h1>
                    <h2 className="profile-subtitle">{PROFILE_PAGE.HERO.SUBTITLE}</h2>
                    <p className="profile-tagline">{PROFILE_PAGE.HERO.DESCRIPTION}</p>

                    {/* Contact Links */}
                    <div className="profile-contact">
                        <a href={`mailto:${PROFILE_PAGE.CONTACT.EMAIL}`} className="contact-link">
                            {PROFILE_PAGE.CONTACT.EMAIL_ICON} {PROFILE_PAGE.CONTACT.EMAIL}
                        </a>
                        <a href={PROFILE_PAGE.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer" className="contact-link">
                            {PROFILE_PAGE.CONTACT.GITHUB_ICON} GitHub
                        </a>
                        <span className="contact-link">
                            {PROFILE_PAGE.CONTACT.LOCATION_ICON} {PROFILE_PAGE.CONTACT.LOCATION}
                        </span>
                    </div>
                </div>
            </section>

            {/* Executive Summary */}
            <section className="profile-section profile-section-alt">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.EXECUTIVE_SUMMARY.ICON} {PROFILE_PAGE.EXECUTIVE_SUMMARY.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className="profile-text">{PROFILE_PAGE.EXECUTIVE_SUMMARY.TEXT}</p>
                </div>
            </section>

            {/* About */}
            <section className="profile-section">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.ABOUT.ICON} {PROFILE_PAGE.ABOUT.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className="profile-text">{PROFILE_PAGE.ABOUT.TEXT}</p>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="profile-section profile-section-alt">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.EXPERIENCE.ICON} {PROFILE_PAGE.EXPERIENCE.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <div className="experience-list">
                        {PROFILE_PAGE.EXPERIENCE.ITEMS.map((exp, i) => (
                            <div key={i} className="experience-card">
                                <h3 className="exp-role">{exp.ROLE}</h3>
                                <p className="exp-company">{exp.COMPANY}</p>
                                <p className="exp-period">{exp.PERIOD}</p>
                                <ul className="exp-highlights">
                                    {exp.HIGHLIGHTS.map((h, j) => (
                                        <li key={j}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Competencies */}
            <section className="profile-section">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.EXPERTISE.ICON} {PROFILE_PAGE.EXPERTISE.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <div className="expertise-grid">
                        {PROFILE_PAGE.EXPERTISE.CATEGORIES.map((cat, i) => (
                            <div key={i} className="expertise-card">
                                <h3 className="expertise-name">{cat.ICON} {cat.NAME}</h3>
                                <ul className="skills-list">
                                    {cat.SKILLS.map((skill, j) => (
                                        <li key={j}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Achievements */}
            <section className="profile-section profile-section-alt">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.ACHIEVEMENTS.ICON} {PROFILE_PAGE.ACHIEVEMENTS.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <ul className="achievements-list">
                        {PROFILE_PAGE.ACHIEVEMENTS.ITEMS.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Certifications */}
            <section className="profile-section">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.CERTIFICATIONS.ICON} {PROFILE_PAGE.CERTIFICATIONS.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <div className="certifications-list">
                        {PROFILE_PAGE.CERTIFICATIONS.ITEMS.map((cert, i) => (
                            <div key={i} className="cert-item">
                                <h4>{cert.NAME}</h4>
                                <p className="cert-date">{cert.DATE}</p>
                                <p className="cert-status">{cert.STATUS}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Philosophy */}
            <section className="profile-section profile-section-alt">
                <div className={UI_CLASSES.LAYOUT.CONTAINER}>
                    <h2 className="profile-section-title">
                        {PROFILE_PAGE.VISION.ICON} {PROFILE_PAGE.VISION.TITLE}
                    </h2>
                    <div className={UI_CLASSES.HERO.DIVIDER}></div>
                    <p className="profile-text profile-vision">{PROFILE_PAGE.VISION.TEXT}</p>
                </div>
            </section>
        </main>
    );
});

Profile.displayName = "Profile";

export default Profile;
