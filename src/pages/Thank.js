import { Link } from "react-router-dom";
import styled from "styled-components";

const Thank = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2> Merci de votre choix !</h2>
        <p>
          Notre équipe dévouée examinera rapidement votre demande et vous contactera sous
          peu pour confirmer les détails. Si vous avez des questions ou avez besoin d'une
          assistance supplémentaire, n'hésitez pas à nous contacter. Nous sommes là pour
          vous aider à chaque étape !
        </p>
        <Link to="/">Retour à la page d'accueil</Link>
      </div>
    </Wrapper>
  );
};

export default Thank;

const Wrapper = styled.div`
  min-height: calc(100vh - 150px);
  .container {
    padding: 50px;
    display: flex;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;
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
