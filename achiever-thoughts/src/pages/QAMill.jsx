import { memo, useState, useEffect } from 'react';

const QAMill = memo(function QAMill() {
    const [iframeHeight, setIframeHeight] = useState(1200);

    useEffect(() => {
        const updateHeight = () => {
            const width = window.innerWidth;
            let height = 1600;

            if (width < 768) {
                // Mobile: tall enough to fit all content
                height = 2400;
            } else if (width < 1024) {
                // Tablet: balanced height
                height = 2000;
            } else {
                // Desktop: standard height
                height = 1600;
            }

            setIframeHeight(height);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <iframe
                src="https://qamill.achieverthoughts.com/index-iframe.html"
                width="100%"
                height={iframeHeight}
                frameBorder="0"
                scrolling="no"
                style={{
                    border: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    overflow: 'hidden'
                }}
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
