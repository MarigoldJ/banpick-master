"use client";

import SubmitButton from "./SubmitButton";
import TeamInput from "./TeamInput";

const TeamForm = () => {
  const onSubmit = () => {};

  return (
    <div className="flex flex-col">
      <TeamInput label="BLUE" color="blue" type="text" />
      <TeamInput label="RED" color="red" type="text" />
      <SubmitButton label="밴픽 시작하기" onClick={onSubmit} />
    </div>
  );
};

export default TeamForm;
