"use client";

import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

import SubmitButton from "./SubmitButton";
import TeamInput from "./TeamInput";
import { useRouter } from "next/navigation";
import ModeRadio from "./ModeRadio";
import useGame from "../hooks/useGame";

const TeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      blueName: "",
      redName: "",
      mode: "single",
    },
  });
  const router = useRouter();
  const initializeGame = useGame((state) => state.initialize);

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    // 현재 게임 상태 초기화.
    initializeGame();

    if (data.mode === "single") {
      return router.push(
        `/game/single?blueName=${data.blueName}&redName=${data.redName}`
      );
    }

    // TODO: 다중 접속 가능한 밴픽 게임페이지로 연결하는 기능 추가.
    if (data.mode === "multi") {
    }
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
      <ModeRadio register={register} />
      <SubmitButton label="밴픽 시작하기" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default TeamForm;
