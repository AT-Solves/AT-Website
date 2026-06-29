import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh', margin: 0, padding: 0 }}>
            <iframe
                src="https://qamill.achieverthoughts.com/index-iframe.html"
                style={{
                    width: '100%',
                    height: '900px',
                    border: 'none',
                    display: 'block',
                    minHeight: '900px'
                }}
                frameBorder="0"
                scrolling="yes"
                allowFullScreen
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
