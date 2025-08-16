import { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";

export type InputProps = {
  type?: "text" | "email" |"number" | "password";
  value?: string;
  onChange?: (value: string) => void; 
  clearable?: boolean;
  placeholder?: string;
  darkMode?: boolean;
}

export const Input = ({
  type = "text",
  value,
  onChange = () => {},
  clearable = false,
  placeholder = "Your input",
  darkMode = false,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClear = () => {
    onChange('');
  }
  return (
    <div className={`w-[350px] h-[120px] flex-center border-[1px] border-black/50 rounded-xl ${darkMode ? 'bg-black/85' : 'bg-white'}`}>
      <input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`relative w-[300px] h-[55px] ${darkMode ? 'bg-white/50 text-white placeholder:text-white' : 'bg-gray-200/85 text-black/95 placeholder:text-black/95'} px-3 rounded-lg focus:outline-0`}
        />
      {type === "password" && 
        <button onClick={handlePassword}>
          <Image 
            src={`${showPassword ? "/icons/eye-slash-filled.svg" : "/icons/eye-filled.svg"}`}
            width={24}
            height={24}
            className={`absolute bottom-0 right-0 z-10`}
            alt="Hide/Show password"/>
        </button>
      }
      {clearable && <button className={`${value ? 'block' : 'hidden'}`} onClick={handleClear}>
          <Image 
            src={`${showPassword ? "/icons/eye-slash-filled.svg" : "/icons/eye-filled.svg"}`}
            width={24}
            height={24}
            className={`absolute bottom-0 right-0 z-10`}
            alt="Clear the input"/>
        </button>
      }
    </div>
  );
};
