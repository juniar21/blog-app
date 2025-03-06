import Wrapper from "@/components/wrapper";
import BlogForm from "./_components";
import Navbar from "@/components/navbar";

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
