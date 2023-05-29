"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import SubmitButton from "./SubmitButton";
import TeamInput from "./TeamInput";
import axios from "axios";

const TeamForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      blueName: "",
      redName: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    // TODO: send data to DB.
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col">
      <TeamInput
        id="blueName"
        label="BLUE"
        color="blue"
        type="text"
        register={register}
        errors={errors}
      />
      <TeamInput
        id="redName"
        label="RED"
        color="red"
        type="text"
        register={register}
        errors={errors}
      />
      <SubmitButton label="밴픽 시작하기" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default TeamForm;
