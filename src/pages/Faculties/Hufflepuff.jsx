import { CharacterList } from "../../components/CharactersList/CharacterList";
import "./faculty.scss";

export const Hufflepuff = ({ characters, error }) => {
    return (
        <main className="faculty--content">
            <div className="faculty--content__preview">
                <div className="faculty--logo hufflepuff--content__logo"></div>
                <div className="faculty--content__short-desc">
                    <h1 className="faculty--content__name">Hufflepuff</h1>
                    <p className="faculty--content__phrase">
                        "You might belong in Hufflepuff, Where they are just and
                        loyal, Those patient Hufflepuffs are true, And unafraid
                        of toil." —<span> "Sorting Hat"</span>
                    </p>
                </div>
            </div>
            <div className="faculty--content__about-wrapper">
                <p className="faculty--content__about">
                    Hufflepuff was one of the four Houses of Hogwarts School of
                    Witchcraft and Wizardry. Its founder was the medieval witch
                    Helga Hufflepuff. Hufflepuff was the most inclusive among
                    the four houses, valuing hard work, dedication, patience,
                    loyalty, and fair play rather than a particular aptitude in
                    its members.
                </p>
                <p className="faculty--content__about">
                    The emblematic animal was a badger, and yellow and black
                    were its house colours. The Head of Hufflepuff was Pomona
                    Sprout, and the Fat Friar was the House's patron ghost.
                </p>
                <p className="faculty--content__about">
                    Hufflepuff corresponded roughly to the element of earth, and
                    it was for that reason that the House colours were chosen:
                    yellow represented wheat, while black was emblematic of
                    soil. The Hufflepuff point hourglass contained yellow
                    diamonds. Students sorted into Hufflepuff often demonstrated
                    exceptional abilities in Herbology, owing to their
                    correspondence to earth.
                </p>

                <div className="faculty--content__characters-container">
                    <h2 className="charaters-list__title">
                        Hufflepuff characters:
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
