import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Headline from "@/components/Headline";
import Foods from "@/components/Foods";
import Category from "@/components/Category";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Foods />
      <Category />
    </div>
  );
}
