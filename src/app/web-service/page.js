"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { trackButtonClick, trackFormSubmit } from "@/utils/gtag";
import Lenis from 'lenis'
import { useEffect } from "react";
import { gsap } from "gsap";



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
    question: <>ช่องทาง<span className="font-extrabold">ติดต่อ</span> (โทร / LINE)</>,
    placeholder: "เช่น 0889991111 หรือ LINE ID",
    type: "text",
    errorMessage: "ต้องมีช่องทางติดต่อครับ",
  },

  /* ======================
     QUALIFICATION CORE
  ====================== */

  {
    key: "projectGoal",
    question: <>เป้าหมาย<span className="font-extrabold">หลัก</span>ของโปรเจกต์นี้คืออะไร?</>,
    type: "select",
    options: [
      "เพิ่มยอดขาย / conversion",
      "สร้าง MVP ทดสอบไอเดีย",
      "ระบบหลังบ้านใช้งานจริง",
      "สร้างความน่าเชื่อถือของธุรกิจ",
      "ยังไม่ชัด อยากปรึกษาก่อน",
    ],
    errorMessage: "กรุณาเลือกเป้าหมายของโปรเจกต์",
  },
  {
    key: "budget",
    question: <>งบประมาณ<span className="font-extrabold">ที่ตั้งไว้</span>สำหรับโปรเจกต์นี้?</>,
    type: "select",
    options: [
      "ต่ำกว่า 30,000 บาท",
      "30,000 – 80,000 บาท",
      "80,000 – 150,000 บาท",
      "150,000+ บาท",
    ],
    errorMessage: "กรุณาเลือกงบประมาณ",
  },
  {
    key: "timeline",
    question: <>ต้องการ<span className="font-extrabold">ใช้งานจริง</span>เมื่อไหร่?</>,
    type: "select",
    options: [
      "ภายใน 2 สัปดาห์",
      "1 เดือน",
      "2–3 เดือน",
      "ยังไม่รีบ เน้นคุณภาพ",
    ],
    errorMessage: "กรุณาเลือกระยะเวลา",
  },
  {
    key: "requirementClarity",
    question: <>ตอนนี้<span className="font-extrabold">ความชัดของงาน</span>อยู่ระดับไหน?</>,
    type: "select",
    options: [
      "มี wireframe / spec ชัดเจนแล้ว",
      "มีเว็บตัวอย่างที่ชอบ",
      "มีไอเดียคร่าว ๆ",
      "ยังไม่มีอะไรเลย",
    ],
    errorMessage: "กรุณาเลือกความชัดของงาน",
  },
  {
    key: "decisionMaker",
    question: <>คุณเป็น<span className="font-extrabold">ผู้ตัดสินใจ</span>สุดท้ายหรือไม่?</>,
    type: "select",
    options: [
      "ใช่ ตัดสินใจเองได้",
      "มีหุ้นส่วนร่วมตัดสินใจ",
      "ต้องรอผู้บริหาร",
      "ยังไม่แน่ใจ",
    ],
    errorMessage: "กรุณาเลือกคำตอบ",
  },
  {
    key: "threeMonthGoal",
    question: <>อีก<span className="font-extrabold"> 3 เดือน</span> คุณคาดหวังอะไรจากโปรเจกต์นี้?</>,
    placeholder: "เช่น เริ่มมีลูกค้า / ใช้งานจริง / ทดสอบตลาด",
    type: "text",
    minLength: 10,
    errorMessage: "กรุณาอธิบายเป้าหมายอย่างน้อย 10 ตัวอักษร",
  },
];


export default function HomePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', message: '', isError: false });
  
  const cursorRef = useRef(null);
  const loadingRef = useRef(null);
  const mainContentRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  const step = formSteps[currentStep];
  const isLastStep = currentStep === formSteps.length - 1;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [step.key]: e.target.value,
    });
    setError("");
  };

  const handleNext = async (e) => {
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
      // Submit to API
      await handleSubmit(formData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    setError("");

    try {
      console.log("QUALIFIED USER 👉", data);
      trackFormSubmit('Roadmap Qualification Form', 'free-page');

      // Send data to API
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // Success
      setModalData({
        title: "คุณผ่านการคัดกรอง",
        message: "ทีมงานของเราจะติดต่อคุณภายใน 7 วันทำการ",
        isError: false
      });
      setShowModal(true);
    } catch (err) {
      console.error('Submit error:', err);
      // Still show success message even if API fails (graceful degradation)
      setModalData({
        title: "คุณผ่านการคัดกรอง",
        message: "ทีมงานของเราจะติดต่อคุณภายใน 7 วันทำการ \n\nหมายเหตุ: อาจมีปัญหาในการบันทึกข้อมูล กรุณาติดต่อเราทางช่องทางอื่น",
        isError: false
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerError = (msg) => {
    setError(msg);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };
  // Loading screen animation
  useEffect(() => {
    if (isLoading && loadingRef.current) {
      // Animate loading screen out with delay
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          // เปิดให้แสดง content ทันทีหลังจาก loading เสร็จ
          setShowContent(true);
        }
      });

      // เพิ่ม delay ให้ loading นานขึ้น (2 วินาที)
      tl.delay(2)
        .to(loadingRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
    }
  }, [isLoading]);

  // Custom cursor with logo
  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;

    // Hide default cursor
    document.body.style.cursor = "none";

    // Use GSAP quickTo for smooth, efficient cursor following
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      xTo(mouseX);
      yTo(mouseY);
    };

    // Handle hover effects on interactive elements
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // Set initial position
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50
    });

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("button, a, input, select");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Animate main content in after loading
  useEffect(() => {
    if (showContent && mainContentRef.current) {
      // ซ่อน content และ main container ก่อน
      gsap.set(mainContentRef.current, {
        opacity: 0
      });
      
      gsap.set(mainContentRef.current.children, {
        opacity: 0,
        y: 30
      });

      // Animate main container และ children พร้อมกันทันที
      const tl = gsap.timeline();
      
      tl.to(mainContentRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      })
      .to(mainContentRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.1");
    }
  }, [showContent]);

  const closeModal = () => {
    if (modalRef.current && modalContentRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setShowModal(false);
        }
      });
      
      tl.to(modalContentRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power2.in"
      })
      .to(modalRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in"
      }, "-=0.2");
    } else {
      setShowModal(false);
    }
  };

  // Modal animation and keyboard support
  useEffect(() => {
    if (showModal && modalRef.current && modalContentRef.current) {
      // Animate modal in
      gsap.fromTo(modalRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      gsap.fromTo(modalContentRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );

      // Handle ESC key to close modal
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          closeModal();
        }
      };

      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling

      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [showModal]);

  return (
    <div className="min-h-screen font-sans bg-black text-white relative overflow-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <div
          ref={loadingRef}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <Image
              src="/logo.png"
              alt="Loading"
              width={150}
              height={150}
              className="mx-auto mb-4 rounded-full"
              priority
            />
            <div className="text-white text-xl font-bold">กำลังโหลด...</div>
          </div>
        </div>
      )}

      {/* Custom Cursor with Logo */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50  mix-blend-difference hidden md:block"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/logo.png"
          alt="Cursor"
          width={40}
          height={40}
          className="rounded-full"
          priority
        />
      </div>

      <main 
        ref={mainContentRef} 
        className="pt-24 px-6 text-center"
        style={{ opacity: 0 }}
      >
        <h1 className="text-5xl font-extrabold max-w-xl mx-auto mb-4">
        จองคิวปรึกษาทำเว็บแบบ 1:1
        </h1>

        <p className="text-lg text-slate-400 mb-6">
        สำหรับโปรเจกต์ที่ต้องการคุณภาพและผลลัพธ์จริง
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
            onClick={() => trackButtonClick(
              isLastStep ? "ยืนยันสิทธิ์นัดคุย" : "ถัดไป",
              'qualification-form',
              ''
            )}
            disabled={isSubmitting}
            className={`w-full mt-10 bg-orange-600 py-6 rounded-full text-2xl font-bold hover:bg-orange-700 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting 
              ? "กำลังส่งข้อมูล..." 
              : isLastStep 
                ? "ยืนยันสิทธิ์นัดคุย" 
                : "ถัดไป"
            }
          </button>

          <div className="mt-6 text-sm text-slate-500">
            {currentStep + 1} / {formSteps.length}
          </div>
        </form>
      </main>

      {/* Success Modal */}
      {showModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={modalContentRef}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              {/* Icon */}


              {/* Title */}
              <h2 className="text-3xl font-extrabold mb-4 text-white">
                {modalData.title}
              </h2>

              {/* Message */}
              <div className="text-gray-300 mb-8 whitespace-pre-line leading-relaxed">
                {modalData.message.split('\n').map((line, index) => (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={closeModal}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
              >
                ตกลง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
