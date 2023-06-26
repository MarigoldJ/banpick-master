import { FieldValues, UseFormRegister } from "react-hook-form";

interface ModeRadioProps {
  register: UseFormRegister<FieldValues>;
}

const ModeRadio: React.FC<ModeRadioProps> = ({ register }) => {
  return (
    <div>
      <label htmlFor="mode-single">
        <input
          id="single"
          {...register("mode", { required: true })}
          type="radio"
          value="single"
        />
        Single
      </label>

      <label htmlFor="mode-multi">
        <input
          id="multi"
          {...register("mode", { required: true })}
          type="radio"
          value="multi"
        />
        Multi
      </label>
    </div>
  );
};

export default ModeRadio;
