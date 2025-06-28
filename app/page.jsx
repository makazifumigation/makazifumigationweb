"use client";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Newsletter from "@/components/Newsletter";
import Projects from "@/components/Projects";
import Sponsors from "@/components/Sponsors";
import { WebContent } from "@/lib/AuthContext";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import { FaCircleNotch } from "react-icons/fa";

export default function Home() {
  const { contentData, fetchContentData } = WebContent();
  const { language } = useLanguage();

  if (!contentData) {
    return <Loader />;
  }

  return (
    <main>
      <Hero contentData={contentData} language={language} />
      <Projects language={language} />
      <Blogs language={language} />
      <Newsletter language={language} />
    </main>
  );
}
