import { Questions } from "./components";

export default function Home() {
  return (
    <div>
      <header className="text-center text-3xl py-4 font-bold">
        <h5>Problems</h5>
      </header>
      <div>
        <Questions/>
      </div>
    </div>
  );
}
