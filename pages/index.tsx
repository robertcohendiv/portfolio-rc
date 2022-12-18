import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/header";
import Hero from "../components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>robert's portfolio</title>
      </Head>

      <Header/>

      {/* Hero  */}

      <section id="hero">
      <Hero/>
      </section>

      {/* about */}

      {/* experience */}

      {/* skils */}

      {/* project */}

      {/* contact me */}

    </div>
  );
}
