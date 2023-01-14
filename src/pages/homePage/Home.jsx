import React from "react";
import { posts } from "../../mock/home/posts";
import {
  Post,
  PostDescription,
  PostImage,
  PostLikes,
  PostsWrapper,
  UserDetails,
  Wrapper,
} from "./styles";

import heartIcon from "../../assets/img/heart.png";
import commentIcon from "../../assets/img/comment.png";
import sendIcon from "../../assets/img/send.png";

const Home = () => {
  return (
    <Wrapper>
      <PostsWrapper>
        {posts.map((post) => (
          <Post key={post.id}>
            <UserDetails>
              <li>
                <img src={post.user.photo} alt="userphoto" />
                {post.user.name}
              </li>
              <li>{post.user.icon}</li>
            </UserDetails>

            <PostImage src={post.photo} />

            <PostLikes>
              <li>
                <img src={heartIcon} alt="icon" />
                <img src={commentIcon} alt="icon" />
                <img src={sendIcon} alt="icon" />
              </li>

              <li>
                <img src={sendIcon} alt="icon" />
              </li>
            </PostLikes>

            <PostDescription>
              <p>
                Liked by <span>yourfriend</span> and <span>36 other</span>
              </p>
              <p>
                <span>yournamehere</span> your caption here
              </p>
              <p>View all {post.comment} comments</p>
              <p>11 minutes ago</p>
            </PostDescription>
          </Post>
        ))}
      </PostsWrapper>
    </Wrapper>
  );
};

export default Home;
