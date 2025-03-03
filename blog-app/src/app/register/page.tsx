"use client";

import Image from "next/image";
// import { IRegister } from "@/app/typeRegister";
// import axios from "axios";
// import { useState, useEffect } from "react";
import RegForm from "../../components/registerForm";

export default function Register() {
  return (
    <div className="flex flex-col">
      <div className="bg-white w-full h-[60px] flex gap-3 justify-end p-3">
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
      <div className="flex justify-center gap-[150px] p-[100px]">
        <div>
          <Image src={"/register.png"} alt="error" height={500} width={500} />
        </div>
        <div>
          <RegForm />
        </div>
      </div>
    </div>
  );
}
