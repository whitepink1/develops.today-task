import {Meta, StoryObj} from '@storybook/nextjs';
import { Input, InputProps } from "@/components/Input/Input";
import { ComponentProps, useState } from "react";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  title: "1. Input",
  component: Input,
};

export default meta;

type Story = StoryObj<StoryProps>;

const InputWithState = (args: InputProps) => {
  const [value, setValue] = useState<string | number>('');
  return <Input {...args} value={value} onChange={setValue} />
}

export const TextInput: Story = {
  args:{
    type: "text",
    clearable: true,
    placeholder: "Input your message",
    darkMode: false,
  },
  render: (args) => {
    return <InputWithState {...args}/>
  },
};

export const Email_Input_Clearable_Off: Story = {
  args:{
    type: "email",
    clearable: false,
    placeholder: "Input your email",
    darkMode: false,
  },
  render: (args) => {
    return <InputWithState {...args}/>
  },
};

export const Password_Input_Dark_Mode: Story = {
  args:{
    type: "password",
    clearable: false,
    placeholder: "Input your password",
    darkMode: true,
  },
  render: (args) => {
    return <InputWithState {...args}/>
  },
};
export const Number_Input_Dark_Mode: Story = {
  args:{
    type: "number",
    clearable: true,
    placeholder: "Input any number",
    darkMode: true,
  },
  render: (args) => {
    return <InputWithState {...args}/>
  },
};