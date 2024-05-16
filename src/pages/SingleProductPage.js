import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { products_url as url } from "../utils/constants";
// import { formatPrice } from "../utils/helpers";
import { Loading, Error, ProductImages, AddToCart, Stars, PageHero } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  // everything from : (:included) till the end will be igonred when we compare with current
  // path and instead it will be saved in the usePramas hook.(the things that will be saved
  // not :id.. those are place holder)

  const { id } = useParams();

  const { fetchProducts, products_loading, products_error, products } =
    useProductsContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!products.length) {
      console.log(url, "URL");
      fetchProducts(url);
    }
  }, []);

  useEffect(() => {
    if (products_error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [products_error, navigate]);

  if (products_loading) {
    return <Loading />;
  }
  if (products_error) {
    return <Error />;
  }
  const singleProduct = products.find((el) => {
    return el.id === id;
  });

  return (
    <Wrapper>
      <PageHero title="Products" product={singleProduct.name} />

      <div className="container">
        <Link className="btn" to="/products">
          Retour aux Produits
        </Link>
        <div className="content">
          <div className="image_section">
            <ProductImages images={singleProduct.images} />
          </div>
          <div className="info_section">
            <h2 className="name">{singleProduct.name}</h2>

            <div className="price">{Math.round(singleProduct.price / 100)}dt </div>
            <div className="description"> {singleProduct.description} </div>
            <div className="state">
              <p>
                <span>Available:</span>
                {singleProduct.stock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
              <p>
                <span>SKU:</span> {singleProduct.id}
              </p>
            </div>
            <hr />
            {singleProduct.stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > .container {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .content {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .content > div {
    flex: 1;
  }

  .info_section {
  }

  .name {
    text-transform: capitalize;
    color: var(--clr-grey-1);
    font-size: 32px;
  }

  .price {
    color: var(--clr-primary-5);
    font-weight: bold;
    margin-top: 20px;
  }
  .rate {
    margin-top: 10px;
  }
  .description {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-3);
    font-size: 14px;
    margin-top: 10px;
  }
  .state {
  }
  .state > p {
    color: var(--clr-grey-3);
    display: flex;
    gap: 100px;
    font-size: 14px;
    margin-top: 15px;
  }
  .state > p > span {
    font-weight: bold;
    width: 50px;
  }
  hr {
    margin-top: 26px;
  }

  @media (min-width: 992px) {
    .content {
      flex-direction: row;
    }
    .name {
      font-size: 42px;
    }
  }
`;

export default SingleProductPage;
