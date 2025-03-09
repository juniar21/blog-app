import Wrapper from "@/components/wrapper";
import BlogForm from "./_components";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Dashboard",
    description: "Page Dashboard",
  };
export default function Page() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <BlogForm />
      </Wrapper>
    </div>
  );
}
