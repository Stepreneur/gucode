import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { Email, Password } = await req.json();

        if (!Email || !Password) {
            return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
        }

        const user = await prisma.profile.findUnique({
            where: { Email },
            select: { id: true, Password: true } // ✅ ดึง Password มาด้วย
        });

        if (!user) {
            return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
        }

        // ตรวจสอบรหัสผ่าน
        const isMatch = await bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
        }

        // สร้าง token
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: "365d" }
        );

        // ✅ ตั้งค่า cookie
        const headers = new Headers({
            "Set-Cookie": `token=${token}; Path=/; Max-Age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`, // ไม่ใช้ HttpOnly
            "Content-Type": "application/json"
          });

        return new Response(JSON.stringify({ message: "Login successful" }), {
            status: 200,
            headers
        });
        console.log('succes login')
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}
