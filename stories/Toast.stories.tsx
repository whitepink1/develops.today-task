import { Toast } from "@/components/Toast/Toast";
import { Meta, StoryObj } from "@storybook/nextjs";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Toast>;

const meta: Meta<StoryProps> = {
  title: "2. Toast",
  component: Toast,
};

export default meta; 

type Story = StoryObj<StoryProps>;

export const Success_Fade_Toast: Story = {
  args:{
    type: "success", 
    message: "Congratulations on your achievement!",
    duration: 3000,
    transition: "fade",
  },
  render: (args) => {
    return <Toast {...args}/>
  },
};

export const Warning_Slide_Toast: Story = {
  args:{
    type: "warning", 
    message: "Caution: Wet Floor!",
    duration: 4000,
    transition: "slide",
  },
  render: (args) => {
    return <Toast {...args}/>
  },
};

export const Info_Fade_Toast: Story = {
  args:{
    type: "info", 
    message: "System maintenance notifications, policy updates, or confirmation of a successful action. Here's a more detailed information",
    duration: 6000,
    transition: "fade",
  },
  render: (args) => {
    return <Toast {...args}/>
  },
};