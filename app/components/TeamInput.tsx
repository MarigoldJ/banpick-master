"use client";

interface TeamInputProps {
  label: string;
  color: "blue" | "red";
  type: string;
}

const TeamInput: React.FC<TeamInputProps> = ({ label, color, type }) => {
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
        placeholder=" "
        type={type}
        className="p-4 m-2 border-2 rounded-md outline-none border-neutral-300 focus:border-neutral-500 transition"
      />
    </div>
  );
};

export default TeamInput;
