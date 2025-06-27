"use client";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaHome,
  FaBuilding,
  FaBug,
  FaIndustry,
  FaRocket,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
  scaleIn,
} from "@/utils/animations";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const { language } = useLanguage();
  return (
    <div className=" py-14 ">
      <div className=" md:flex md:items-center max-w-7xl mx-auto px-4">
        <div className="w-full md:w-1/2">
          <motion.div
            className="flex justify-center items-center"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <Image
              className="mx-auto rounded-2xl w-full aspect-video p-2 bg-gray-300 dark:bg-white object-cover"
              src="/images/about.jpg"
              height={1080}
              width={1920}
              alt="socials"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 mx-auto text-center md:text-start mt-16 md:mt-0">
          <motion.h1
            className="text-4xl font-bold mb-6 px-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {language === "sw" ? "Kuhusu" : "About"}{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              {language === "sw" ? "Sisi" : "Us"}
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 px-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {language === "sw"
              ? "At Makazi Fumigation and Hygiene Services, we believe that clean, safe, and healthy environments are essential for the well-being of individuals, families, and communities."
              : "Think pest control, think Makazi Fumigation."}
            <span className="block md:hidden lg:block">
              {" "}
              {language === "sw"
                ? " Based in Tanzania, we provide professional fumigation, pest control, and hygiene services designed to meet the needs of residential homes, institutions, commercial properties, and industrial facilities."
                : "Your trusted partner in safe and effective solutions."}
            </span>
          </motion.p>
        </div>
      </div>

      {/* Skills Section */}
      <motion.section
        className="mb-16 mt-32 px-4"
        {...fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          {...fadeInUp}
        >
          {language === "sw" ? "Historia Yetu" : "Our Story"}
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 mb-8 px-6 text-center"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          {language === "sw"
            ? "Makazi began as a simple opportunity to make a living."
            : "Makazi began as a simple opportunity to make a living."}
          <br />
          {language === "sw"
            ? "But over time, it became much more than that. It became a mission. "
            : "But over time, it became much more than that. It became a mission. "}
        </motion.p>

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaRocket className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To be a trusted leader in fumigation and hygiene services across
              Tanzania, helping communities thrive in cleaner, safer
              environments.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaEye className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Vission</h3>
            <p>
              To deliver professional, affordable, and reliable pest control and
              hygiene solutions that improve the quality of life and support
              public health.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default page;
