import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileDetails = styled.div`
  width: 85%;
  height: 45%;
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: grid;
  place-items: center;
  font-size: 18px;
`;
export const Followers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 30%;
  display: flex;

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const Following = styled.div`
  width: 70%;
  display: flex;

  li {
    width: 33%;
    list-style-type: none;
  }
`;

export const PostDetails = styled.div`
  width: 100%;
  height: 55%;
  display: grid;
  place-items: center;
`;
