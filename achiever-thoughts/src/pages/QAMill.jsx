import { memo, useState, useEffect } from 'react';

const QAMill = memo(function QAMill() {
    const [iframeHeight, setIframeHeight] = useState('calc(100vh - 280px)');

    useEffect(() => {
        const updateHeight = () => {
            const navbarHeight = 64;
            const footerHeight = 120;
            const padding = 0;
            const availableHeight = window.innerHeight - navbarHeight - footerHeight - padding;
            setIframeHeight(`${Math.max(600, availableHeight)}px`);
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
                    display: 'block',
                    transition: 'height 0.3s ease'
                }}
                title="QA Mill - AI-Powered Testing Automation"
            />
        </main>
    );
});

QAMill.displayName = 'QAMill';
export default QAMill;
