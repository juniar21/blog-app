import axios from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const {login, password} = await req.json();
        const {data} = await axios.post("/user/login", {login, password});
        console.log(data);
        
        const response = NextResponse.json(data);
        response.cookies.set("user-token", data["user-token"], {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            path: "/",
            maxAge: 60 * 60 * 24,
        });
        return response
    } catch (err) {
        return NextResponse.json(err)
        
    }
}