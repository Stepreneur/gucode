import React, { useState , useEffect } from 'react'
 
const countdownTarget = new Date("2026-01-24T17:00:00");
const Countdown = () => {
     const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
      useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const diff = countdownTarget - now;
    
          if (diff <= 0) {
            clearInterval(interval);
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });
          }
        }, 1000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div>
     <div className="flex flex-col items-center mb-14">
          <p className="text-sm text-zinc-400 mb-2">สอนสดจะเริ่มในอีก</p>
          <div className="flex gap-3 sm:gap-5">
            {[
              { label: "วัน", value: timeLeft.days },
              { label: "ชม.", value: timeLeft.hours },
              { label: "นาที", value: timeLeft.minutes },
              { label: "วิ", value: timeLeft.seconds }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-black border border-zinc-700 text-white rounded-2xl px-3 sm:px-5 py-2 shadow-lg w-16 sm:w-20"
              >
                <span className="text-xl sm:text-3xl font-extrabold">
                  {item.value.toString().padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm mt-1 font-medium tracking-wide text-zinc-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Countdown