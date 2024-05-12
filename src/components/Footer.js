import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact">
        <div className="tel">
          <div className="icon">
            <BsTelephoneFill />
          </div>
          <span> +2135463121</span>
        </div>
        <div className="location">
          <div className="icon">
            <FaLocationDot />
          </div>
          <span> Dar fathal soukra</span>
        </div>
      </div>
      {/* <div className="rights">
        <h5>
          &#169; 2023 <span> ComfySloth </span>
        </h5>
        <h5>All rights reserved</h5>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--clr-black);
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  .contact {
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    color: white;
  }
  .tel,
  .location {
    display: flex;
    span {
      color: white;
    }
  }
  .icon {
    color: var(--clr-primary-5);
    margin-right: 10px;
    svg {
      font-size: 20px;
    }
  }
  .rights {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row;
    /* border-top: 3px white solid; */
  }
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
`;

export default Footer;
