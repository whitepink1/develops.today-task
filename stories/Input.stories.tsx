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
  const [value, setValue] = useState('');
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
}