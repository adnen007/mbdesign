import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  let starsArr = [<BsStar />, <BsStar />, <BsStar />, <BsStar />, <BsStar />];

  starsArr = starsArr.map((item, i) => {
    const index = i + 1;

    if (stars >= index) {
      return (
        <span key={i}>
          <BsStarFill />
        </span>
      );
    } else if (Math.round(stars) === index) {
      return (
        <span key={i}>
          <BsStarHalf />
        </span>
      );
    } else {
      return <span key={i}>{item}</span>;
    }
  });

  return (
    <Wrapper>
      {starsArr} <p>{`(${reviews} customer reviews)`}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
    color: var(--clr-grey-3);
    font-size: 14px;
  }
`;
export default Stars;
