import { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import { UseFormRegister, Path } from "react-hook-form";

export type FormData = {
  email: string;
  password: string;
};

export type InputProps = {
  type?: "text" | "email" |"number" | "password";
  value?: string;
  onChange?: (value: string) => void; 
  register?: UseFormRegister<FormData>;
  name?: Path<FormData>;
  clearable?: boolean;
  placeholder?: string;
  darkMode?: boolean;
  required?: boolean;
  addClass?: string;
}

export const Input = ({
  type = "text",
  value,
  onChange = () => {},
  register,
  name,
  required = false,
  clearable = false,
  placeholder = "Your input",
  darkMode = false,
  addClass = '',
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClear = () => {
    onChange('');
  }
  return (
    <div className={`w-fit h-fit relative ${addClass}`}>
      <input 
        type={type != "password" ? type : showPassword ? "text" : "password"}
        {...(register && name ? register(name, { required, minLength: 5 }) : { value, onChange: (e) => onChange(e.target.value) })}
        autoFocus
        placeholder={placeholder}
        className={`w-[300px] h-[55px] ${darkMode ? 'dark-input' : 'light-input'} ${((clearable && type != 'password') || (type === "password")) ? 'pl-3 pr-11' : 'px-3'} rounded-lg focus:outline-0`}
        />
      {(type === "password" || clearable) && (
        <button 
          type="button"
          onClick={type === 'password' ? togglePassword : handleClear}
          className={`flex-center w-[28px] h-[28px] absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer ${(type != "password" && !value) && 'hidden'} ${darkMode ? "" : 'bg-black/55 rounded-lg'}`}>
            <Image 
              src={`${
                type === "password" 
                ? (showPassword ? "/icons/eye-slash-filled.svg" : "/icons/eye-filled.svg")
                : "/icons/trash-filled.svg"}`}
              width={24}
              height={24}
              alt={type === "password" ? "Hide/Show password" : "Clear input"}/>
        </button>
      )}
    </div>
  );
};
