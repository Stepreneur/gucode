"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Code, Users, Star, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import CourseSection from "@/camp/CourseSection";
import Navbar from '@/components/Navbar';





export default function GucodeLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: Code, title: "HTML & CSS Mastery", desc: "Learn modern web development from scratch" },
    { icon: Users, title: "Interactive Learning", desc: "Hands-on projects and real-world examples" },
    { icon: Star, title: "Expert Guidance", desc: "Learn from experienced developer on TikTok" }
  ];

  const testimonials = [
    { name: "discord : devoxai._xyz", text: "ก็โอเครครับที่ผมฟังตั้งแต่ต้นยันจนคอร์สพี่อธิบายได้ดีมาก โดยที่ผมชอบมากที่สุดคือการที่พี่มีความคิดแบบที่สามารถเปรียบเทียบให้คนที่พึ่งเริ่มต้นเข้าใจได้ง่าย  เป็นอะไรที่ดีมากๆเลยทีมีการเปรียบเทียบการทำงานของโค้ดทั้งหมดในภาษาที่มนุษย์เข้าใจได้ง่าย ผมรู้สึกแบบว่าฟังแล้วเราได้ไอเดียในการเปรียบเทียบแท็ก และองค์ประกอบ เป็นในรูปแบบชีวิตประจำวัน ในเรื่องผลลัพธ์ก็คือสามารถใช้แท็กพื้นฐานได้อย่างเข้าใจและสร้างภาพประกอบในจินตนาการได้มากขึ้น อาจจะวกไปวนมาหน่อยนะฮะ555", rating: 5 },
    { name: "discord : mameaw.pa", text: "ชอบวิธีการสอนค่ะ กระชับ เข้าใจง่าย แต่บางช่วงสำหรับเรายังมีงงบ้างค่ะ แต่ยังไม่ได้ลองใช้เพิ่มเติมเลยค่ะ เพราะช่วงนี้งานยุ่งด้วยค่ะและขอบคุณอีกครั้งที่มาแบ่งปันนะคะ 🙏😊", rating: 5 },
    { name: "instagram : monn_nl", text: "คือก่อนอื่นพี่ชายผมหล่อครับ55คอสนี้พี่สอนดีมากครับทั้งเปรียบเทียบให้เห็นภาพทำให้เข้าใจง่ายอันไหนไม่เข้าใจสามารถถามได้ซึ่งดีมากครับโดยๆรวมคือสุดครับ", rating: 5 }
  ];

  const courseFeatures = [
    "เกียรติบัตร",
    "คลิปย้อนหลัง",
    "โปรเจคจบ",
    "หน้าเว็บที่ใช้งานได้จริง",
    "Host / Domain ของตัวเอง",
    "ความรู้ HTML",
    "ความรู้ CSS",
    "คอมมูนิตี้ส่วนตัว"
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <Navbar />
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
  {/* Background Grid Effect */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        animation: 'float 20s ease-in-out infinite',
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6 sm:px-10 max-w-4xl mx-auto mb-20 animate-fade-in">
    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
      ฝันอยากเขียนเว็บ
      <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mt-1">
        เสือกไม่รู้จัก &lt;div&gt;
      </span>
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
      ถ้ามึงอยากเข้าใจโค้ดจริง ๆ อยากรู้ว่าสาย dev เหมาะกับมึงมั้ย หรืออยากเริ่มหาตังจากมัน...
      กูมีค่ายและคอร์สที่ทำให้ทุกอย่าง “คลิก” ในหัวมึงได้แน่นอน
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
        ดูรายละเอียดค่าย
        <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
      </button>

      <a
        href="https://tiktok.com/@gucode"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
      >
        ดูคอร์สทั้งหมด
      </a>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronDown size={32} className="text-gray-400" />
  </div>
</section>


      {/* Free Stuff Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/95 text-black">
 <div className="max-w-7xl mx-auto">
   <div className="text-center mb-16">
     <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
       <span className='text-black'>FREE !</span>
     </h2>
     <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      สิ่งเหล่านี้จะช่วยให้มึงเริ่มต้นเขียนเว็บได้ง่ายขึ้นภายในคลิกเดียว
      <span className='block border-b mt-10 border-black/30'></span>
     </p>
     
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mb-16">
     {/* Free Course */}
     <div className='flex justify-center flex-col'>
      <div className='self-end mr-10 mb-3 bg-orange-700 py-1 px-3 rounded-l-xl text-sm text-white font-bold'>รับฟรีได้เลย !</div>
        <h3 className="text-2xl font-bold self-center text-center">คอร์สสอนเขียน <span className='block'>HTML</span></h3>
        <div className=" p-10 text-black  relative flex items-center">
              <div className='absolute bg-black w-70 h-70 rounded-full left-1/2 transform -translate-x-1/2 ' ></div>
              <div className="relative w-full h-64 transform hover:scale-105 transition-all duration-300 ">
                  <Image src="/freestuff/freehtml.png" alt="freehtml" fill className="object-contain" />
              </div>
        </div>
         <button className="mt-1 text-lg w-80 self-center bg-black text-white py-4 rounded-full font-bold hover:bg-white hover:border-1 hover:border-black hover:text-black transition-all duration-300">
                รับคอร์ส
        </button>
     </div>
     

     {/* Free Resources */}
      <div className='flex justify-center flex-col'>
      <div className='self-end mr-10 mb-3 bg-orange-700 py-1 px-3 rounded-l-xl text-sm text-white font-bold'>รับฟรีได้เลย !</div>
        <h3 className="text-2xl font-bold self-center text-center">ไกด์ทุกพื้นฐาน<span className='block'>การเขียนเว็บที่มึงต้องรู้</span></h3>
        <div className=" p-10 text-black  relative flex justify-center items-center">
              <div className='absolute bg-black w-70 h-70 rounded-full left-1/2 transform -translate-x-1/2 ' ></div>
              <div className="relative w-90 h-64 transform hover:scale-105 transition-all duration-300 ">
                  <Image src="/freestuff/freeguide.jpg" alt="freehtml" fill className="object-contain" />
              </div>
        </div>
         <button className="mt-1 text-lg w-80 self-center bg-black text-white py-4 rounded-full font-bold hover:bg-white hover:border-1 hover:border-black hover:text-black transition-all duration-300">
                รับไกด์
        </button>
     </div>

     {/* Free Community */}
     <div className='flex justify-center flex-col'>
      <div className='self-end mr-10 mb-3 bg-orange-700 py-1 px-3 rounded-l-xl text-sm text-white font-bold'>600 + สมาชิก !</div>
        <h3 className="text-2xl font-bold self-center text-center">คอมมูนิตี้ดิสคอร์ด<span className='block'>Gucode Club</span></h3>
        <div className=" p-10 text-black  relative flex justify-center items-center">
              <div className='absolute bg-black w-70 h-70 rounded-full left-1/2 transform -translate-x-1/2 ' ></div>
              <div className="relative w-75  h-64 rounded-full transform hover:scale-105 transition-all duration-300 ">
                  <Image src="/freestuff/freeclub.jpg" alt="freehtml" fill className="object-contain " />
              </div>
        </div>
         <button className="mt-1 text-lg w-80 self-center bg-black text-white py-4 rounded-full font-bold hover:bg-white hover:border-1 hover:border-black hover:text-black transition-all duration-300">
                ร่วมพูดคุยกับเรา
        </button>
     </div>
   </div>
 </div>
</section>

      {/* Features Section */}
     <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white text-black relative">
       <Image src="/img/gucode.png" width={51} height={51} alt="gucode" 
         className="absolute  bottom-10 left-1/20 rounded-xl rotate-180 shadow-xl opacity-60 hover:scale-110 transition duration-300" />
        <Image src="/img/gucode.png" width={43} height={43} alt="gucode" 
         className="absolute  top-60 right-1/14 rounded-xl rotate-180 shadow-xl opacity-60 hover:scale-110 transition duration-300" />
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
      กูคือใคร ?
    </h2>
    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
  กูเริ่มเขียนโค้ดมาได้ 2 ปี — จากคนที่ไม่มีพื้นฐานอะไรเลย แต่เชื่ออย่างสุดใจว่า “ไอ้สิ่งนี้แหละ จะเปลี่ยนชีวิตกูได้”<br /><br />
  ช่วง ม.ปลาย กูขาดเรียนบ่อยมาก เพราะเลือกโดดไปเขียนโค้ด ทำโปรเจกต์จริง รับงานจริง หาตังจากมันจริง ๆ กูเชื่อว่าการเขียนโค้ดไม่ได้เรียนรู้จากตำรา แต่เรียนรู้จากการลงมือทำ เจ็บจริง แก้จริง แล้วมันจะชินมือ<br /><br />
  ทุกสิ่งที่กูสอน คือสิ่งที่กูใช้ทำมาหากิน ไม่ใช่แค่ทฤษฎีในยูทูบ  <br /><br />
  ถ้ามึงเชื่อในตัวเองสักนิด กูจะพาไปให้สุดทาง
    </p>

    <div className="flex justify-center">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
        <Image src="/img/gucode.png" alt="Gucode" fill className="object-cover" />
      </div>
    </div>

    <p className="text-md sm:text-lg text-gray-500 mt-10 italic">
      &quot;ถ้ามึงเชื่อในการโค๊ด ทุ่มสุดตัวเหอะ&quot;
    </p>
  </div>
</section>

{/* Course Details */}
<CourseSection />


      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">ความคิดเห็น</h2>
            <p className="text-xl text-black/70">จากนักเรียนของคอร์สและเวิร์คช็อปครั้งก่อนๆ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} 
                   className="bg-black p-8 rounded-2xl hover:bg-black/90 transition-all duration-300 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="font-semibold">- {testimonial.name}</div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
{/* CTA หลัง Testimonials */}
<section className="py-16 px-6 bg-black text-white text-center h-200">
  <h2 className="text-3xl md:text-4xl font-bold mb-6">ถ้ามึงพร้อมเอาจริงเอาจังแล้ว</h2>
  <p className="text-gray-400 text-lg md:text-xl mb-10">
    สมัครค่ายกุ หรือดูคอร์สทั้งหมดที่กูเปิดสอน
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a 
      href="#workshop" 
      className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
    >
      สมัครเวิร์คช็อป
    </a>
    <a 
      href="#all-courses" 
      className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
    >
      ดูรายการคอร์สทั้งหมด
    </a>
  </div>
  <p className='mt-50 text-7xl md:text-8xl font-bold'>
    แล้วเจอกันไอสัส
  </p>
</section>

     

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Gucode
              </div>
              <p className="text-gray-400">Making web development accessible to everyone</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">HTML Fundamentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CSS Mastery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Coming Soon...</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://tiktok.com/@gucode" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gucode. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}