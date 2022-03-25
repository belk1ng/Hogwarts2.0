import { Prelaoder } from "../../components/Preloader/Preloader";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCharacter } from "../../api";
import s from "./CharacterDetail.module.scss";
import React from "react";

export const CharacterDetail = () => {
    const { id, house } = useParams();

    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getCharacter(house, id, setCharacter, setIsLoading, setError);
    }, [house, id]);

    console.log(character);

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className={s["character-detail-container"]}>
            {isLoading ? (
                <Prelaoder />
            ) : character ? (
                <div className={s["character-data"]}>
                    {character.image ? (
                        <img
                            alt={character.name}
                            src={character.image}
                            className={s["character-image"]}
                        />
                    ) : (
                        <div
                            className={`${s["character_container_image"]} ${
                                s["character-image"]
                            } character__image--${character.house.toLowerCase()}`}
                        ></div>
                    )}
                    <div className={s["character-main-data"]}>
                        <h1 className={s["character-name"]}>
                            {character.name}{" "}
                            {character.alternate_names.length > 0 &&
                                `, also known as: ${character.alternate_names.join(
                                    ", "
                                )}`}
                        </h1>
                        <h2 className={s["character-wizard"]}>
                            {character.wizard ? "Wizard" : "No wizard"}
                        </h2>
                        <h2 className={s["character-actor"]}>
                            Actor: {character.actor}
                        </h2>
                        <h3 className={s["character-wand"]}>
                            About wand:{" "}
                            {character.wand.wood
                                ? capitalize(character.wand.wood)
                                : "Unknown wood"}{" "}
                            wand with{" "}
                            {character.wand.core
                                ? character.wand.core
                                : "unknown"}{" "}
                            core.
                        </h3>
                        <h3 className={s["character-ancestry"]}>
                            Ancestry: {character.ancestry}
                        </h3>
                        {character.patronus && (
                            <h3 className={s["character-patronus"]}>
                                Patronus: {character.patronus}
                            </h3>
                        )}
                        <p className={s["character-birthday"]}>
                            Birthday:{" "}
                            {character.dateOfBirth
                                ? character.dateOfBirth.replaceAll("-", ".")
                                : "unknown"}
                        </p>
                        <p className={s["character-alive"]}>
                            {character.alive ? "Alive" : "Dead"}
                        </p>
                        <p className={s["character-species-gender"]}>
                            {capitalize(character.species)},{" "}
                            {capitalize(character.gender)}
                        </p>
                    </div>
                </div>
            ) : (
                <h5>{error}</h5>
            )}
        </div>
    );
};
