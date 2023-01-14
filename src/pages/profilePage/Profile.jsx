import React from "react";
import {
  EditProfile,
  Followers,
  Following,
  Icons,
  Post,
  PostDetails,
  PostsWrapper,
  ProfileImg,
  Title,
  UserDescription,
  UserDetails,
  Wrapper,
} from "./styles";

import { RiShieldUserLine } from "react-icons/ri";
import { posts } from "../../mock/profile/posts";

const Profile = () => {
  return (
    <Wrapper>
      <UserDetails>
        <Title>khusanmeliev</Title>
        <Followers>
          <ProfileImg>
            <img
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="img"
            />
          </ProfileImg>
          <Following>
            <li>
              <span>1.500</span> Post
            </li>
            <li>
              <span>1.000</span> Followers
            </li>
            <li>
              <span>500</span> Following
            </li>
          </Following>
        </Followers>

        <UserDescription>loading......</UserDescription>

        <EditProfile>Edit Profile</EditProfile>
      </UserDetails>

      <PostDetails>
        <Icons>
          <li>
            <RiShieldUserLine />
          </li>
          <li>
            <RiShieldUserLine />
          </li>
        </Icons>
        <PostsWrapper>
          {posts.map((post) => (
            <Post key={post.id} img={post.image} />
          ))}
        </PostsWrapper>
        ;
      </PostDetails>
    </Wrapper>
  );
};

export default Profile;
