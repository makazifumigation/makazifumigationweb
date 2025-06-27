"use client";
import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
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
    return (
      <div className="flex items-center justify-center h-80">
        <Image
          className="animate-spin h-6 w-6"
          src="loading.svg"
          height={48}
          width={48}
          alt="loading"
        />
      </div>
    );
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
