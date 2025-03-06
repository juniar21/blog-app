import { IBlog } from "@/app/typeRegister";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `https://prizedgirl-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const data: IBlog = await res.json();
  return {
    title: data.title,
    openGraph: {
      images: [data.thumbnail],
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(
    `https://prizedgirl-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
  );
  const data: IBlog = await res.json();
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-6">
        <div className="flex flex-wrap xl:ml-[200px]">
          <div className="w-3/12 ">
            <Link href={"/home"} className="font-bold flex">
              <IoArrowBackOutline className="mt-1" />
              Kembali
            </Link>
            <div className="mt-4">
              <h1 className="text-[13px] font-bold">BAGIKAN</h1>
            </div>
            <div className="flex gap-2 mt-2">
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaWhatsapp />
            </div>
          </div>
          <div className="w-9/12">
            <div className="xl:w-[800px]">
              <div className="mb-5 ">
                <h2>{data.category}</h2>
              </div>
              <div className="text-5xl mb-4 font-bold">
                <h3>{data.title}</h3>
              </div>
              <div className="mb-3">
                <h4>{data.author.name}</h4>
              </div>
              <div className="">
                <Image
                  src={data.thumbnail}
                  width={800}
                  height={300}
                  alt="tes"
                />
              </div>
              <div
                className="w-3/4 mt-5"
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
