import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";
import { Button } from "./Button";

export default {
  title: "Components / Button",
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const TemplateText: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action("button click")}>
    Button
  </Button>
);

export const Base = TemplateText.bind({});
Base.args = {
  type: "solid",
  variant: "primary",
  size: "large",
  disabled: false,
};

const TemplateTextWithIcons: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action("button click")}>
    <SvgIcon iconName="arrowLeft" />
    <span>Button</span>
    <SvgIcon iconName="arrowRight" />
  </Button>
);

export const BaseWithIcons = TemplateTextWithIcons.bind({});
BaseWithIcons.args = {
  type: "solid",
  variant: "primary",
  size: "large",
  disabled: false,
};
