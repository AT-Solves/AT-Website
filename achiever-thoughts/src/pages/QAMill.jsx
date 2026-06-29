import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <iframe
                src="https://qamill.achieverthoughts.com/index-iframe.html"
                width="100%"
                height="1200"
                frameBorder="0"
                style={{
                    border: 'none',
                    margin: 0,
                    padding: 0
                }}
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
