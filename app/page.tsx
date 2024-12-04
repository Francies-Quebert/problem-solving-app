import { Questions } from "./components/Questions";

export default function Home() {
  return (
    <div>
      <header className="text-center text-3xl py-4 font-bold">
        <h5>Problems Solved</h5>
      </header>
      <div>
        <Questions/>
      </div>
    </div>
  );
}
