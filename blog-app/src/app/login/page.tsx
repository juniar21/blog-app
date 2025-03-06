"use client";
import LogForm from "@/components/loginForm";
import Navbar from "@/components/navbar";

export default function Login() {
  //login nanti di hapus
  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-full m-h-full justify-center items-center bg-amber-400">
        <div className="flex justify-center items-center bg-amber-400">
          <LogForm />
        </div>
      </div>
    </div>
  );
}
