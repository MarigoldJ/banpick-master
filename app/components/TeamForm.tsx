"use client";

import TeamInput from "./TeamInput";

const TeamForm = () => {
  return (
    <div className="flex flex-col">
      <TeamInput label="BLUE" color="blue" type="text" />
      <TeamInput label="RED" color="red" type="text" />
    </div>
  );
};

export default TeamForm;
