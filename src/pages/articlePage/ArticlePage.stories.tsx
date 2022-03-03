import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ArticlePage } from "./ArticlePage";

export default {
  title: "Pages / Article Page",
  component: ArticlePage,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => (
  <ArticlePage {...args} />
);

export const Base = Template.bind({});
Base.args = {
  title: "Example article about the garlic bread",
};
