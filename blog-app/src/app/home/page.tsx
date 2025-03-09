import Navbar from "@/components/navbar";
// import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IBlog } from "../typeRegister";
import Wrapper from "@/components/wrapper";
import Card from "@/components/card";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Home",
    description: "Page Ho,e",
  };

export default async function Home() {
  const res = await fetch(
    "https://prizedgirl-us.backendless.app/api/data/Blogs?loadRelations=author"
  );
  const data:IBlog[] = await res.json();
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <Wrapper>
        <div className="grid w-full p-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
          {data.map((item, idx) => {
            return (
              <div key={idx}>
                <Card
                  category={item.category}
                  title={item.title} 
                  thumbnail={item.thumbnail}
                  name={item.author.name}
                  email={item.author.email}
                  objectId={item.objectId}
                />
              </div>
            );
          })}
        </div>
      </Wrapper>
      </div>
    </div>
  );
}


{/* <div className="flex flex-col w-full text-center items-center mt-8 gap-2">
        <p className="mr-[550px] text-sm mt-5">Robusta Coffee</p>
        <h1 className="mr-[40px] font-serif font-bold text-4xl mt-3">
          Odio Utsem Nulla Pharetra Diam
        </h1>
        <h2 className="mr-[210px] font-serif font-bold text-4xl">
          Sitametnisl Elementum
        </h2>
        <Image
          className="mt-4"
          src={"/robusta.jpg"}
          height={200}
          width={800}
          alt="robusta_blog"
        />
        <div className="flex flex-col mt-2">
          <p className="ml-10">
            Senectus et netus et malesuada fames ac turpis egestas. Sed libero
            enim sed faucibus turpis in eu.
          </p>
          <p className="ml-[58px]">
            Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in
            vitae turpis massa sed elementum
          </p>
          <p className="mr-[252px]">
            tempus egestas. Vulputate dignissim suspendisse in est…
          </p>
        </div>
        <div className="mt-3 flex gap-3 mr-[450px]">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[12px] font-bold font-sans">
            JOHN DOE / ON APRIL, 2025
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full text-center items-center mt-8 gap-2">
        <p className="mr-[550px] text-sm mt-5">Arabica Coffee</p>
        <h1 className="mr-[40px] font-serif font-bold text-4xl mt-3">
          Odio Utsem Nulla Pharetra Diam
        </h1>
        <h2 className="mr-[210px] font-serif font-bold text-4xl">
          Sitametnisl Elementum
        </h2>
        <Image
          className="mt-4"
          src={"/arabica.jpg"}
          height={200}
          width={800}
          alt="robusta_blog"
        />
        <div className="flex flex-col mt-2">
          <p className="ml-10">
            Senectus et netus et malesuada fames ac turpis egestas. Sed libero
            enim sed faucibus turpis in eu.
          </p>
          <p className="ml-[58px]">
            Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in
            vitae turpis massa sed elementum
          </p>
          <p className="mr-[252px]">
            tempus egestas. Vulputate dignissim suspendisse in est…
          </p>
        </div>
        <div className="mt-3 flex gap-3 mr-[450px]">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[12px] font-bold font-sans">
            JOHN DOE / ON APRIL, 2025
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full text-center items-center mt-8 gap-2">
        <p className="mr-[550px] text-sm mt-5">Brazilian Coffee</p>
        <h1 className="mr-[40px] font-serif font-bold text-4xl mt-3">
          Odio Utsem Nulla Pharetra Diam
        </h1>
        <h2 className="mr-[210px] font-serif font-bold text-4xl">
          Sitametnisl Elementum
        </h2>
        <Image
          className="mt-4"
          src={"/brazillian.jpg"}
          height={200}
          width={800}
          alt="robusta_blog"
        />
        <div className="flex flex-col mt-2">
          <p className="ml-10">
            Senectus et netus et malesuada fames ac turpis egestas. Sed libero
            enim sed faucibus turpis in eu.
          </p>
          <p className="ml-[58px]">
            Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in
            vitae turpis massa sed elementum
          </p>
          <p className="mr-[252px]">
            tempus egestas. Vulputate dignissim suspendisse in est…
          </p>
        </div>
        <div className="mt-3 flex gap-3 mr-[450px]">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[12px] font-bold font-sans">
            JOHN DOE / ON APRIL, 2025
          </p>
        </div>
      </div> */}
