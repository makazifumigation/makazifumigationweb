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
import { WebContent } from "@/lib/AuthContext";

import emailjs from "@emailjs/browser";
import Loader from "@/components/Loader";
import { useLanguage } from "@/lib/LanguageContext";

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
      <motion.h1 className="text-4xl font-bold mb-8 text-center" {...fadeInUp}>
        {language === "sw" ? "Wasiliana Nasi" : "Contact Us"}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl font-semibold mb-4">
              {language === "sw" ? "Mawasiliano Yetu" : "Get in Touch"}
            </h2>
            <p className="text-secondary">
              {language === "sw"
                ? "Tupo karibu nawe, tutumie ujumbe wako nasi tutajibu ujumbe wako mapema kadri ya uwezo wetu."
                : "We are just one click away, just send us a message and we will respond as soon as possible."}
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaEnvelope className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">
                  {language === "sw" ? "Barua Pepe" : "Email"}
                </h3>
                <a
                  href={`mailto:business@makazifumigation.co.tz`}
                  className="text-secondary hover:text-primary"
                >
                  business@makazifumigation.co.tz
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPhone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">
                  {language === "sw" ? "Simu" : "Phone"}
                </h3>
                <a
                  href={`tel:255685482846`}
                  className="text-secondary hover:text-primary"
                >
                  +255685482846
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaMapMarkerAlt className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">
                  {language === "sw" ? "Mahali" : "Location"}
                </h3>
                <p className="text-secondary">
                  📍Dar es salaam 📍Morogoro📍Dodoma
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          {...slideInRight}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {language === "sw" ? "Jina kamili" : "Full Name"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {language === "sw" ? "Barua pepe" : "Email address"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                {language === "sw" ? "Ujumbe" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full btn btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {language === "sw"
                ? status === "loading"
                  ? "Inatuma..."
                  : "Tuma Ujumbe"
                : status === "loading"
                ? "Sending..."
                : "Send Message"}
            </motion.button>

            {status === "success" && (
              <motion.p
                className="text-green-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {language === "sw"
                  ? "Ujumbe umetumwa"
                  : "Message sent successfully!"}
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                className="text-red-500 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {language === "sw"
                  ? "Imeshindwa kutuma ujumbe"
                  : "Failed to send message."}
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
