"use client";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaHome,
  FaBuilding,
  FaBug,
  FaIndustry,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

const page = () => {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Us
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          At Makazi Fumigation, our mission is to lead the pest control industry
          by delivering top-notch services using the latest proven technology
          and environmentally friendly pesticides. We are committed to providing
          effective and safe pest control solutions tailored to your needs.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Areas Of Focus
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaHome className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Homes</h3>
            <p>
              Kama unadhani unahitaji kuua wadudu nyumbani kwako, tupo
              kukusaidia katika hilo.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaBuilding className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Offices</h3>
            <p>
              Kama unadhani unahitaji kuua wadudu ofisini kwako, tupo kukusaidia
              katika hilo.
            </p>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaIndustry className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industries</h3>
            <p>
              Kama unadhani unahitaji kuua wadudu kiwandani kwako, tupo
              kukusaidia katika hilo.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default page;
