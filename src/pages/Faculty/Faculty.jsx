import { useState, useEffect, useCallback } from "react";
import { Gryffindor } from "../Faculties/Gryffindor";
import { Hufflepuff } from "../Faculties/Hufflepuff";
import { Ravenclaw } from "../Faculties/Ravenclaw";
import { Slytherin } from "../Faculties/Slytherin";
import { useParams } from "react-router";
import { getCharacters } from "../../api";
import "../Faculties/faculty.scss";

export const Faculty = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState("");

    const { house } = useParams();

    useEffect(() => {
        getCharacters(`/${house}/`, setCharacters, setError);
    }, [house]);

    const correctFacultyRender = useCallback(() => {
        switch (house) {
            case "gryffindor":
                return <Gryffindor characters={characters} error={error} />;
            case "slytherin":
                return <Slytherin characters={characters} error={error} />;
            case "hufflepuff":
                return <Hufflepuff characters={characters} error={error} />;
            case "ravenclaw":
                return <Ravenclaw characters={characters} error={error} />;
        }
    }, [house, characters, error]);

    return <div className="faculty-wrapper">{correctFacultyRender()}</div>;
};
