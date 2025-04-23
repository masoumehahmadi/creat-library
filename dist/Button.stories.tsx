import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline','danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
const Template: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
};

export const Primary = {
  ...Template,
  args:{
    variant:"secondary",
    size:"lg",
    children:"Primary BTN",
  },
};

export const Large = {
  ...Template,
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Button",
  },
};