import React from "react";
import {
  Followers,
  Following,
  PostDetails,
  ProfileDetails,
  ProfileImg,
  Title,
  Wrapper,
} from "./styles";

const Profile = () => {
  return (
    <Wrapper>
      <ProfileDetails>
        <Title>Yournamehere</Title>
        <Followers>
          <ProfileImg>
            <div></div>
          </ProfileImg>
          <Following></Following>
        </Followers>
      </ProfileDetails>
      <PostDetails></PostDetails>
    </Wrapper>
  );
};

export default Profile;
