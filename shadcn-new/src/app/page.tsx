import Image from "next/image";
import { TableDemo } from "./table";

export default function Home() {
  return (
    <div className="bg-rose-400 w-[90%] mx-auto">
      <h1 className="text-center text-3xl pt-5">Shadcn ui Table Component</h1>
      <div>
        <TableDemo/>
      </div>
    </div>
  );
}
