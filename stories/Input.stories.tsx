import {Meta, StoryObj} from '@storybook/nextjs';
import { FormData, Input, InputProps } from "@/components/Input/Input";
import { ComponentProps, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toast, ToastProps } from '@/components/Toast/Toast';
import { AnimatePresence } from 'motion/react';

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  title: "1. Input",
  component: Input,
};

export default meta;

type Story = StoryObj<StoryProps>;

const InputWithState = (args: InputProps) => {
  const [value, setValue] = useState<string>('');
  return <Input {...args} value={value} onChange={setValue}/>
}

export const Text_Input: Story = {
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

const InputsWithForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<FormData>();
  const [toast, setToast] = useState<ToastProps | null>(null);
  const onSubmit: SubmitHandler<FormData> = (data) => setToast({ message: `${JSON.stringify(data.email)} - successfully signed up`, type: "success" });
  // alert(JSON.stringify(data)
  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)} className='form-submit'>
      <InputWithState register={register} required={true} name="email" type="email" clearable={true} placeholder="Enter your email" darkMode={true} addClass={`${errors.email && 'border-[2px] border-red/65 rounded-xl'}`}/>
      <InputWithState register={register} required={true} name="password" type="password" placeholder="Enter your password" darkMode={true} addClass={`${errors.password && 'border-[2px] border-red/65 rounded-xl'}`}/>
      <button 
        className='form-button'
        type="submit">
          Sign Up
      </button>
    </form>
    <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            duration={3000}
          />
        )}
      </AnimatePresence>
    </>
  )
}
export const React_Hook_Form: Story = {
  render: () => {
    return <InputsWithForm />
  },
};