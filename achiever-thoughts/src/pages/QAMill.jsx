import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)' }}>
            <iframe
                src="https://qamill.achieverthoughts.com/index-iframe.html"
                width="100%"
                height="1200"
                frameBorder="0"
                style={{
                    border: 'none',
                    margin: 0,
                    padding: 0,
                    flex: 1,
                    display: 'block'
                }}
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
