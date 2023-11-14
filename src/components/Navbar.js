import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { links } from '../utils/constants'
import CartButtons from "./CartButtons";
//import { useProductsContext } from '../context/products_context'
//import { useUserContext } from '../context/user_context'

const Nav = () => {
  return (
    <NavBarWrapper>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <FaBars />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <CartButtons />
      </div>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  .container {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
  }
  .logo img {
    max-width: 180px;
  }
  .menu {
    cursor: pointer;
  }
  @media (width>=992px) {
    .menu {
      display: none;
    }
  }
  .menu svg {
    font-size: 28px;
    color: var(--clr-primary-5);
  }
  ul {
    list-style: none;
    display: none;
    gap: 30px;
    font-size: 20px;
    letter-spacing: 1px;
  }

  ul li a {
    text-decoration: none;
    color: var(--clr-grey-1);
  }
  @media (width >= 992px) {
    ul {
      display: flex;
    }
  }
`;

/*
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`
*/
export default Nav;
