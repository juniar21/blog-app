"use client";
import LogForm from "@/components/loginForm";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Login() {
  //login nanti di hapus
  return (
    <div>
      <Navbar />
      <div className="absolute z-10 flex max-xl:hidden max-sm:w-full justify-center items-center ml-[850px]">
        <Image src={"/login.png"} alt="error" height={300} width={400} />
      </div>
      <div className="absolute z-10 flex max-xl:hidden max-sm:w-full justify-center items-center ml-[350px] mt-[350px]">
        <Image src={"/login1.png"} alt="error" height={300} width={400} />
      </div>
      <div className="bg-amber-400 h-screen relative flex justify-center items-center">
        <div className="absolute flex justify-center items-center">
          <LogForm />
        </div>
      </div>
    </div>
  );
}
