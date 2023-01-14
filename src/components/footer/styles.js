import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;

  li {
    list-style-type: none;
    margin: 8px;

    svg {
      font-size: 30px;
    }
  }
`;
