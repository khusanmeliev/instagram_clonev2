import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const PostsWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Post = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserDetails = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 10px;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 700;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 400px;
`;

export const PostLikes = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 10px;

  li {
    list-style-type: none;
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
`;

export const PostDescription = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;

  p {
    span {
      font-weight: 700;
    }
    margin: 3px;

    :nth-child(4) {
      font-size: 13px;
    }
  }

  input {
    height: 30px;
    border: none;
  }
`;
