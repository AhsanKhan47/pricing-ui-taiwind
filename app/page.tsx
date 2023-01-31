import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/page.module.css";
import Header from "@/components/header";
import Cards from "@/components/cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
}
