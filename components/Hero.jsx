"use client";
import { fadeInUp, fadeIn, scaleIn } from "@/utils/animations";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = ({ contentData }) => {
  return (
    <section className="py-16">
      <div className="container md:flex md:items-center max-w-7xl mx-auto px-4">
        <div className="w-full md:w-1/2">
          <motion.div
            className="flex justify-center items-center"
            {...scaleIn}
            transition={{ delay: 0.2 }}
          >
            <iframe
              className="mx-auto rounded-2xl w-full aspect-video p-2 bg-gray-300 dark:bg-white"
              src={contentData.hero_url}
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
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 px-6"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Think pest control, think Makazi Fumigation.
            <span className="block md:hidden lg:block">
              {" "}
              Your trusted partner in safe and effective solutions.
            </span>
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4 mb-8"
            {...fadeInUp}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href={contentData.instagram_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href={contentData.youtube_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              href={`https://wa.me/${contentData.whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-row justify-center gap-4"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="bg-primary inline-block w-full md:w-auto text-white px-8 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className=" inline-block w-full bg-gray-500  md:w-auto text-gray-800 dark:text-white px-8 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
