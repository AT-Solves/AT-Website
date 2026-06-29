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
                    <iframe
                        src="https://qamill.achieverthoughts.com"
                        width="100%"
                        height="1000"
                        frameBorder="0"
                        style={{
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                            maxWidth: '1200px',
                            margin: '0 auto',
                            display: 'block'
                        }}
                        title="QA Mill - AI-Powered Testing Automation"
                    />
                </div>
            </section>
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
