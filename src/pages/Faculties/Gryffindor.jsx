import { CharacterList } from "../../components/CharactersList/CharacterList";
import "./faculty.scss";

export const Gryffindor = ({ characters, error }) => {
    return (
        <main className="faculty--content">
            <div className="faculty--content__preview">
                <div className="faculty--logo gryffindor--content__logo"></div>
                <div className="faculty--content__short-desc">
                    <h1 className="faculty--content__name">Gryffindor</h1>
                    <p className="faculty--content__phrase">
                        "You might belong in Gryffindor, Where dwell the brave
                        at heart, Their daring, nerve, and chivalry Set
                        Gryffindors apart" —<span> "Sorting Hat"</span>
                    </p>
                </div>
            </div>
            <div className="faculty--content__about-wrapper">
                <p className="faculty--content__about">
                    Gryffindor was one of the four Houses of Hogwarts School of
                    Witchcraft and Wizardry and was founded by Godric
                    Gryffindor. Gryffindor instructed the Sorting Hat to choose
                    students possessing characteristics he most valued, such as
                    courage, chivalry, nerve and determination, to be sorted
                    into his house.
                </p>
                <p className="faculty--content__about">
                    The emblematic animal was a lion, and its colours were
                    scarlet and gold. Sir Nicholas de Mimsy-Porpington, also
                    known as "Nearly Headless Nick", was the House ghost.
                </p>
                <p className="faculty--content__about">
                    Gryffindor corresponded roughly to the element of fire, and
                    it was for this reason that the colours scarlet and gold
                    were chosen to represent the house. The colour of fire
                    corresponded to that of a lion as well, with scarlet
                    representing the mane and tail and gold representing the
                    coat.
                </p>

                <div className="faculty--content__characters-container">
                    <h2 className="charaters-list__title">
                        Gryffindor characters:
                    </h2>
                    {characters ? (
                        <ul className="characters__list">
                            <CharacterList characters={characters} />
                        </ul>
                    ) : (
                        <h5>{error}</h5>
                    )}
                </div>
            </div>
        </main>
    );
};
