import { memo, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/ATIcon-White.png";
import { Link } from "react-router-dom";
import { UI_CLASSES, NAVBAR_ARIA, NAVIGATION } from "../config/constants";

const Navbar = memo(function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className={UI_CLASSES.LAYOUT.NAVBAR}>
            <div className={`${UI_CLASSES.LAYOUT.NAVBAR_INNER} ${UI_CLASSES.LAYOUT.CONTAINER}`}>
                <Link to="/" className={UI_CLASSES.LAYOUT.BRAND}>
                    <img
                        src={logo}
                        alt="Achiever Thoughts logo"
                        className={UI_CLASSES.LAYOUT.BRAND_LOGO}
                    />
                </Link>

                <button
                    className={UI_CLASSES.LAYOUT.NAV_TOGGLE}
                    aria-label={NAVBAR_ARIA.TOGGLE_LABEL}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    Menu
                </button>

                <nav
                    className={`${UI_CLASSES.LAYOUT.NAV} ${open ? UI_CLASSES.LAYOUT.NAV_OPEN : ""}`}
                    aria-label={NAVBAR_ARIA.NAV_LABEL}
                >
                    {NAVIGATION.ITEMS.map((item) => (
                        <Link key={item.path} to={item.path}>
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
});

Navbar.displayName = "Navbar";

export default Navbar;
