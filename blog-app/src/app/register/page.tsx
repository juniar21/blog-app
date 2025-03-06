"use client";

import Image from "next/image";
import RegForm from "../../components/registerForm";
import Navbar from "@/components/navbar";


export default function Register() {
  return (
    <div>
      <div className="bg-amber-400">
      <Navbar/>
      </div>
      <div className="flex flex-col justify-center items-center m-[60px] lg:m-[100px] lg:mt-[150px]">
        <div className="flex max-sm:flex-col justify-center max-sm:w-full max-sm:mx-auto md:w-full lg:gap-[100px] md:gap-[50px] gap-[30px] items-center">
          <div className="flex max-sm:w-full justify-center items-center">
            <Image
              src={"/register1.png"}
              alt="error"
              height={300}
              width={400}
            />
          </div>
          <div className="flex mb-8 mr-5">
            <RegForm />
          </div>
        </div>
      </div>
    </div>
  );
}
