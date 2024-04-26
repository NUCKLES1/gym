import Image from "next/image";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white flex-col items-center justify-between">
    <Section1 />
    <Section2 />
    <Section3 />
    </main>
  );
}
