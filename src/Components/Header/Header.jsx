import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const showMenu = () => {
        setToggleMenu(!toggleMenu);
    };

    const activeLink = "py-4 border-b";
    const normalLink = "py-4 border-0  hover:border-b hover:border-b-white/50";

    const MenuTitles = [
        { title: "Home", src: "/" },
        { title: "Projects", src: "/projects" },
        { title: "AboutMe", src: "/about" },
    ];

    return (
        <div className="flex py-4 justify-between items-center">
            <Link
                to="/"
                className="ml-6 md:ml-[55px] w-12 h-12 min-h-fit min-w-fit"
            >
                {/* <img src={Logo} alt="logo" /> */}
            </Link>
            <div className="lg:w-96 lg:h-px lg:bg-white/25 lg:-mr-32 lg:z-30"></div>
            <nav className="uppercase tracking-[0.16875em] transition-all duration-300 ease-linear">
                <div className="md:hidden cursor-pointer scale-150 mr-6">
                    <AiOutlineMenu onClick={showMenu} className="" />
                </div>

                <div className="hidden bg-white/10 backdrop-blur-3xl md:px-12 md:flex md:gap-12 lg:px-32 ">
                    {MenuTitles.map((menu, id) => (
                        <NavLink
                            key={id}
                            to={menu.src}
                            className={({ isActive }) =>
                                isActive ? activeLink : normalLink
                            }
                            exact
                            strict
                        >
                            <span className="font-bold hidden lg:inline lg:mr-3">

                            </span>
                            {menu.title}
                        </NavLink>
                    ))}
                </div>
                <Menu
                    showMenu={showMenu}
                    toggle={toggleMenu}
                    menuTitles={MenuTitles}
                />
            </nav>
        </div>

    );
};

export default Header;