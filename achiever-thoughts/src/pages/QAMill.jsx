import { memo } from 'react';

const QAMill = memo(function QAMill() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '20px 0' }}>
            <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '75%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
                maxWidth: '1400px',
                margin: '0 auto',
                backgroundColor: '#ffffff'
            }}>
                <iframe
                    src="https://qamill.achieverthoughts.com/index-iframe.html"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                    frameBorder="0"
                    title="QA Mill - AI-Powered Testing Automation"
                />
            </div>
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
