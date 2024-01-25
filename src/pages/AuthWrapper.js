import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

// why we are using the AuthWrapper:
// when you type something in the url and press enter it is like you refresh the page so everything
// will get render as first render.
// and when we refresh the page all the value in the states will come back to their default values that mean the
// state that saving the user and the token will come back to be undefined.
// there the Auth0Provider will check its local storage if there is a token it will send that
// token to the server of Auth0Provider and check if it still available.
// durring this process of course we don't want to delay our app so the Auth0Provider will put
// the value as user and isAuthenticated to their default and put the isLoading to true.
// when the server response the Auth0Provider will update its value if the response was positive.

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <h1>Loading</h1>
      </Wrapper>
    );
  }
  if (error) {
    return (
      <Wrapper>
        <h1>{error.message}</h1>
      </Wrapper>
    );
  }
  return children;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
