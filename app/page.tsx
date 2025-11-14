import Image from "next/image";
import QrCard from "./components/QrCard";

export default function Home() {
  return (
    <main>
      <section className="h-dvh w-full flex flex-row justify-center items-center bg-slate-300">
        <QrCard />
      </section>
    </main>
  );
}
