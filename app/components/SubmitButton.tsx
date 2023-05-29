interface SubmitButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
    rounded-lg hover:opacity-70 transition w-full
    bg-neutral-400
    border-neutral-500 border-2
    text-black font-semibold
  `}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
