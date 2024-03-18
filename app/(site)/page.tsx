import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Avektoi",
  description: "Avektoi Assurance",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <Testimonial />
      <FeaturesTab />
      <FunFact />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  );
}
