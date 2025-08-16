import { SidebarMenu } from "@/components/SidebarMenu/SidebarMenu";
import { Meta, StoryObj } from "@storybook/nextjs";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof SidebarMenu>;

const meta: Meta<StoryProps> = {
  title: "3. SidebarMenu",
  component: SidebarMenu,
};

export default meta; 

type Story = StoryObj<StoryProps>;

export const One_Level_Nested_Menu: Story = {
  args:{
    items: [
        {title: 'Home'},
        {title: 'About'},
        {title: 'Contact'},
    ],
  },
  render: (args) => {
    return <SidebarMenu {...args}/>
  },
};

export const Two_Level_Nested_Menu: Story = {
  args:{
    items: [
        {title: 'Home', subMenu: [{ title: 'Bedroom' }, { title: 'Bathroom' }]},
        {title: 'About', subMenu: [{title: 'Our Blog'}, {title: 'Company'}, {title: 'Our team'}]},
        {title: 'Contact', subMenu: [{title:'Location'}]},
    ],
  },
  render: (args) => {
    return <SidebarMenu {...args}/>
  },
};