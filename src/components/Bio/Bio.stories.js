import React from "react";
import Bio from "./Bio";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://avatars.githubusercontent.com/u/72839408?s=400&u=e522c920900a3f11340ec9ed062de7d582aaf019&v=4"
    name="Matthew Ricklefs"
    tagline="Helping others to learn by doing!"
    role="Developer Advocate @ Humana"
  />
);

export const Default = Template.bind({});
