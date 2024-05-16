import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
const Sort = () => {
  const {
    grid_view: grid,
    setGridView,
    setListView,
    updateSort,
    filtered_products: products,
    sort,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="icons">
        <div onClick={setGridView} className={`grid ${grid ? "active" : ""}`}>
          <BsFillGridFill />
        </div>
        <div onClick={setListView} className={`list ${grid ? "" : "active"}`}>
          <BsList />
        </div>
      </div>
      <p>{products.length} Produits Trouvés</p>
      <hr />
      <div className="sort_by">
        <label htmlFor="sort_by">Classer Par </label>
        <select
          value={sort}
          onChange={(e) => updateSort(e.currentTarget.value)}
          id="sort_by"
        >
          <option value="lowest"> {"Prix (le plus bas)"} </option>
          <option value="highest">{"Prix (le plus élevé)"}</option>
          <option value="a-z">{"Nom (A - Z)"}</option>
          <option value="z-a">{"Nom (Z - A)"}</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 15px;
  .icons {
    display: flex;
    gap: 10px;
  }
  .icons .grid,
  .icons .list {
    border: 1px solid var(--clr-black);
    border-radius: var(--radius);
    padding: 3px;
    color: var(--clr-black);
  }
  .icons .grid.active,
  .icons .list.active {
    color: var(--clr-white);
    background-color: var(--clr-black);
  }

  .icons svg {
    display: block;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    color: var(--clr-grey-3);
  }
  hr {
    border-top: 1px solid var(--clr-grey-8);
    flex-grow: 1;
  }
  .sort_by {
  }
  .sort_by label {
    text-transform: capitalize;
    margin-right: 10px;
  }
  .sort_by select {
    padding: 4px 8px;
    border-color: transparent;
    font-size: 17px;
    color: var(--clr-black);
  }
  @media (width >= 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default Sort;
