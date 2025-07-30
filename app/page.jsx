"use client";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import Sponsors from "@/components/Sponsors";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  return (
    <main>
      <Hero language={language} />
      <Sponsors language={language} />
      <Projects language={language} />
      {/* <Blogs language={language} /> */}
      <Newsletter language={language} />
    </main>
  );
}
