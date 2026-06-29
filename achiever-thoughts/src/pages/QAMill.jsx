import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '40px' }}>
                <div className="container">
                    <iframe
                        src="https://qamill.achieverthoughts.com/website/index-iframe.html"
                        width="100%"
                        height="1600"
                        frameBorder="0"
                        style={{
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
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
