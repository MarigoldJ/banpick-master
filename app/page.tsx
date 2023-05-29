import TeamInput from "./components/TeamInput";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <TeamInput label="BLUE" color="blue" type="text" />
      <TeamInput label="RED" color="red" type="text" />
    </div>
  );
}
