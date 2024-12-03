
import Barchart from "../components/Barchart";
import { SmilyFace } from "../components/SmilyFace";

export default function Charting() {
  return (
    <div>
      <header className="text-center text-3xl py-4 font-bold">
        <h5>Problems</h5>
      </header>
      <div>
        <SmilyFace/>
      </div>
      <div>
        <Barchart/>
      </div>
    </div>
  );
}
