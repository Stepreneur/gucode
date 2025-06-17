"use client"
import { useEffect, useState } from "react";
import Countdown from "@/Countdown/page";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// ตั้งวันเวลาเริ่มนับถอยหลังที่นี่
const countdownTarget = new Date("2025-06-06T00:00:00");

export default function CourseSection() {
 

  const courseFeatures = [
    "เกียรติบัตร", 
    "Hosting / Domain เป็นของตัวเอง", 
    "โปรเจคจบ", 
    "เว็บใช้งานได้จริง",
    "คลิปย้อนหลัง", 
    "บรรลุ HTML / CSS"
  ];

  return (
    <section id="camp" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    
    {/* Countdown */}
   <Countdown />
 <h2 className="text-4xl sm:text-5xl  md:text-5xl font-bold text-black mb-8 leading-snug text-center lg:text-start">
          🔥 GuJaCode Camp
        </h2>
    {/* Main Content: Stack on mobile, side-by-side on desktop with image on right */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-0 md:pl-9 lg:gap-15">

      {/* Right Side on Desktop (Image) */}
      <div className="w-full lg:w-1/2 p-10">
        <div className="bg-black p-5 rounded-3xl  shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 mb-0 sm:mb-6 lg:mb-20">
          <Image
            src="/img/somsamai.jpg"
            alt="Mockup"
            width={400}
            height={400}
            className=" rounded-2xl w-full "
            priority
          />
        </div>
      </div>

      {/* Left Side (Text) */}
      <div className="w-full lg:w-1/2 p-4 pt-0 md:p-0">

        <p className="text-xl sm:text-2xl lg:text-xl text-black leading-relaxed mb-4">
           นี่ไม่ใช่ค่ายที่ดูจบแล้วนั่งเฉย ๆ — มันคือค่ายที่กูจะลากมึงไปจนทำเว็บของตัวเองขึ้นมาได้จริง
              ตั้งแต่ ซื้อ domain, ซื้อ hosting, ไปจนถึง Deploy เว็บให้ขึ้นออนไลน์ได้ แบบที่กูทำอยู่ในการหาตังจริง ๆ
        </p>
        <p className="text-xl sm:text-2xl lg:text-xl text-black leading-relaxed mb-6">
          กูรับประกันว่ามึงจะเข้าใจ “ทุกอย่างที่สำคัญจริง ๆ” ของ HTML กับ CSS 
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {courseFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle size={20} className="text-green-500 mt-1 flex-shrink-0" />
              <span className="text-black/80 text-xl lg:text-base">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-black mb-8 text-xl sm:text-2xl lg:text-xl">
          <p className="mb-3 font-semibold">
            มึงไม่มีวันได้อะไรจากคอร์สนี้เลย จนกว่ามึงจะทำ &quot;เว็บจริงของมึงเอง&quot; ออกมาเป็นโปรเจกต์จบ
          </p>
          <p>
            ถ้ามึงพร้อมลุย — กูพร้อมพาไปสุดทาง สมัครมา แล้วมาเจอกันในสนามจริงไอสัส
          </p>
        </div>

        <div className="mb-6">
          <div className="text-center sm:text-left">
            <span className="text-3xl sm:text-4xl font-bold text-black">เพียง 1,200</span>
            <span className="text-xl sm:text-2xl text-black ml-2">บาท</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="https://forms.gle/Y5fUxVCHBH8Wv57F6" className="bg-black text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-800 transition-all duration-300">
            สมัคร
          </Link>
          <Link href="https://lin.ee/a1IFJz5" className="border block border-gray-700 text-black px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300">
            สอบถาม
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


  );
}
