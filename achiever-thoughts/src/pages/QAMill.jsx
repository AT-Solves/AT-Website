import { memo, useState, useEffect } from 'react';

const QAMill = memo(function QAMill() {
    const [iframeHeight, setIframeHeight] = useState(1200);

    useEffect(() => {
        const updateHeight = () => {
            const width = window.innerWidth;
            const navbarHeight = 64;
            const footerHeight = 120;

            // Calculate available height and set iframe to fill it
            const availableHeight = window.innerHeight - navbarHeight - footerHeight;
            let height = 1200;

            if (width < 768) {
                // Mobile: use available height
                height = Math.max(800, availableHeight);
            } else if (width < 1024) {
                // Tablet: balanced height
                height = Math.max(1000, availableHeight);
            } else {
                // Desktop: use available height or minimum 1200px
                height = Math.max(1200, availableHeight);
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
                style={{
                    border: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'block'
                }}
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
