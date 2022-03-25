import { CharacterDetail } from "../../pages/CharacterDetail/CharacterDetail";
import { Link } from "react-router-dom";
import React from "react";

export const CharacterList = ({ characters }) => {
    return characters.map((c, ndx) => {
        return (
            <li className="character" key={ndx}>
                <div className="character--wrapper">
                    <div className="character__about">
                        {c.image ? (
                            <img
                                src={c.image ? c.image : null}
                                className={"character__image"}
                                alt={c.name}
                            />
                        ) : (
                            <div
                                className={`character__image character__image--${c.house.toLowerCase()}`}
                            ></div>
                        )}
                        <div className="character__short-data">
                            <p className="character__short-fullname">
                                {c.name}
                            </p>
                            <p className="character__short-ancestry">
                                {c.ancestry ? c.ancestry : "Ancestry unknown"}
                            </p>
                            <p className="character__short-fullname-birthyear">
                                {c.yearOfBirth
                                    ? `Was born in ${c.yearOfBirth}`
                                    : "Birthday unknown"}
                            </p>
                            <p className="character__short-alive">
                                {c.alive ? "Alive" : "Dead"}
                            </p>
                        </div>
                    </div>
                    <Link
                        to={`/character/${c.house.toLowerCase()}/${ndx + 1}`}
                        className="character__short-readmore"
                        element={<CharacterDetail />}
                    >
                        Read more
                    </Link>
                </div>
            </li>
        );
    });
};
