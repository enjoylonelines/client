import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  const { name } = props;
  return (
    <div className="flex flex-col gap-3">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        className="w-[372px] h-[38px] border-2 border-[#979797] rounded-3xl font-thin text-[15px] leading-[31px] px-3  "
      />
    </div>
  );
};

export default Input;
