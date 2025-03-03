// import Link from "next/link";
import { GiCoffeePot } from "react-icons/gi";
import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="bg-[url(/background3.jpg)] h-[250px]">
    <div className="flex gap-[300px] h-[150px] w-full text-center items-center justify-center border-b-2 border-x-black border-(length:300px) mx-[20px] font-bold text-sm text-white">
      <div>
        <GiCoffeePot className="h-[100px] w-[50px]" />
      </div>
      <h1 className="font-mono text-5xl">Blog Sopai Coffee Shop</h1>
      <div className="flex gap-3">
        <Button asChild className="bg-amber-50 text-black hover:text-amber-800">
            <Link href={"/register"}>Register</Link>
        </Button>
        <Button asChild>
            <Link href={"/"}>Login</Link>
        </Button>
      </div>
    </div>
    </div>
  );
}
