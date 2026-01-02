"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

/* =========================
   QUALIFICATION FORM CONFIG
========================= */
const formSteps = [
  {
    key: "firstName",
    question: <>คุณ<span className="font-extrabold">ชื่อ</span>อะไร ?</>,
    placeholder: "สมศรี ใจดี",
    type: "text",
    errorMessage: "กรุณาใส่ชื่อก่อนครับ",
  },
  {
    key: "contact",
    question: <>ช่องทาง<span className="font-extrabold">ติดต่อ</span> (LINE / Email)</>,
    placeholder: "LINE ID หรือ Email",
    type: "text",
    errorMessage: "ต้องมีช่องทางติดต่อครับ",
  },
  {
    key: "experience",
    question: <>คุณ<span className="font-extrabold">เคยเขียนเว็บ</span>มาก่อนหรือไม่ ?</>,
    type: "select",
    options: [
      "ยังไม่เคยเลย",
      "เคยเขียน HTML / CSS",
      "เคยใช้ React / Next.js",
      "ทำงานสายเว็บอยู่แล้ว",
    ],
    errorMessage: "กรุณาเลือกประสบการณ์ของคุณ",
  },
  {
    key: "stack",
    question: <>ตอนนี้คุณใช้<span className="font-extrabold">อะไรเขียนเว็บ</span> ?</>,
    placeholder: "เช่น HTML, React, Next.js, Tailwind",
    type: "text",
    errorMessage: "ข้อนี้สำคัญ ใช้คัดคนจริงครับ",
  },
  {
    key: "goal",
    question: <>เป้าหมาย<span className="font-extrabold">3 เดือน</span>จากนี้คืออะไร ?</>,
    placeholder: "เช่น รับงานได้ / ทำ SaaS / สมัครงาน",
    type: "text",
    errorMessage: "คนที่ตั้งใจจริงจะตอบข้อนี้ได้ครับ",
    minLength: 10,
  },
];

export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const step = formSteps[currentStep];
  const isLastStep = currentStep === formSteps.length - 1;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [step.key]: e.target.value,
    });
    setError("");
  };

  const handleNext = (e) => {
    e.preventDefault();
    const value = formData[step.key]?.trim();

    if (!value) {
      triggerError(step.errorMessage);
      return;
    }

    if (step.minLength && value.length < step.minLength) {
      triggerError(`กรุณาพิมพ์อย่างน้อย ${step.minLength} ตัวอักษร`);
      return;
    }

    if (isLastStep) {
      console.log("QUALIFIED USER 👉", formData);

      alert(
        "คุณผ่านการคัดกรอง 🎉\n\n" +
        "Roadmap จะถูกส่งให้เฉพาะคนที่ตั้งใจจริง\n\n" +
        JSON.stringify(formData, null, 2)
      );
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const triggerError = (msg) => {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  return (
    <div className="min-h-screen font-sans bg-black text-white">
      <Navbar />

      <main className="pt-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold max-w-xl mx-auto mb-4">
          Roadmap เขียนเว็บ (สำหรับคนเอาจริง)
        </h1>

        <p className="text-lg text-slate-400 mb-6">
          ไม่ให้มั่ว คัดเฉพาะคนที่ตั้งใจ
        </p>

        <Image
          src="/roadmap.png"
          alt="Roadmap"
          width={300}
          height={300}
          className="mx-auto mb-8"
        />

        <form
          onSubmit={handleNext}
          className="max-w-xl mx-auto p-8 rounded-xl shadow-xl"
        >
          <div className="text-3xl mb-8">{step.question}</div>

          {step.type === "select" ? (
            <select
              value={formData[step.key] || ""}
              onChange={handleChange}
              className="w-full px-6 py-6 text-xl rounded-md text-black  bg-white"
            >
              <option value="">-- เลือกคำตอบ --</option>
              {step.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={formData[step.key] || ""}
              onChange={handleChange}
              placeholder={step.placeholder}
              className={`w-full px-6 py-6 text-xl rounded-md text-black bg-white
                ${shake ? "animate-shake" : ""}
                ${error ? "border-2 border-red-500" : ""}
              `}
              autoFocus
            />
          )}

          {error && <p className="mt-4 text-red-400">{error}</p>}

          <button
            type="submit"
            className="w-full mt-10 bg-orange-600 py-6 rounded-full text-2xl font-bold hover:bg-orange-700"
          >
            {isLastStep ? "ขอรับ Roadmap" : "ถัดไป"}
          </button>

          <div className="mt-6 text-sm text-slate-500">
            {currentStep + 1} / {formSteps.length}
          </div>
        </form>
      </main>
    </div>
  );
}
