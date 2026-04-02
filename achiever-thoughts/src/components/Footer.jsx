import { memo } from "react";
import { FOOTER } from "../config/constants";

const Footer = memo(function Footer() {
    return (
        <footer
            style={{
                textAlign: FOOTER.TEXT_ALIGN,
                padding: FOOTER.PADDING,
                background: FOOTER.BACKGROUND,
            }}
        >
            <p>{FOOTER.COPY_TEXT}</p>
        </footer>
    );
});

Footer.displayName = "Footer";

export default Footer;