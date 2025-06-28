import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/utils/animations";

const Newsletter = ({ language }) => {
  return (
    <div className="container max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 items-center md:justify-between">
        <div className="md:col-span-2">
          <div className="w-full mx-auto text-center md:text-start">
            <motion.h1
              className="text-4xl font-bold mb-4"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {language === "sw" ? "Neno La" : "Our Name,"}{" "}
              <motion.span
                className="text-primary"
                {...fadeIn}
                transition={{ delay: 0.8 }}
              >
                {language === "sw" ? "Mkurugenzi" : "Our Promise"}
              </motion.span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              {language === "sw"
                ? "Makazi ina maananisha 'nyumbani' tunajali kila mahali tunapo hudumia kwetu. - Kiezera, Mkurugenzi wa Makazi Fumigation"
                : "Makazi means “home” we treat every space, we serve like our own. - Kiezera, Director Makazi Fumigation"}
              {/* <span className="block md:hidden lg:block">
                {" "}
                {language === "sw"
                  ? " Tukiwa na makao yetu hapa Tanzania, tunatoa huduma za kitaalamu za kupulizia viuadudu, kudhibiti wadudu waharibifu, na usafi wa mazingira kwa ajili ya nyumba za makazi, taasisi, biashara na maeneo ya viwanda."
                  : " Based in Tanzania, we provide professional fumigation, pest control, and hygiene services designed to meet the needs of residential homes, institutions, commercial properties, and industrial facilities."}
              </span> */}
            </motion.p>
          </div>
        </div>
        <div className="mx-auto md:mr-0">
          <Image
            className="object-cover h-64 w-64 rounded-full p-2 bg-gray-300 dark:bg-white"
            src="/images/founder.jpg"
            height={1500}
            width={1500}
            alt="Director of Makazi Fumigation"
          />
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col md:flex-row items-center max-w-7xl px-4 mx-auto sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
            Hero
            <span className="font-bold text-blue-500">Section</span>
            <span className="text-xl font-semibold rounded-full text-blueGray-500">
              2.0
            </span>
          </h2>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vulputate dignissim augue, Nullam vulputate dignissim augue.
          </p>
          <div className="mt-5 sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <a
                href=""
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Getting started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href=""
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img src="/images/founder.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="py-20">
      <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up">
        <div className="py-8 md:py-12">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === "sw"
                    ? "Jiunge Kupokea Makala Zetu"
                    : "Subscribe To Our Newsletter"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "sw"
                    ? "Pata makala mpya kutoka Makazi Fumigation, moja kwa moja kwenye barua pepe yako."
                    : "Get the latest updates and insights from Makazi Fumigation, delivered straight to your inbox."}
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
