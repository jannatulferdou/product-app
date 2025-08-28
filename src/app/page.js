import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Products></Products>
    </div>
  );
}
