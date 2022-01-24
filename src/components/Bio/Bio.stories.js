import React from "react";
import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/1347599595115868162/dSzyyv9m_400x400.jpg"
    name="Matthew Ricklefs"
    tagline="Helping others to learn by doing!"
    role="Developer Advocate @ Humana"
  />
);

export const Default = Template.bind({});
