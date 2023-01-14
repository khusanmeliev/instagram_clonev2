import React from "react";
import {
  Button,
  HRline,
  Input,
  InputsWrapper,
  Logo,
  SignWrapper,
  Text,
} from "./styles";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

const Sign = () => {
  return (
    <SignWrapper>
      <Logo>
        <FaInstagram />
      </Logo>
      <InputsWrapper>
        <Input placeholder="Username, email or mobile number" />
        <Input placeholder="Password" />
        <Button>Login</Button>
        <p>Forgot your login details? Get help signing in.</p>

        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <li>
            <AiOutlineFacebook />
            Log in with Facebook
          </li>
        </a>
      </InputsWrapper>

      <HRline>
        <hr /> OR <hr />
      </HRline>

      <Text>
        Don't have an account? <span>Sign Up</span>
      </Text>
    </SignWrapper>
  );
};

export default Sign;
