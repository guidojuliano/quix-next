import { MainProduct } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QuiX",
  description: "Welcome to QuiX the futurist ecommerce",

  keywords: [
    "productos futuristas",
    "tecnologia avanzada",
    "productos futuristas",
    "quix",
    "ecommerce",
  ],
};
export default function Home() {
  return (
    <main>
      <MainProduct />
    </main>
  );
}
