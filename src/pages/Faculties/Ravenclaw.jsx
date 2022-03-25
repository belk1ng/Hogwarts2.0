import { CharacterList } from "../../components/CharactersList/CharacterList";
import "./faculty.scss";

export const Ravenclaw = ({ characters, error }) => {
    return (
        <main className="faculty--content">
            <div className="faculty--content__preview">
                <div className="faculty--logo ravenclaw--content__logo"></div>
                <div className="faculty--content__short-desc">
                    <h1 className="faculty--content__name">Ravenclaw</h1>
                    <p className="faculty--content__phrase">
                        "Or yet in wise old Ravenclaw, If you've a ready mind,
                        Where those of wit and learning, Will always find their
                        kind." —<span> "Sorting Hat"</span>
                    </p>
                </div>
            </div>
            <div className="faculty--content__about-wrapper">
                <p className="faculty--content__about">
                    Ravenclaw was one of the four Houses of Hogwarts School of
                    Witchcraft and Wizardry. Its founder was the medieval witch
                    Rowena Ravenclaw. Members of this house were characterised
                    by their wit, learning, and wisdom. The emblematic animal
                    symbol was an eagle, and blue and bronze were its colours.
                    The Head of Ravenclaw was Filius Flitwick, and the House
                    ghost was the Grey Lady, real name Helena Ravenclaw,
                    daughter of Rowena.
                </p>
                <p className="faculty--content__about">
                    Ravenclaw corresponded roughly to the element of air, and it
                    was for that reason that the House colours were chosen; blue
                    and bronze represented the sky and eagle feathers
                    respectively, both having much to do with air. The Ravenclaw
                    points hourglass contained blue sapphires.
                </p>

                <div className="faculty--content__characters-container">
                    <h2 className="charaters-list__title">
                        Ravenclaw characters:
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
