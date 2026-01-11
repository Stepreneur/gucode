"use client"
import React, { useState } from 'react';
import { Play, Code, Users, Star, Clock, Award, CheckCircle, ArrowRight, Gift, Zap, Trophy, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { trackButtonClick, trackLinkClick } from '@/utils/gtag';

export default function AllCoursesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const freeCourses = [
    {
      id: 1,
      title: "HTML พื้นฐาน",
      description: "เรียนรู้การสร้างเว็บไซต์ด้วย HTML จากศูนย์",
      duration: "2 ชั่วโมง",
      lessons: "12 บทเรียน",
      students: "1,250+",
      rating: 4.9,
      image: "/freestuff/freehtml.png",
      tags: ["HTML", "พื้นฐาน", "ฟรี"],
      features: ["วิดีโอคุณภาพสูง", "แบบฝึกหัด", "ตัวอย่างโค้ด"]
    },
    {
      id: 2,
      title: "ไกด์เขียนเว็บ",
      description: "คู่มือครบครันสำหรับมือใหม่ที่อยากเริ่มเขียนเว็บ",
      duration: "อ่านได้ตลอด",
      lessons: "15 หัวข้อ",
      students: "800+",
      rating: 4.8,
      image: "/freestuff/freeguide.jpg",
      tags: ["ไกด์", "พื้นฐาน", "PDF"],
      features: ["PDF ดาวน์โหลดได้", "เทคนิคลับ", "เคล็ดลับ Pro"]
    },
    {
      id: 3,
      title: "Discord Community",
      description: "เข้าร่วมคอมมูนิตี้ 600+ คนที่รักการเขียนโค้ด",
      duration: "24/7",
      lessons: "สนทนาไม่จำกัด",
      students: "600+",
      rating: 5.0,
      image: "/freestuff/freeclub.jpg",
      tags: ["คอมมูนิตี้", "Discord", "ฟรี"],
      features: ["ช่วยเหลือกัน", "แชร์ผลงาน", "อัพเดทข่าวสาร"]
    }
  ];

  const paidCourses = [
    {
      id: 4,
      title: "CSS Master Class",
      description: "เชี่ยวชาญ CSS ตั้งแต่พื้นฐานจนถึงเทคนิคขั้นสูง",
      price: "฿1,490",
      originalPrice: "฿2,490",
      duration: "8 ชั่วโมง",
      lessons: "45 บทเรียน",
      students: "320+",
      rating: 4.9,
      image: "/api/placeholder/300/200",
      tags: ["CSS", "Animation", "Responsive"],
      features: ["โปรเจค 5 ชิ้น", "เกียรติบัตร", "ซัพพอร์ต 6 เดือน", "อัพเดทฟรี"]
    },
    {
      id: 5,
      title: "JavaScript เริ่มต้น",
      description: "เรียนรู้ JavaScript จากศูนย์จนสามารถสร้างเว็บ Interactive",
      price: "฿2,490",
      originalPrice: "฿3,490",
      duration: "12 ชั่วโมง",
      lessons: "60 บทเรียน",
      students: "180+",
      rating: 4.8,
      image: "/api/placeholder/300/200",
      tags: ["JavaScript", "DOM", "Events"],
      features: ["โปรเจคจริง 3 ชิ้น", "เกียรติบัตร", "ซัพพอร์ต 1 ปี", "โค้ดตัวอย่างครบ"]
    },
    {
      id: 6,
      title: "React Complete Guide",
      description: "เรียน React ตั้งแต่เริ่มต้นจนสร้างแอพได้จริง",
      price: "฿3,990",
      originalPrice: "฿5,490",
      duration: "20 ชั่วโมง",
      lessons: "80 บทเรียน",
      students: "95+",
      rating: 5.0,
      image: "/api/placeholder/300/200",
      tags: ["React", "Hooks", "Modern"],
      features: ["โปรเจคใหญ่ 2 ชิ้น", "เกียรติบัตร", "ซัพพอร์ตตลอดชีพ", "Job Ready"]
    }
  ];

  const camps = [
    {
      id: 7,
      title: "Web Development Bootcamp",
      description: "ค่าย 7 วันที่จะเปลี่ยนมึงจากคนไม่รู้อะไรเป็น Web Developer",
      price: "฿4,990",
      originalPrice: "฿7,990",
      duration: "7 วัน",
      startDate: "15 มีนาคม 2025",
      students: "จำกัด 20 คน",
      rating: 5.0,
      image: "/api/placeholder/400/250",
      tags: ["Intensive", "7 วัน", "Limited"],
      features: [
        "เรียนแบบ Live 7 วันเต็ม",
        "โปรเจคจบที่ใช้งานได้จริง",
        "เว็บไซต์ + โดเมนของตัวเอง",
        "เกียรติบัตรพิเศษ",
        "กลุ่ม VIP Discord",
        "ซัพพอร์ตหลังค่าย 6 เดือน",
        "Job Placement Support"
      ],
      highlights: [
        "ทำเว็บขายของออนไลน์",
        "ทำเว็บ Portfolio",
        "เทคนิคหาตังจากโค้ด",
        "เจาะลึกทุกขั้นตอน"
      ]
    },
    {
      id: 8,
      title: "Weekend Coding Workshop",
      description: "เวิร์คช็อป 2 วันสำหรับคนที่เวลาจำกัด แต่อยากเริ่มเขียนโค้ด",
      price: "฿1,990",
      originalPrice: "฿2,990",
      duration: "2 วัน",
      startDate: "เสาร์-อาทิตย์ ทุกเดือน",
      students: "จำกัด 15 คน",
      rating: 4.9,
      image: "/api/placeholder/400/250",
      tags: ["Weekend", "2 วัน", "Beginner"],
      features: [
        "เรียนเสาร์-อาทิตย์",
        "พื้นฐาน HTML + CSS",
        "สร้างเว็บแรกของตัวเอง",
        "เกียรติบัตร",
        "กลุ่มศิษย์เก่า",
        "ซัพพอร์ต 1 เดือน"
      ]
    }
  ];

  const CourseCard = ({ course, type }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        {type === 'free' && (
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
            ฟรี!
          </div>
        )}
        {type === 'paid' && course.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            ลด {Math.round((1 - parseFloat(course.price.replace('฿', '').replace(',', '')) / parseFloat(course.originalPrice.replace('฿', '').replace(',', ''))) * 100)}%
          </div>
        )}
        {type === 'camp' && (
          <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            จำกัด!
          </div>
        )}
      </div>
      
      <div className="p-6 text-black">
        <div className="flex items-center gap-2 mb-2">
          {course.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Play size={16} />
              {course.lessons}
            </span>
            <span className="flex items-center gap-1">
              <Users size={16} />
              {course.students}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>

        {course.features && (
          <div className="mb-4">
            <div className="grid grid-cols-1 gap-1">
              {course.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle size={14} className="text-black" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            {course.price && (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-black">{course.price}</span>
                {course.originalPrice && (
                  <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                )}
              </div>
            )}
            {type === 'free' && (
              <span className="text-2xl font-bold text-black">ฟรี!</span>
            )}
          </div>
          
          <button 
            onClick={() => trackButtonClick(
              type === 'free' ? 'รับฟรี' : type === 'camp' ? 'สมัครเลย' : 'เรียนเลย',
              `course-card-${type}`,
              course.id ? `/course/${course.id}` : ''
            )}
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
          >
            {type === 'free' ? 'รับฟรี' : type === 'camp' ? 'สมัครเลย' : 'เรียนเลย'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  const CampCard = ({ camp }) => (
    <div className="bg-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 text-white border border-gray-800">
      <div className="relative">
        <img 
          src={camp.image} 
          alt={camp.title}
          className="w-full h-64 object-cover opacity-80"
        />
        <div className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <Zap size={16} />
          {camp.students}
        </div>
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={14} />
            {camp.startDate}
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-2 mb-3">
          {camp.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-gray-800 text-white px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-3">{camp.title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{camp.description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-lg font-bold">{camp.duration}</div>
            <div className="text-xs text-gray-400">ระยะเวลา</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-lg font-bold flex items-center justify-center gap-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              {camp.rating}
            </div>
            <div className="text-xs text-gray-400">คะแนน</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <div className="text-lg font-bold">{camp.students}</div>
            <div className="text-xs text-gray-400">ที่นั่ง</div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-3 flex items-center gap-2">
            <Trophy size={16} className="text-yellow-400" />
            สิ่งที่จะได้รับ:
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {camp.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle size={14} className="text-white" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {camp.highlights && (
          <div className="mb-6">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Zap size={16} className="text-white" />
              ไฮไลท์พิเศษ:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {camp.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight size={14} />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-white/20 pt-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">{camp.price}</span>
              {camp.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{camp.originalPrice}</span>
              )}
            </div>
            <div className="text-sm text-gray-400">ราคาพิเศษจำกัดเวลา</div>
          </div>
          
          <button 
            onClick={() => trackButtonClick('สมัครเลย!', 'camp-card', camp.id ? `/camp/${camp.id}` : '')}
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-lg"
          >
            สมัครเลย!
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            คอร์สทั้งหมด
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              ของกูอยู่ที่นี่
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            ตั้งแต่ฟรีจนถึงแพ็คเกจพรีเมี่ยม — เลือกเส้นทางที่เหมาะกับมึงแล้วเริ่มเขียนโค้ดได้เลย
          </p>
        </div>
      </section>

      {/* Free Courses Section */}
      <section id="free" className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift size={40} className="text-black" />
              <h2 className="text-4xl md:text-5xl font-black text-black">คอร์สฟรี</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เริ่มต้นเขียนโค้ดไม่ต้องเสียสตางค์ — ทุกอย่างที่มึงต้องการเพื่อก้าวแรก
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeCourses.map((course) => (
              <CourseCard key={course.id} course={course} type="free" />
            ))}
          </div>
        </div>
      </section>

      {/* Paid Courses Section */}
      <section id="paid" className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award size={40} className="text-white" />
              <h2 className="text-4xl md:text-5xl font-black text-white">คอร์สเสียตัง</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              เจาะลึกเทคนิคขั้นสูง พร้อมซัพพอร์ตและโปรเจคจริงที่ใช้งานได้
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidCourses.map((course) => (
              <div key={course.id} className="bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-800">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.originalPrice && (
                    <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-bold">
                      ลด {Math.round((1 - parseFloat(course.price.replace('฿', '').replace(',', '')) / parseFloat(course.originalPrice.replace('฿', '').replace(',', ''))) * 100)}%
                    </div>
                  )}
                </div>
                
                <div className="p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    {course.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Play size={16} />
                        {course.lessons}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  {course.features && (
                    <div className="mb-4">
                      <div className="grid grid-cols-1 gap-1">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle size={14} className="text-white" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">{course.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => trackButtonClick('เรียนเลย', 'paid-course-card', course.id ? `/course/${course.id}` : '')}
                      className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                    >
                      เรียนเลย
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camps Section */}
      <section id="camps" className="py-20 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap size={40} className="text-black" />
              <h2 className="text-4xl md:text-5xl font-black text-black">ค่าย & เวิร์คช็อป</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              เรียนแบบเข้มข้น ได้ผลงานจริง พร้อมเปลี่ยนชีวิตมึงภายในไม่กี่วัน
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {camps.map((camp) => (
              <CampCard key={camp.id} camp={camp} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            พร้อมเริ่มต้นแล้วใช่มั้ย?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            เลือกคอร์สที่เหมาะกับมึง แล้วเริ่มเขียนโค้ดได้เลยวันนี้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => trackButtonClick('เริ่มด้วยคอร์สฟรี', 'cta-section', '#free')}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
            >
              เริ่มด้วยคอร์สฟรี
            </button>
            <button 
              onClick={() => trackButtonClick('ดูค่ายทั้งหมด', 'cta-section', '#camps')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              ดูค่ายทั้งหมด
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Gucode
              </div>
              <p className="text-gray-400">Making web development accessible to everyone</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">คอร์ส</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#free" onClick={() => trackLinkClick('คอร์สฟรี', '#free', 'footer')} className="hover:text-white transition-colors">คอร์สฟรี</a></li>
                <li><a href="#paid" onClick={() => trackLinkClick('คอร์สเสียตัง', '#paid', 'footer')} className="hover:text-white transition-colors">คอร์สเสียตัง</a></li>
                <li><a href="#camps" onClick={() => trackLinkClick('ค่าย & เวิร์คช็อป', '#camps', 'footer')} className="hover:text-white transition-colors">ค่าย & เวิร์คช็อป</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ช่วยเหลือ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" onClick={() => trackLinkClick('ศูนย์ช่วยเหลือ', '#', 'footer')} className="hover:text-white transition-colors">ศูนย์ช่วยเหลือ</a></li>
                <li><a href="#" onClick={() => trackLinkClick('คอมมูนิตี้', '#', 'footer')} className="hover:text-white transition-colors">คอมมูนิตี้</a></li>
                <li><a href="#" onClick={() => trackLinkClick('ติดต่อเรา', '#', 'footer')} className="hover:text-white transition-colors">ติดต่อเรา</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ติดตาม</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://tiktok.com/@gucode" onClick={() => trackLinkClick('TikTok', 'https://tiktok.com/@gucode', 'footer')} className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" onClick={() => trackLinkClick('YouTube', '#', 'footer')} className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" onClick={() => trackLinkClick('Discord', '#', 'footer')} className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gucode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}   