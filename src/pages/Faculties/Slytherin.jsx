import { CharacterList } from "../../components/CharactersList/CharacterList";
import "./faculty.scss";

export const Slytherin = ({ characters, error }) => {
    return (
        <main className="faculty--content">
            <div className="faculty--content__preview">
                <div className="faculty--logo slytherin--content__logo"></div>
                <div className="faculty--content__short-desc">
                    <h1 className="faculty--content__name">Slytherin</h1>
                    <p className="faculty--content__phrase">
                        "Or perhaps in Slytherin, You'll make your real friends,
                        Those cunning folk use any means, To achieve their
                        ends." —<span> "Sorting Hat"</span>
                    </p>
                </div>
            </div>
            <div className="faculty--content__about-wrapper">
                <p className="faculty--content__about">
                    Slytherin was one of the four Houses at Hogwarts School of
                    Witchcraft and Wizardry, founded by Salazar Slytherin. In
                    establishing the house, Salazar instructed the Sorting Hat
                    to pick students who had a few particular characteristics he
                    most valued. Those characteristics included cunning,
                    resourcefulness, leadership, and ambition.
                </p>
                <p className="faculty--content__about">
                    Many Slytherin students tended to clique together (often
                    acquiring leaders) which further exemplified Slytherin's
                    ambitious qualities. Examples of these included Draco
                    Malfoy's gang, Merula Snyde's gang, Pansy Parkinson's gang
                    and the Death Eaters.
                </p>
                <p className="faculty--content__about">
                    The founder highly valued and favoured pure-blood students
                    and the Sorting Hat admitted that it could be a factor when
                    being sorted. Students of any blood status could be placed
                    in the house. However, a Muggle-born student from that house
                    was considered to be quite rare.
                </p>
                <p className="faculty--content__about">
                    The emblematic animal of the house was a snake and the
                    house's colours were green and silver. There were two
                    notable heads of the house; Horace Slughorn took the role
                    twice (first leaving in 1981 and then taking the role again
                    from 1997 until leaving before 2016), and Severus Snape. The
                    patron ghost of the house was the Bloody Baron.
                </p>
                <p className="faculty--content__about">
                    Slytherin corresponded roughly with the element of water due
                    to serpents being commonly associated with the sea and lochs
                    in western European mythology, as well as serpents being
                    physically fluid and flexible animals. Similarly, in Celtic
                    mythology, water is seen as a portal to another world,
                    leading some to speculate that the element was chosen to
                    symbolise many Slytherins' hope for a pure-blood only
                    community.
                </p>
                <p className="faculty--content__about">
                    The colours also corresponded with waters around lakes and
                    lochs often being green, and silver being often associated
                    with grey rainwater.
                </p>

                <div className="faculty--content__characters-container">
                    <h2 className="charaters-list__title">
                        Slytherin characters:
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
