    'use client'

    import React, { useState } from 'react'
    import NavBar from '../navbar/navbar.js'
    import Link from 'next/link.js'

    function RegisterPage () {
        const [FirstName ,  setFirstName] = useState("");
        const [LastName ,  setLastName] = useState("");
        const [Email ,  setEmail] = useState("");
        const [Password ,  setPassword] = useState("");  
        const [Error ,  setError] = useState("");  
        const handleSubmit = async(e) =>{
            e.preventDefault();
            if(!FirstName || !LastName || !Email || !Password){
                setError("please correct all the form")
                return;
            }
            try {
                const res = await fetch("/api/auth/signup",{
                    method : "POST" ,
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        FirstName , LastName , Email , Password
                    })
                })
                if(res.ok){
                    setError("");
                    setEmail("");  // รีเซ็ตค่า Email
                    setPassword("");  // รีเซ็ตค่า Password    
                    setFirstName("");  // รีเซ็ตค่า Password    
                    setLastName("");  // รีเซ็ตค่า Password 
                    window.location.href = "login";   
                    console.log('hello');
                } else {
                    console.log("User register failed");
                }
            }catch(error){
                console.log("Error during register");
            }
        }
        return (
            <div className="bg-[#1F1F1F] overflow-x-hidden">
            <nav className = "fixed top-0 left-0 justify-between w-[100%] h-[73px] flex flex-row  pl-[28px] pr-[40px] bg-white items-center">
                <div className = "text-2xl">Swap</div>
                <Link href = "login" className="bg-black rounded-[7px] w-[98px] h-[40px] text-white flex items-center justify-center text-center cursor-pointer pb-[6px]">log in</Link>
            </nav>
            <div className="flex flex-row justify-between   pl-[80px] pr-[150px]">
                <div className="mt-[265px] flex flex-col gap-[28px]">
                    <div className="text-[54px] text-white font-bold">Teach more , Learn more</div>
                    <div>
                        <div className="text-white opacity-80 text-[32px]  text-lg">Join Swap & exchange skill</div>
                        <div className="text-white opacity-80 text-[32px]  text-lg">with 300,000 people!</div>
                    </div>
                </div>
                <form className="flex flex-col rounded-[30px] w-[55%]  bg-white h-[80vh] mt-[137px] pt-[48px] pl-[88px]" onSubmit = {handleSubmit}>
                        {Error && (
                            <div className='w-[100vw] h-[100vh] text-2xl'>{Error}</div>
                        )}
                    <div className="text-[32px] font-bold">Sign up now</div>
                    <div className="flex flex-row gap-[16px] mt-[42px]">
                        <div className="flex flex-col w-max h-max gap-[11px]">
                            <div>First name</div>
                            <input  value={FirstName} onChange={(e) => setFirstName(e.target.value)}  type="text" className="w-[265px] h-[56px] shadow-[0_0_0_0.3px_black] rounded-[10px]"/>
                        </div> 
                        <div className="flex flex-col w-max h-max gap-[11px]">
                            <div>Last name</div>
                            <input value={LastName} onChange={(e) => setLastName(e.target.value)}  type="text" className="w-[265px] h-[56px] shadow-[0_0_0_0.3px_black] rounded-[10px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-max h-max gap-[11px] mt-[16px]">
                        <div>Email address</div>
                        <input value={Email} onChange={(e) => setEmail(e.target.value)} type="text" className="w-[545px] h-[56px] shadow-[0_0_0_0.3px_black] rounded-[10px]"/>
                    </div>
                    <div className="flex flex-col w-max h-max gap-[11px] mt-[16px]">
                        <div>Password</div>
                        <input  value={Password} onChange={(e) => setPassword(e.target.value)} type="text" className="w-[545px] h-[56px] shadow-[0_0_0_0.3px_black] rounded-[10px]"/>
                    </div>
                    <div className="text-[14px]">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div className="flex flex-row items-center mt-[32px] gap-[24px]">
                        <input  type="submit" className="w-[164px] h-[64px] bg-black opacity-90 rounded-[40px] text-white text-[22px]" value="Sign Up"/>
                        <div className="text-[16px] w-max flex flex-row gap-[4px]"><p>Already have an ccount?</p><Link href="login" className="underline">Log in</Link></div>
                    </div>
                </form>
            </div>
            <div className='h-[50px]'></div>
            </div>
        )
    }

  

    export default RegisterPage