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
      <div className="flex h-[100px] w-full items-center justify-center border-b-2 border-x-black font-bold text-sm text-white">
        <div className="flex gap-4 max-sm:ml-[40px] justify-center items-center">
          <GoBook className="h-[100px] w-[50px] text-black" />
          <h1 className="font-mono md:text-4xl text-[18px] text-black mt-1 ">
            MyBlogger
          </h1>
        </div>
        {user.objectId ? (
          <div className="flex text-black mt-2 gap-3 text-[15px] max-sm:ml-[35px] lg:ml-[600px] sm:ml-[200px]">
            <div className="mt-1">{user.name}</div>
            <button onClick={() => SetMenu(!menu)}>
              <Avatar className="size-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </button>
            {menu && (
              <div className="flex flex-col">
                <Link href={"/home"}>Home</Link>
                <Link href={"/dashboard"}>Dashboard</Link>
                <button onClick={onLogout}>logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-3 max-sm:ml-[35px] lg:ml-[500px] sm:ml-[200px] xl:ml-[700x]">
            <Button
              asChild
              className="bg-amber-400 text-black hover:text-amber-400 w-[50px] md:w-full hover:bg-black"
            >
              <Link href={"/register"} className="text-[12px]">Register</Link>
            </Button>
            <Button asChild className=" w-[40px] md:w-full bg-black hover:bg-amber-400 text-amber-400 hover:text-black">
              <Link href={"/login"} className="text-[12px]">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
