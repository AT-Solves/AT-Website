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
                    {/* QA Mill iframe placeholder - add your iframe code here */}
                    <div style={{
                        background: '#ffffff',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        borderRadius: '8px',
                        padding: '32px',
                        minHeight: '600px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
                    }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
                            QA Mill application will be embedded here
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
