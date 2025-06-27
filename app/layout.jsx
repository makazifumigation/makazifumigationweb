import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/lib/AuthContext";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Makazi Fumigation",
  description: "Your partner in pest control",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <AuthContextProvider>
            <LanguageProvider>
              <Navbar />
              <main className="min-h-screen pt-24">
                {children}
                <LanguageToggle /> {/* Floating button here */}
              </main>
              <Footer />
            </LanguageProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
