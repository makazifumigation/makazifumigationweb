"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "@/utils/animations";

import emailjs from "@emailjs/browser";
import Loader from "@/components/Loader";
import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import Image from "next/image";

// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "sw" }];
// }

const page = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_jq824zq", // e.g., service_abc123
        "template_db0q5yl", // e.g., template_xyz456
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Teup0NAXNHEYcGI6N" // e.g., Y0URPUBL1CK3Y
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
      });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container max-w-7xl mx-auto py-12 tracking-wide">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="w-full mx-auto text-center mt-16 md:mt-0">
          <motion.h1
            className="text-4xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              {language === "sw" ? "Wasifu " : "Business "}
            </motion.span>
            {language === "sw" ? "Wa Biashara" : "Profile"}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8 px-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {language === "sw"
              ? "Je, wewe ni mdau wa biashara na ungependa kufahamu zaidi kuhusu sisi? Tunayo furaha kukushirikisha wasifu wetu wa biashara (Business Profile) ambao unaeleza kwa kina huduma tunazotoa, maono na malengo yetu, historia ya kampuni, miradi tuliyotekeleza, na taarifa muhimu zitakazokusaidia kutuelewa vyema kama mshirika au mteja."
              : "Are you a business stakeholder interested in learning more about us? We are delighted to share with you our Business Profile, which provides a detailed overview of the services we offer, our vision and mission, company background, completed projects, and other key information that will help you understand us better, whether as a partner or client."}
          </motion.p>
          <motion.div
            className="flex flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://firebasestorage.googleapis.com/v0/b/makazi-fumigation.firebasestorage.app/o/bp%2FMakaziFumigationBusinessProfile.pdf?alt=media&token=a9675704-a991-40a1-bd96-9ed716cfd10e"
                target="_blank"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {language === "sw"
                  ? "Pakua Wasifu Wa Biashara"
                  : "Download Business Profile"}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-md"
          {...slideInRight}
        >
          <Image
            src="/images/bp-sample.jpg"
            className="w-full aspect-video rounded-md object-cover"
            height={1080}
            width={1080}
            alt="Makazi fumigation business profile"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
