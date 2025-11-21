"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");

  const updateField = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "EmailJS configuration missing. Please set NEXT_PUBLIC_EMAILJS_* env variables."
      );
      setStatus("error");
      return;
    }

    try {
      const templateParams = {
        title: "Makazi Fumigation",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: "business@makazifumigation.co.tz",
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <Card className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-[#1a1a1a] mb-2"
          >
            Full name <span className="text-[#5bad6a]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-3 border border-[#e7e7e7] rounded-lg focus:ring-2 focus:ring-[#5bad6a] focus:border-transparent outline-none transition-all"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={updateField("name")}
            aria-required="true"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#1a1a1a] mb-2"
            >
              Email address <span className="text-[#5bad6a]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 border border-[#e7e7e7] rounded-lg focus:ring-2 focus:ring-[#5bad6a] focus:border-transparent outline-none transition-all"
              placeholder="name@company.com"
              required
              value={formData.email}
              onChange={updateField("email")}
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-[#1a1a1a] mb-2"
            >
              Phone number <span className="text-[#5bad6a]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-3 border border-[#e7e7e7] rounded-lg focus:ring-2 focus:ring-[#5bad6a] focus:border-transparent outline-none transition-all"
              placeholder="+255 ..."
              required
              value={formData.phone}
              onChange={updateField("phone")}
              aria-required="true"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-[#1a1a1a] mb-2"
          >
            Describe your requirement <span className="text-[#5bad6a]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-[#e7e7e7] rounded-lg focus:ring-2 focus:ring-[#5bad6a] focus:border-transparent outline-none transition-all resize-y"
            placeholder="Tell us about your pest challenge, property type, and preferred schedule."
            required
            value={formData.message}
            onChange={updateField("message")}
            aria-required="true"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
          className="w-full"
        >
          {status === "submitting" ? "Submitting..." : "Book a Site Survey"}
        </Button>

        {status === "success" && (
          <div className="rounded-lg bg-[#5bad6a]/10 p-4 text-center">
            <p className="text-sm font-medium text-[#5bad6a]">
              Thank you! Our team will reach out within 24 hours.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-lg bg-red-50 p-4 text-center">
            <p className="text-sm font-medium text-red-700">
              Something went wrong. Please try again or contact us at{" "}
              <a href="tel:+255685482846" className="underline">
                +255 685 482 846
              </a>
              .
            </p>
          </div>
        )}
      </form>
    </Card>
  );
}
