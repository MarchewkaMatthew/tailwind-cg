import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { action } from "@storybook/addon-actions";

export default {
  title: 'Components / Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      }
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} onClick={action("button click")}>Button</Button>;

export const Base = Template.bind({});
Base.args = {
  type: "solid",
  variant: "primary",
  size: "large",
  disabled: false
};
