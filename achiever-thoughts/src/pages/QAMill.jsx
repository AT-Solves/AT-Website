import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main style={{
            display: 'block',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            minHeight: '100vh',
            margin: 0,
            padding: 0
        }}>
            <iframe
                src="https://qamill.achieverthoughts.com/index-iframe.html"
                style={{
                    width: '100vw',
                    height: '900px',
                    border: 'none',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    marginLeft: 'calc(-50vw + 50%)'
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
