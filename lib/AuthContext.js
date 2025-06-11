"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [contentData, setContentData] = useState(null);

  const fetchContentData = async (id) => {
    const userDoc = doc(collection(db, "Content"), id);
    const docSnapshot = await getDoc(userDoc);
    if (docSnapshot.exists()) {
      setContentData(docSnapshot.data());
      console.log("document exists!");
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchContentData("website");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        contentData,
        fetchContentData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const WebContent = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("WebContent must be used within an AuthContextProvider");
  }
  return context;
};
