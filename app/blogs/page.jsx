"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, cardHoverSmall } from "@/utils/animations";
import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useLanguage } from "@/lib/LanguageContext";
import { calculateReadTime } from "@/lib/functions";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  const getProjects = async () => {
    const dbInstance = collection(db, "Blogs");
    let q = query(
      dbInstance,
      // where("module_poster_id", "==", userData.user_id),
      where("blog_visibility", "==", true),
      orderBy("blog_submitted_time", "desc")
    );

    setLoading(true);
    try {
      const data = await getDocs(q);

      const newData = data.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));

      setBlogs(newData);
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
    } finally {
      setLoading(false); // Set loading state after the query completes (whether success or error)
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === "sw" ? "Makala Zetu" : "Blog Posts"}
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 dark:text-gray-300 mb-8 px-6 text-center"
        {...fadeInUp}
        transition={{ delay: 0.4 }}
      >
        {language === "sw"
          ? "Mbali na juhudi zetu kudhibiti wadudu,"
          : "Besides our efforts in pest control, "}
        <br />
        {language === "sw"
          ? "tunaelimisha umma kuhusu umuhimu wake."
          : "we educate the public on its importance."}
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-2xl shadow-md overflow-hidden"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <div className="p-6">
              <motion.h2
                className="text-xl font-semibold mb-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/blogs/${blog.blog_id}`}
                  className="hover:text-primary transition-colors line-clamp-1"
                >
                  {blog.blog_title}
                </Link>
              </motion.h2>

              <motion.p
                className="text-secondary mb-4 line-clamp-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {blog.blog_summary}
              </motion.p>

              <motion.div
                className="flex items-center gap-4 text-sm text-secondary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>
                    {blog.blog_submitted_time
                      ?.toDate()
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaClock className="h-4 w-4" />
                  <span>{calculateReadTime(blog.blog_body)}</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default page;
