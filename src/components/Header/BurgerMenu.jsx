import React, { useState } from "react";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
    const [checked, setChecked] = useState(false);

    const clickHouseHandler = () => {
        setChecked(false);
        window.scrollTo(0, 0);
    }

    return (
        <div className="burger-menu">
            <input
                type="checkbox"
                id="burger-menu__toggler"
                onChange={() => setChecked((prev) => !prev)}
                checked={checked}
            />
            <label htmlFor="burger-menu__toggler">
                <span className="toggler__line"></span>
            </label>

            <nav className="header-mobile__menu">
                <Link
                    onClick={clickHouseHandler}
                    to="/house/gryffindor"
                    className="page-header__navlink"
                >
                    Gryffindor
                </Link>
                <Link
                    onClick={clickHouseHandler}
                    to="/house/slytherin"
                    className="page-header__navlink"
                >
                    Slytherin
                </Link>
                <Link
                    onClick={clickHouseHandler}
                    to="/house/hufflepuff"
                    className="page-header__navlink"
                >
                    Hufflepuff
                </Link>
                <Link
                    onClick={clickHouseHandler}
                    to="/house/ravenclaw"
                    className="page-header__navlink"
                >
                    Ravenclaw
                </Link>
            </nav>
        </div>
    );
};
