import React from "react";
import StartActive from "assets/images/start-active.png";
import StartUnActive from "assets/images/start-unactive.png";
import { RatingWrap, StartImg } from "./Ratings.styled";

const MAX_RATES = 5;

const Ratings = ({ ratings }) => {
  const rates = Math.floor(ratings);

  return (
    <RatingWrap>
      {Array(rates)
        .fill(0)
        .map((_, i) => (
          <StartImg src={StartActive} alt="" key={i} />
        ))}
      {Array(MAX_RATES - rates)
        .fill(0)
        .map((_, i) => (
          <StartImg src={StartUnActive} alt="" key={i} />
        ))}
    </RatingWrap>
  );
};

export default Ratings;
