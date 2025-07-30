"use client";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/animations";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ language }) => {
  // const { language } = useLanguage();
  return (
    <section className="py-16">
      <div className="container md:flex md:items-center max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <motion.div
            className="flex justify-center items-center"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <iframe
              className="mx-auto rounded-2xl w-full aspect-video p-2 bg-gray-300"
              src="https://www.youtube.com/embed/jI_FD8foldE"
              allowFullScreen
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 mx-auto text-center mt-16 md:mt-0">
          <motion.h1
            className="text-4xl font-bold mb-6"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Makazi{" "}
            <motion.span
              className="text-primary"
              {...fadeIn}
              transition={{ delay: 0.8 }}
            >
              Fumigation
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 mb-8 px-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {language === "sw"
              ? "Fikiria udhibiti wa wadudu, fikiria Makazi Fumigation."
              : "Think pest control, think Makazi Fumigation."}
            <span className="block md:hidden lg:block">
              {" "}
              {language === "sw"
                ? "Msaada wako wa kuaminika katika uluhishi madhubuti."
                : "Your trusted partner in safe and effective solutions."}
            </span>
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="https://www.instagram.com/makazi_fumigation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary  transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href={`https://wa.me/255685482846`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-row justify-center gap-4 tracking-wide"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                {language === "sw" ? "Kuhusu Sisi" : "About Us"}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className=" inline-block w-full bg-white  md:w-auto text-primary px-8 py-2 rounded-lg hover:bg-gray-300 transition-colors border border-primary"
              >
                {language === "sw" ? "Wasiliana Nasi" : "Contact Us"}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
