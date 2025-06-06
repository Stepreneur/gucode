import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const { FirstName, LastName, Email, Password } = await req.json();


        if (!FirstName || !LastName || !Email || !Password) {
            return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
        }

        const existingUser = await prisma.profile.findUnique({
            where: { Email },
        });
        
        if (existingUser) {
            return new Response(JSON.stringify({ message: "Email already exists" }), { status: 409 });
        }
        

        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = await prisma.profile.create({
            data: {
                FirstName,
                LastName,
                Email,
                Password: hashedPassword,
            },
        });

        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
}
