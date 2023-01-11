import styled from "styled-components";

export const SignWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #274472;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 70px;
    margin: 40px;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  p {
    color: white;
    font-size: 13px;

    span {
      color: black;
    }
  }

  a {
    color: white;
    text-decoration: none;

    li {
      display: flex;
      gap: 5px;
      list-style-type: none;

      svg {
        font-size: 25px;
        color: white;
      }
    }
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 50px;
  outline: none;
  border: 0.5px solid white;
  background-color: #b1d4e0;
  border-radius: 5px;
  text-indent: 5px;

  ::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 50px;
  background-color: blue;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
`;

export const HRline = styled.p`
  display: flex;
  gap: 25px;
  color: white;
  font-weight: 600;
  margin: 20px;

  hr {
    width: 130px;
    height: 0px;
  }
`;

export const Text = styled.p`
  color: white;
  span {
    font-weight: 500;
  }
`;
