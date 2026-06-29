import { memo, useState, useEffect, useRef } from 'react';

const QAMill = memo(function QAMill() {
    const [iframeHeight, setIframeHeight] = useState(2000);
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleIframeMessage = (event) => {
            // Listen for postMessage from iframe with content height
            if (event.origin !== 'https://qamill.achieverthoughts.com') return;
            if (event.data.type === 'iframe-height') {
                setIframeHeight(event.data.height);
            }
        };

        window.addEventListener('message', handleIframeMessage);

        const updateHeight = () => {
            const width = window.innerWidth;
            let height = 2000;

            if (width < 768) {
                height = 3000;
            } else if (width < 1024) {
                height = 2400;
            } else {
                height = Math.max(2000, window.innerHeight - 184);
            }

            setIframeHeight(height);

            // Notify iframe about available height
            if (iframeRef.current?.contentWindow) {
                iframeRef.current.contentWindow.postMessage(
                    { type: 'available-height', height },
                    'https://qamill.achieverthoughts.com'
                );
            }
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('message', handleIframeMessage);
        };
    }, []);

    return (
        <main style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <iframe
                ref={iframeRef}
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
