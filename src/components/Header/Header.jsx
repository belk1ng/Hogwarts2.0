import { HeaderLogo } from "../Icons/HeaderLogo";
import { Link } from "react-router-dom";
import { BurgerMenu } from "./BurgerMenu";
import React from "react";
import "../../reset.css";
import "./header.scss";

export const Header = () => {
    return (
        <header className="page-header">
            <Link to="/" className="page-header__link">
                <HeaderLogo />
                <span>Hogwarts</span>
            </Link>
            <nav className="page-header__navbar">
                <Link to="/house/gryffindor" className="page-header__navlink">
                    Gryffindor
                </Link>
                <Link to="/house/slytherin" className="page-header__navlink">
                    Slytherin
                </Link>
                <Link to="/house/hufflepuff" className="page-header__navlink">
                    Hufflepuff
                </Link>
                <Link to="/house/ravenclaw" className="page-header__navlink">
                    Ravenclaw
                </Link>
            </nav>
            <BurgerMenu />
        </header>
    );
};
