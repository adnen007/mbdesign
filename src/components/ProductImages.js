import React, { useState } from "react";
import styled from "styled-components";
// what i did here i always make the images take as much as they can with and i gave them fixed
// height
// later depend on the screen i may change the height of the images or the with of their c
// container (or let the container always take as much as they can).
// also give them object-fit:cover to don't destroy the image.

// i just followed the design to make the same thing with may webpage but i'm still curious did
// the instructor did it in my way or he used another method.

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const onImageClick = (i) => {
    setMainImage(images[i]);
  };

  return (
    <Wrapper>
      <div className="image">
        <div className="main_image">
          <img src={mainImage.url} alt="" />
        </div>
        <div className="images">
          {images.map((item, i) => {
            return (
              <div
                key={i}
                className={`secondary_image ${
                  item.url === mainImage.url ? "active" : null
                }`}
                onClick={() => onImageClick(i)}
              >
                <img src={item.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .image .main_image {
    overflow: hidden;
    border-radius: var(--radius);
  }
  .image .main_image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;
    margin-top: 17px;
    align-items: center;
  }
  .secondary_image {
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius);
  }
  .secondary_image.active {
    border: 3px var(--clr-primary-5) solid;
    box-sizing: border-box;
  }
  .secondary_image img {
    width: 100%;
    height: 50px;
    object-fit: cover;
    display: block;
  }
  @media (min-width: 576px) {
    .image .main_image img {
      height: 400px;
    }
    .secondary_image img {
      height: 70px;
    }
  }
`;

export default ProductImages;
