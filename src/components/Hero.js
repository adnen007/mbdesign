import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import { text } from "../utils/constants";

const Hero = () => {
  return (
    <Wrapper>
      <div className="container section_header">
        <article>
          <h3>Concevez votre zone de confort</h3>
          <p>
            {text.split(" ").map((e) => {
              return <span> {e}</span>;
            })}
          </p>
          <Link className="btn" to="/products">
            Explorer
          </Link>
        </article>
        <div className="images">
          <div className="image_1">
            <img src={heroBcg} alt="" />
          </div>
          <div className="image_2">
            <img src={heroBcg2} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 30px;
  }
  @media (min-width: 768px) {
    .container {
      padding-top: 0;
      padding-bottom: 0;
      justify-content: center;
    }
  }
  @media (min-width: 992px) {
    .container {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-left: 30px;
      padding-right: 30px;
    }
  }
  article {
    width: 100%;
  }
  article h3 {
    font-size: 42px;
    text-transform: capitalize;
  }
  article p {
    color: var(--clr-grey-5);
    margin-top: 15px;
    line-height: var(--line-height);
  }
  @media (max-width: 768px) {
    article h3 {
      font-size: 36px;
      text-transform: capitalize;
    }
    article p {
      color: var(--clr-grey-5);
      margin-top: 32px;
      line-height: var(--line-height);
      font-size: 16px;
    }
  }
  article p > span {
    opacity: 0;
    filter: blur(4px);
  }
  article p > span:nth-child(1) {
    animation: frog 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(2) {
    animation: frog 0.7s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(3) {
    animation: frog 0.7s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(4) {
    animation: frog 0.7s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(5) {
    animation: frog 0.7s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(6) {
    animation: frog 0.7s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(7) {
    animation: frog 0.7s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(8) {
    animation: frog 0.7s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(9) {
    animation: frog 0.7s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(10) {
    animation: frog 0.7s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(11) {
    animation: frog 0.7s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(12) {
    animation: frog 0.7s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(13) {
    animation: frog 0.7s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(14) {
    animation: frog 0.7s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(15) {
    animation: frog 0.7s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(16) {
    animation: frog 0.7s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(17) {
    animation: frog 0.7s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(18) {
    animation: frog 0.7s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(19) {
    animation: frog 0.7s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(20) {
    animation: frog 0.7s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(21) {
    animation: frog 0.7s 2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(22) {
    animation: frog 0.7s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(23) {
    animation: frog 0.7s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(24) {
    animation: frog 0.7s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(25) {
    animation: frog 0.7s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(26) {
    animation: frog 0.7s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(27) {
    animation: frog 0.7s 2.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(28) {
    animation: frog 0.7s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(29) {
    animation: frog 0.7s 2.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(30) {
    animation: frog 0.7s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(31) {
    animation: frog 0.7s 3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(32) {
    animation: frog 0.7s 3.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(33) {
    animation: frog 0.7s 3.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(34) {
    animation: frog 0.7s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(35) {
    animation: frog 0.7s 3.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(36) {
    animation: frog 0.7s 3.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(37) {
    animation: frog 0.7s 3.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(38) {
    animation: frog 0.7s 3.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(39) {
    animation: frog 0.7s 3.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(40) {
    animation: frog 0.7s 3.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(41) {
    animation: frog 0.7s 4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(42) {
    animation: frog 0.7s 4.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(43) {
    animation: frog 0.7s 4.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(44) {
    animation: frog 0.7s 4.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(45) {
    animation: frog 0.7s 4.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(46) {
    animation: frog 0.7s 4.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(47) {
    animation: frog 0.7s 4.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(48) {
    animation: frog 0.7s 4.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(49) {
    animation: frog 0.7s 4.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(50) {
    animation: frog 0.7s 4.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(51) {
    animation: frog 0.7s 5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(52) {
    animation: frog 0.7s 5.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(53) {
    animation: frog 0.7s 5.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(54) {
    animation: frog 0.7s 5.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(55) {
    animation: frog 0.7s 5.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  article p > span:nth-child(56) {
    animation: frog 0.7s 5.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  a {
    display: block;
    margin-top: 40px;
    width: fit-content;
    padding: 9px 13px;
    font-size: 15px;
  }
  .images {
    width: 100%;
    min-width: 500px;
    position: relative;
    height: fit-content;
    display: none;
    justify-content: flex-end;
  }

  @media (min-width: 992px) {
    .images {
      display: flex;
    }
  }
  .images::before {
    content: "";
    display: block;
    height: 80%;
    position: absolute;
    width: 420px;
    bottom: 0px;
    right: 0px;
    background-color: var(--clr-primary-9);
    border-radius: var(--radius);
  }
  .images .image_1 {
    background-color: #e3d6b3;
    width: 375px;
    height: 468.75px;
    border-radius: var(--radius);
    z-index: 0;
    overflow: hidden;
  }

  .images .image_2 {
    background-color: #bdad84;
    width: 240px;
    height: 160.25px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    transform: translateX(calc(-375px + (250px / 2)));
    border-radius: var(--radius);
    overflow: hidden;
  }
  .images .image_1 img,
  .images .image_2 img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes frog {
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
`;

export default Hero;
