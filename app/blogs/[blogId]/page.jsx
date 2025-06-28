"use client";
import {
  Timestamp,
  collection,
  doc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { use, useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import Link from "next/link";
import Image from "next/image";
import { WebContent } from "@/lib/AuthContext";
import Loader from "@/components/Loader";

const page = ({ params }) => {
  const { contentData } = WebContent();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const dbInstance = collection(db, "Blogs");
  const { blogId } = use(params);

  const getContentById = async (id) => {
    const q = query(dbInstance, where("blog_id", "==", id), limit(1));

    try {
      const data = await getDocs(q);
      const contentData = data.docs.find((item) => item.id === id);
      console.log("Getting data");

      if (contentData) {
        return { ...contentData.data(), id: contentData.id };
      } else {
        console.error("Content not found");
        return null;
      }
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
      throw error;
    }
  };

  function toFirebaseTimestamp(obj) {
    return new Timestamp(obj._seconds, obj._nanoseconds);
  }

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        setLoading(true);
        const data = await getContentById(blogId);
        // setNewStatus(data.package_status);
        // setStatus(data.package_status);
        setContent(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching press release:", error);
      }
    };

    fetchContentData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!loading && !content) {
    return (
      <EmptyState
        title={"No Content"}
        desc={
          "Looks like there is no content for this livestream. Please check the url and try again."
        }
      />
    );
  }

  return (
    <div>
      <div className="container max-w-7xl py-16">
        <div className="px-4">
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
            <Image
              src={content.blog_image}
              alt={content.blog_title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <p className="text-3xl font-bold mb-4 text-start">
            {content.blog_title}
          </p>
          <div className="mt-1 text-small-regular text-gray-500">
            {content.blog_summary}
          </div>
          <div className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">
            {content.blog_body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
