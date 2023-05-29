"use client";

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface TeamInputProps {
  id: string;
  label: string;
  color: "blue" | "red";
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const TeamInput: React.FC<TeamInputProps> = ({
  id,
  label,
  color,
  type,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-row items-center ">
      <label
        className={`
        w-20
        font-semibold
        text-xl
        ${color === "blue" ? "text-blue-800" : "text-red-800"}
      `}
      >
        {label}
      </label>
      <input
        id={id}
        {...register(id, { required: true })}
        placeholder=" "
        type={type}
        className={`
          p-4 m-2 border-2 rounded-md outline-none transition
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
    </div>
  );
};

export default TeamInput;
