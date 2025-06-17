'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar';
import Link from 'next/link.js'

function login () {
    const [Email ,  setEmail] = useState("");
    const [Password ,  setPassword] = useState("");  
    const [Error ,  setError] = useState("");  
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!Email || !Password){
            setError("please correct all the form")
            return;
        }
        try {
            const res = await fetch("/api/auth/login",{
                method : "POST" ,
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                     Email , Password
                })
            })
            if (res.ok) {
                setError("");
                setEmail("");  // รีเซ็ตค่า Email
                setPassword("");  // รีเซ็ตค่า Password
                window.location.href = 'homepage'
            } else {
                console.log("User register failed")
            }
        }catch(error){
            console.log("Error during login")
        }
    }
    return (
        <div className="bg-[#1F1F1F] overflow-x-hidden h
        
           -[100vh]">
            <Navbar />
        <div className="flex flex-row justify-center  w-full text-black">
            <form className="flex flex-col rounded-[30px] h-max w-[87%] md:w-[70%] lg:w-[55%]  bg-white  mt-[137px] py-[48px] pl-[50px] pr-[50px]" onSubmit = {handleSubmit}>
                    {Error && (
                        <div className='w-[100vw] h-[100vh] text-2xl'>{Error}</div>
                    )}
                <div className="text-[32px] font-bold w-full">รับคอร์สฟรี และอื่นๆ</div>
                <div className="flex flex-col w-full h-max gap-[11px] mt-[16px]">
                    <div>ชื่อ</div>
                    <input value={Email} onChange={(e) => setEmail(e.target.value)} type="text" className="pl-4 w-full h-[56px] shadow-[0_0_0_0.3px_black] rounded-[10px]"/>
                </div>
                <div className="flex flex-col w-full h-max gap-[11px] mt-[16px]">
                    <div>เบอร์โทร</div>
                    <input  value={Password} onChange={(e) => setPassword(e.target.value)} type="text" className="pl-4 w-full h-[56px] shadow-[0_0_0_0.3px_black] rounded-[10px]"/>
                </div>
                <div className="text-[13px] mt-1 text-black/70">เราจะไม่ส่ง Spam หรือขายข้อมูลของคุณเด็ดขาด</div>
                <div className="flex flex-row items-center mt-[32px] gap-[24px]">
                    <input  type="submit" className="w-max px-[30px] h-[64px] bg-black opacity-90 rounded-[40px] text-white text-[19px]" value="รับฟรี"/>
                </div>
            </form>
        </div>
        <div className='h-[50px]'></div>
        </div>
    )
}



export default login