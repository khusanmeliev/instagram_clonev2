import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const UserDetails = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const Followers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const ProfileImg = styled.div`
  width: 30%;
  display: flex;

  img {
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
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    flex-direction: column;
    font-size: 13px;

    span {
      font-weight: 600;
      font-size: 18px;
    }
  }
`;

export const UserDescription = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 20px;

  h1 {
    font-size: 15px;
  }
`;

export const EditProfile = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const PostDetails = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin: 15px;
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;

  li {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 40px;
    }
  }
`;

export const PostsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Post = styled.img`
  width: 32%;
  height: 120px;
`;
