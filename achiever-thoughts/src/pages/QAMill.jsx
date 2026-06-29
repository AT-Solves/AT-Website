import { memo } from 'react';
import { QA_MILL_PAGE } from '../config/constants';

const QAMill = memo(function QAMill() {
    return (
        <main>
            <section className="hero">
                <div className="hero-inner">
                    <h1 className="hero-title">{QA_MILL_PAGE.HERO.TITLE}</h1>
                    <p className="hero-text">{QA_MILL_PAGE.HERO.DESCRIPTION}</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{QA_MILL_PAGE.MISSION.TITLE}</h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        {QA_MILL_PAGE.MISSION.DESCRIPTION}
                    </p>
                </div>
            </section>

            <section className="section section-alt">
                <div className="container">
                    <h2 className="section-title">{QA_MILL_PAGE.FEATURES.TITLE}</h2>
                    <div className="grid-3">
                        {QA_MILL_PAGE.FEATURES.ITEMS.map((feature, idx) => (
                            <div key={idx} className="card">
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginTop: 0 }}>
                                    {feature.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{QA_MILL_PAGE.IMPACT.TITLE}</h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        {QA_MILL_PAGE.IMPACT.DESCRIPTION}
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title">{QA_MILL_PAGE.STATUS.TITLE}</h2>
                    <div style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            backgroundColor: 'var(--accent-green)',
                            color: '#fff',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: '700',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}>
                            {QA_MILL_PAGE.STATUS.BADGE}
                        </span>
                        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '500px', margin: 0 }}>
                            {QA_MILL_PAGE.STATUS.DESCRIPTION}
                        </p>
                        <a
                            href={QA_MILL_PAGE.STATUS.GITHUB_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-primary"
                            style={{ marginTop: '12px' }}
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
