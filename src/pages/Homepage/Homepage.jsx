import React from "react";
import "./homepage.scss";

export const Homepage = () => {
  return (
    <main className="container">
      <div className="mainpage-content">
        <div className="mainpage-preview">
          <div className="mainpage-preview__logo"></div>
          <p className="mainpage-preview__desc">
            <span>Hogwarts School of Witchcraft and Wizardry</span>, often
            shortened to Hogwarts, was the British wizarding school, located in
            the Scottish Highlands. It accepted magical students from Great
            Britain and Ireland for enrolment. It was a state-owned school,
            funded by the Ministry of Magic. <br /> <br />
            The precise location of the school could never be uncovered because
            it was rendered Unplottable. To Muggles, the school appeared to be
            an old, abandoned castle. Similarly, most wizarding schools'
            locations were protected in order to prevent their ways of teaching
            being revealed, as well as protect the students and schools
            themselves from any harm.
          </p>
        </div>
      </div>
    </main>
  );
};
