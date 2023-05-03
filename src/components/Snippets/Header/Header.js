/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { GrMenu } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState();

    function switchMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.innerWidth > 767 ? setIsDesktop(true) : setIsDesktop(false);
        }
    }, []);

    if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
            window.innerWidth > 767 ? setIsDesktop(true) : setIsDesktop(false);
        });
    }

    return (
        <header className="header_area">
            <div className="nav_bar">
                {!isDesktop && (
                    <div className="mobile_menu">
                        <div className="logo">
                            <h1 className="font-bold text-2xl">LOGO</h1>
                        </div>
                        <div className="menu_switch">
                            <span onClick={switchMenu}>{showMenu ? <CgClose /> : <GrMenu />}</span>
                        </div>
                    </div>
                )}

                <div className="header_section">
                    <div className={`nav_container ${showMenu ? "menu_active" : null}`}>
                        <div className="logo">
                            <h1 className="font-bold text-2xl">LOGO</h1>
                        </div>
                        <ul className="menu_items">
                            <li>
                                <Link to="/" onClick={switchMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "active-class" : "no-active-class"
                                    }
                                    onClick={switchMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <Link>Others</Link>

                                <ul className="sub_menu">
                                    <li>
                                        <NavLink
                                            to="/support"
                                            className={({ isActive }) =>
                                                isActive ? "active-class" : "no-active-class"
                                            }
                                            onClick={switchMenu}
                                        >
                                            Support
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/faq"
                                            className={({ isActive }) =>
                                                isActive ? "active-class" : "no-active-class"
                                            }
                                            onClick={switchMenu}
                                        >
                                            FAQ
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? "active-class" : "no-active-class"
                                    }
                                    onClick={switchMenu}
                                >
                                    Form
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? "active-class" : "no-active-class"
                                    }
                                    onClick={switchMenu}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
