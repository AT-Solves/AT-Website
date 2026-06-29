import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
            <div style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                minHeight: '900px',
                overflow: 'visible'
            }}>
                <iframe
                    src="https://qamill.achieverthoughts.com/index-iframe.html"
                    style={{
                        position: 'relative',
                        top: 0,
                        left: 0,
                        width: '100%',
                        minHeight: '900px',
                        height: 'auto',
                        border: 'none',
                        display: 'block'
                    }}
                    frameBorder="0"
                    allowFullScreen
                    title="QA Mill - AI-Powered Testing Automation"
                />
            </div>
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
