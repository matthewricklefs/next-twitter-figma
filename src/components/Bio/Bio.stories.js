import React from "react";
import Bio from "./Bio";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://github.com/matthewricklefs/hosted-assets/blob/main/matty4.jpeg?raw=true"
    name="Matthew Ricklefs"
    tagline="Helping others to learn by doing!"
    role="Developer Advocate @ Humana"
  />
);

export const Default = Template.bind({});
