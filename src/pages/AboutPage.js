import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <Wrapper className="">
      <PageHero title={"À propos"} />
      <div className="container">
        <div className="content page">
          <div className="image">
            <img src={aboutImg} alt="about img " />
          </div>
          <div className="story">
            <h2>
              MBdesign en Bref <span></span>
            </h2>
            <p>
              Chez MB Design, nous sommes passionnés par la création de meubles uniques
              qui reflètent l'individualité de nos clients. Forts d'une expertise solide
              dans la conception sur mesure, nous mettons en œuvre qualité et innovation
              dans chaque projet. Notre équipe qualifiée collabore étroitement avec nos
              clients pour concrétiser leurs visions, en créant des solutions inspirantes
              et durables. De la conception à la réalisation, nous maintenons des
              standards d'excellence élevés, garantissant la qualité et l'attention aux
              détails. Nous nous engageons envers la satisfaction client, la durabilité et
              l'éthique, en construisant des relations durables basées sur notre passion
              pour un design exceptionnel.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 45px 0;
  }
  .content > div {
    width: 100%;
  }
  @media (min-width: 992px) {
    .content {
      flex-direction: row;
    }
  }
  .image {
    overflow: hidden;
    border-radius: var(--radius);
    img {
      width: 100%;
      height: 500px;
      display: block;
      object-fit: cover;
    }
  }

  .story h2 {
    position: relative;
    width: fit-content;
    font-size: 32px;
  }
  @media (min-width: 992px) {
    .story h2 {
      font-size: 38px;
    }
  }
  .story h2 span {
    position: absolute;

    bottom: -11px;
    left: 0px;
    width: 50%;
    height: 3px;
    background: var(--clr-primary-5);
  }
  .story p {
    color: var(--clr-grey-5);
    margin-top: 7px;
    line-height: 32px;
    font-size: 14px;
    padding: 15px 0;
  }
  @media (min-width: 992px) {
    .story p {
      font-size: 16px;
    }
  }
`;

export default AboutPage;
