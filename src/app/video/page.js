"use client"
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Maximize, 
  CheckCircle, 
  Clock, 
  BookOpen,
  Users,
  MessageCircle,
  Star,
  Download,
  Lock,
  Settings,
  Menu
} from 'lucide-react';
import Image from 'next/image';
import { trackButtonClick } from '@/utils/gtag';

export default function CourseVideoPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [completedVideos, setCompletedVideos] = useState(new Set());
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Sample course data - คุณสามารถแทนที่ด้วยข้อมูลจริงได้
  const courseData = {
    title: "HTML & CSS สำหรับมือใหม่",
    instructor: "Gucode",
    totalVideos: 12,
    totalDuration: "4 ชั่วโมง 30 นาที",
    videos: [
      {
        id: 1,
        title: "บทที่ 1: รู้จักกับ HTML",
        duration: "15:30",
        description: "เรียนรู้พื้นฐาน HTML และการตั้งค่าเครื่องมือพัฒนา",
        videoUrl: "/videos/lesson1.mp4", // แทนที่ด้วย URL จริง
        isLocked: false
      },
      {
        id: 2,
        title: "บทที่ 2: HTML Tags พื้นฐาน",
        duration: "20:15",
        description: "เรียนรู้ HTML tags ที่ใช้บ่อยและการใช้งาน",
        videoUrl: "/videos/lesson2.mp4",
        isLocked: false
      },
      {
        id: 3,
        title: "บทที่ 3: การจัดโครงสร้างหน้าเว็บ",
        duration: "25:45",
        description: "เรียนรู้การใช้ div, section, header, footer",
        videoUrl: "/videos/lesson3.mp4",
        isLocked: false
      },
      {
        id: 4,
        title: "บทที่ 4: CSS เบื้องต้น",
        duration: "18:20",
        description: "เริ่มต้นกับ CSS และการจัดแต่งหน้าเว็บ",
        videoUrl: "/videos/lesson4.mp4",
        isLocked: true
      },
      {
        id: 5,
        title: "บทที่ 5: CSS Flexbox",
        duration: "30:10",
        description: "เรียนรู้การจัดวางองค์ประกอบด้วย Flexbox",
        videoUrl: "/videos/lesson5.mp4",
        isLocked: true
      }
    ]
  };

  const currentVideoData = courseData.videos[currentVideo];

  const handleVideoSelect = (index) => {
    if (!courseData.videos[index].isLocked) {
      setCurrentVideo(index);
      setIsPlaying(false);
    }
  };

  const markAsCompleted = (videoIndex) => {
    setCompletedVideos(prev => new Set([...prev, videoIndex]));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => {
                setShowSidebar(!showSidebar);
                trackButtonClick('Toggle Sidebar', 'video-header', '');
              }}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center space-x-3">
              <Image src="/img/gucode.png" width={32} height={32} alt="Gucode" className="rounded-lg" />
              <div>
                <h1 className="text-lg font-bold">{courseData.title}</h1>
                <p className="text-sm text-gray-400">โดย {courseData.instructor}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              {completedVideos.size}/{courseData.totalVideos} บทเรียน
            </div>
            <button 
              onClick={() => trackButtonClick('ดาวน์โหลดทั้งหมด', 'video-header', '')}
              className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              <Download size={16} className="inline mr-2" />
              ดาวน์โหลดทั้งหมด
            </button>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className={`${showSidebar ? 'w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-900 border-r border-gray-800`}>
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">เนื้อหาคอร์ส</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <BookOpen size={16} className="mr-1" />
                  {courseData.totalVideos} บทเรียน
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {courseData.totalDuration}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {courseData.videos.map((video, index) => (
                <div
                  key={video.id}
                  onClick={() => {
                    handleVideoSelect(index);
                    if (!video.isLocked) {
                      trackButtonClick(`เลือกวิดีโอ: ${video.title}`, 'video-sidebar', `video-${index}`);
                    }
                  }}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    currentVideo === index 
                      ? 'bg-white text-black' 
                      : video.isLocked 
                        ? 'bg-gray-800/50 opacity-60' 
                        : 'bg-gray-800 hover:bg-gray-700'
                  } ${video.isLocked ? 'cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {video.isLocked ? (
                          <Lock size={16} className="text-gray-500" />
                        ) : completedVideos.has(index) ? (
                          <CheckCircle size={16} className="text-green-500" />
                        ) : (
                          <Play size={16} className={currentVideo === index ? 'text-black' : 'text-gray-400'} />
                        )}
                        <span className="text-sm font-medium">{video.title}</span>
                      </div>
                      <p className={`text-xs ${currentVideo === index ? 'text-gray-600' : 'text-gray-400'} mb-2`}>
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs ${currentVideo === index ? 'text-gray-600' : 'text-gray-500'}`}>
                          {video.duration}
                        </span>
                        {video.isLocked && (
                          <span className="text-xs bg-orange-600 px-2 py-1 rounded text-white">
                            Premium
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Course Stats */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-3">สถิติการเรียน</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">ความคืบหน้า</span>
                  <span>{Math.round((completedVideos.size / courseData.totalVideos) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(completedVideos.size / courseData.totalVideos) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">เวลาที่ใช้</span>
                  <span>2 ชั่วโมง 15 นาที</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Video Player */}
          <div className="bg-gray-900 rounded-xl overflow-hidden mb-6 shadow-2xl">
            <div className="relative aspect-video bg-black">
              {/* Placeholder for video player */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                    <Play size={32} className="text-black ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{currentVideoData.title}</h3>
                  <p className="text-gray-400">{currentVideoData.description}</p>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      trackButtonClick(isPlaying ? 'Pause Video' : 'Play Video', 'video-player', '');
                    }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    {isPlaying ? <Pause size={20} className="text-black" /> : <Play size={20} className="text-black ml-1" />}
                  </button>
                  
                  <button 
                    onClick={() => trackButtonClick('Skip Back', 'video-player', '')}
                    className="text-white hover:text-gray-300"
                  >
                    <SkipBack size={20} />
                  </button>
                  
                  <button 
                    onClick={() => trackButtonClick('Skip Forward', 'video-player', '')}
                    className="text-white hover:text-gray-300"
                  >
                    <SkipForward size={20} />
                  </button>

                  <div className="flex-1 flex items-center space-x-3">
                    <span className="text-sm text-white">{formatTime(currentTime)}</span>
                    <div className="flex-1 h-1 bg-gray-600 rounded-full">
                      <div className="h-1 bg-white rounded-full" style={{ width: '35%' }}></div>
                    </div>
                    <span className="text-sm text-white">{currentVideoData.duration}</span>
                  </div>

                  <button 
                    onClick={() => {
                      setIsMuted(!isMuted);
                      trackButtonClick(isMuted ? 'Unmute Video' : 'Mute Video', 'video-player', '');
                    }}
                    className="text-white hover:text-gray-300"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>

                  <button 
                    onClick={() => trackButtonClick('Video Settings', 'video-player', '')}
                    className="text-white hover:text-gray-300"
                  >
                    <Settings size={20} />
                  </button>

                  <button 
                    onClick={() => trackButtonClick('Fullscreen', 'video-player', '')}
                    className="text-white hover:text-gray-300"
                  >
                    <Maximize size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{currentVideoData.title}</h2>
                <p className="text-gray-400 text-lg">{currentVideoData.description}</p>
              </div>
              <button 
                onClick={() => {
                  markAsCompleted(currentVideo);
                  trackButtonClick(
                    completedVideos.has(currentVideo) ? 'เรียนจบแล้ว' : 'ทำเครื่องหมายว่าเรียนจบ',
                    'video-info',
                    `video-${currentVideo}`
                  );
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  completedVideos.has(currentVideo)
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
              >
                {completedVideos.has(currentVideo) ? (
                  <>
                    <CheckCircle size={20} className="inline mr-2" />
                    เรียนจบแล้ว
                  </>
                ) : (
                  'ทำเครื่องหมายว่าเรียนจบ'
                )}
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                <Clock size={16} className="mr-1" />
                {currentVideoData.duration}
              </span>
              <span className="flex items-center">
                <Users size={16} className="mr-1" />
                245 คนกำลังเรียน
              </span>
              <span className="flex items-center">
                <Star size={16} className="mr-1 text-yellow-400" />
                4.9 (127 รีวิว)
              </span>
            </div>
          </div>

          {/* Discussion Section */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <MessageCircle size={24} className="mr-2" />
                คำถามและการอภิปราย
              </h3>
              <button 
                onClick={() => trackButtonClick('ตั้งคำถาม', 'discussion-section', '')}
                className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                ตั้งคำถาม
              </button>
            </div>

            <div className="space-y-4">
              {/* Sample discussions */}
              <div className="border-l-4 border-white pl-4 py-2">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <span className="font-semibold">นักเรียนคนที่ 1</span>
                  <span className="text-gray-400 text-sm">2 ชั่วโมงที่แล้ว</span>
                </div>
                <p className="text-gray-300">ขอถามครับ ในส่วนของ HTML tags นี้ ถ้าเราใช้ div แทน section ได้ไหมครับ?</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                  <button className="hover:text-white">ตอบกลับ</button>
                  <button className="hover:text-white">👍 5</button>
                </div>
              </div>

              <div className="border-l-4 border-gray-600 pl-4 py-2">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">G</span>
                  </div>
                  <span className="font-semibold">Gucode</span>
                  <span className="bg-orange-600 px-2 py-1 rounded text-xs">ผู้สอน</span>
                  <span className="text-gray-400 text-sm">1 ชั่วโมงที่แล้ว</span>
                </div>
                <p className="text-gray-300">ใช้ได้ครับ แต่ section จะให้ความหมายทางความหมายมากกว่า ซึ่งจะดีสำหรับ SEO และการอ่าน code</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                  <button className="hover:text-white">ตอบกลับ</button>
                  <button className="hover:text-white">👍 12</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      `}</style>
    </div>
  );
}