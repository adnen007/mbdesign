import { Link } from "react-router-dom";
import styled from "styled-components";

const Thank = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2> Thank you for choosing us!</h2>
        <p>
          Our dedicated team will promptly review your request and be in touch shortly to
          confirm the details. Should you have any questions or require further
          assistance, please feel free to reach out. We're here to assist you every step
          of the way!{" "}
        </p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Thank;

const Wrapper = styled.div`
  height: calc(100vh - 150px);
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 60%;
    p {
      text-align: center;
      line-height: 30px;
      font-size: 16.5px;
      letter-spacing: 0.8px;
    }
    a {
      font-size: 24px;
      font-weight: 600;
      color: var(--clr-primary-5);
    }
  }
`;
