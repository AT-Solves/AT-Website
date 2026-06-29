import { memo, useState, useEffect } from 'react';

const QAMill = memo(function QAMill() {
    const [iframeHeight, setIframeHeight] = useState(1200);

    useEffect(() => {
        const updateHeight = () => {
            const width = window.innerWidth;
            // Adjust height based on screen size for responsiveness
            const navbarHeight = 64;
            const footerHeight = 120;
            let height = 1200;

            if (width < 768) {
                // Mobile: adjust height
                height = Math.max(600, window.innerHeight - navbarHeight - footerHeight);
            } else if (width < 1024) {
                // Tablet: slight adjustment
                height = 1100;
            } else {
                // Desktop: full height
                height = Math.max(1200, window.innerHeight - navbarHeight - footerHeight);
            }

            setIframeHeight(height);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
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
                    overflow: 'hidden',
                    display: 'block'
                }}
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
