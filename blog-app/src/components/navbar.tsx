// import Link from "next/link";
"use client"
import { GiCoffeePot } from "react-icons/gi";
import { Button } from "@/components/ui/button"
import Link from "next/link";
//untuk link bisa diganti ke router
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {useState } from "react";
import axios from "axios";
import { logout } from "@/redux/userSlice";

export default function Navbar() {
  const user = useSelector((state: RootState) => state.user)
  const [menu, SetMenu] = useState(false);
  const dispatch = useDispatch();

  const onLogout = async () => {
    await axios.get("/api/auth/logout")
    dispatch(logout()) }
  return (
    <div >
    <div className="flex gap-[300px] h-[150px] w-full text-center items-center justify-center border-b-2 border-x-black border-(length:300px) mx-[20px] font-bold text-sm text-white">
      <div>
        <GiCoffeePot className="h-[100px] w-[50px]" />
      </div>
      <h1 className="font-mono text-5xl">Blog Sopai Coffee Shop</h1>
      {user.objectId ? (
        <div className="text-black flex gap-5 text-[20px]">
          {user.name}
          <button onClick={() =>SetMenu(!menu)}>
           <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </button>
          {menu && (
          <div>
            <p>cek</p>
            <button onClick={onLogout} >logout</button>
          </div>)}
        </div>
      ) :
      <div className="flex gap-3">
        <Button asChild className="bg-amber-50 text-black hover:text-amber-800">
            <Link href={"/register"}>Register</Link>
        </Button>
        <Button asChild>
            <Link href={"/login"}>Login</Link>
        </Button>
      </div>}
      <div className="blok">
        <p className="blok">logout</p>
      </div>
    </div>
    </div>
  );
}


