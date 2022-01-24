import React from "react";
import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = (args) => (
  <Post
    content="I’m working in Figma, designing a website to display all of my
              tweets!"
    date="01/24/2022"
  />
);

export const Default = Template.bind({});
