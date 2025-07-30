import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/utils/animations";

const Newsletter = ({ language }) => {
  return (
    <div className="container max-w-7xl mx-auto py-16">
      <div className="bg-gray-100 rounded-2xl p-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 items-center md:justify-between">
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
              className="text-lg text-gray-600"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              {language === "sw"
                ? "Makazi humaananisha 'nyumbani' tunajali kila mahali tunapo hudumia kama kwetu. - Kiezera Alfred, Mkurugenzi wa Makazi Fumigation"
                : "Makazi means “home” we treat every space, we serve like our own. - Kiezera Alfred, Director Makazi Fumigation"}
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
            className="object-cover h-64 w-64 rounded-full p-2 bg-gray-300 "
            src="/images/founder.jpg"
            height={1500}
            width={1500}
            alt="Director of Makazi Fumigation"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
