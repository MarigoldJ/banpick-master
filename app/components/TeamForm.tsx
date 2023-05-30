"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import TeamInput from "./TeamInput";
import { useRouter } from "next/navigation";

const TeamForm = () => {
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
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    // TODO: 다중 접속 가능한 밴픽 게임페이지로 연결하는 기능 추가.

    return router.push(
      `/game?blueName=${data.blueName}&redName=${data.redName}`
    );
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
