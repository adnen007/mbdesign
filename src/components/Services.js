import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="intro">
          <h2>Meubles Personnalisés Fabriqués</h2>
          <p>
            Pensés pour vous, nos meubles sur mesure incarnent l'alliance parfaite entre
            qualité et personnalisation. Avec une attention méticuleuse aux détails,
            chaque pièce est façonnée pour s'harmoniser avec votre style de vie unique.
          </p>
        </div>
        <div className="services">
          {services.map(({ icon, id, title, text }) => {
            return (
              <div className="box" key={id}>
                <div className="icon">{icon}</div>
                <div className="title">{title}</div>
                <div className="text">{text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-10);
  padding: 80px 0;
  .intro {
    display: flex;
    flex-direction: column;

    h2 {
      width: fit-content;
      text-align: left;
      text-transform: capitalize;
      letter-spacing: 0.8px;
      word-spacing: 2px;
      color: var(--clr-primary-1);
      width: 225px;
      line-height: 29px;
    }
    p {
      margin-top: 30px;
      color: var(--clr-primary-3);
      max-width: 580px;
      font-size: 14px;
      line-height: 26px;
    }
  }
  @media (min-width: 992px) {
    .intro {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      h2 {
        font-size: 32px;
        width: 300px;
        line-height: 32px;
      }
      p {
        font-size: 16px;
        max-width: 50%;
        margin-top: 0px;
      }
    }
  }
  .services {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 50px;
  }
  .services .box {
    background-color: var(--clr-primary-7);

    padding: 30px;
    border-radius: var(--radius);

    .icon {
      background-color: var(--clr-primary-10);
      width: fit-content;
      margin: auto;
      padding: 15px;
      border-radius: 50%;
      svg {
        display: block;
        font-size: 32px;
      }
    }
    .title {
      margin: auto;
      margin-top: 16px;
      width: fit-content;
      font-weight: 700;
      text-transform: capitalize;
      font-size: 20px;
      letter-spacing: 1px;
    }
    .text {
      margin-top: 16px;
      width: fit-content;
      font-size: 14px;
      text-align: center;
      color: var(--clr-primary-1);
      line-height: 26px;
    }
  }
  @media (min-width: 1200px) {
    & {
      padding: 0;
    }
    .services {
      transform: translateY(80px);
    }
  }
`;

export default Services;
