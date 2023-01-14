import React from "react";
import { FooterWrapper } from "./styles";
import {
  AiOutlinePlusCircle,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <FooterWrapper>
      <li>
        <BiHomeAlt />
      </li>
      <li>
        <AiOutlineSearch />
      </li>
      <li>
        <AiOutlinePlusCircle />
      </li>
      <li>
        <AiOutlineHeart />
      </li>
      <li>
        <AiOutlineUser />
      </li>
    </FooterWrapper>
  );
};

export default Footer;
