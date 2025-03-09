// import Link from "next/link";
"use client";
import { GoBook } from "react-icons/go";
import { Button } from "@/components/ui/button";
import Link from "next/link";
//untuk link bisa diganti ke router
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import axios from "axios";
import { logout } from "@/redux/userSlice";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user);
  const [menu, SetMenu] = useState(false);
  const dispatch = useDispatch();

  const onLogout = async () => {
    await axios.get("/api/auth/logout");
    dispatch(logout());
  };
  return (
    <div>
      <div className="constainer mx-auto">
        <div className="p-2">
          <div className="flex flex-wrap justify-around h-[100px] items-center border-b-2 border-x-black font-bold text-sm text-white">
            <div className="flex gap-4 justify-center items-center">
              <GoBook className="h-[100px] w-[50px] text-black" />
              <h1 className="font-mono text-[30px] max-[400px]:text-[15px] text-black mt-1 ">
                MyBlogger
              </h1>
            </div>
            {user.objectId ? (
              <div className="flex text-black mt-2 gap-3 text-[10px] relative  transition-all delay-300 duration-5000">
                <button onClick={() => SetMenu(!menu)}>
                  <div className="mt-1 flex gap-2">
                    <div className="flex flex-col text-end">
                      <p className="hover:scale-105"> {user.name} </p>
                      <p className="max-sm:text-[8px] hover:scale-105"> {user.email} </p>
                    </div>
                    <div className="">
                      <Avatar className="size-7">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </button>
                {menu && (
                  <div className="block absolute z-10 mt-[35px] border border-gray-500 w-[100px] rounded-sm md:w-[150px] transition-all delay-300 duration-5000">
                    <div className="block text-center hover:text-gray-700 hover:scale-105">
                      <Link href={"/home"}>Home</Link>
                      <hr />
                    </div>
                    <div className="block text-center hover:text-gray-700 hover:scale-105">
                      <Link href={"/dashboard"}>Dashboard</Link>
                      <hr />
                    </div>
                    <div className="block text-center text-red-500 hover:text-red-700 hover:scale-105">
                      <button onClick={onLogout}>logout</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <Button
                  asChild
                  className="bg-amber-400 text-black hover:text-amber-400 hover:bg-black"
                >
                  <Link href={"/register"} className="text-[12px]">
                    Register
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-black hover:bg-amber-400 text-amber-400 hover:text-black"
                >
                  <Link href={"/login"} className="text-[12px]">
                    Login
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
