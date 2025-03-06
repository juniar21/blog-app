import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface Sharebtn {
  ObjectId: string;
}

export default function Share({ ObjectId }: Sharebtn) {
  return (
    <div>
      <div className="flex gap-2 mt-2">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=/https://myblogs-indol.vercel.app/blog/${ObjectId}`}
        >
          <FaFacebook />
        </Link>
        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=/https://myblogs-indol.vercel.app/blog/${ObjectId}`}
        >
          <FaLinkedin />
        </Link>
        <Link
          href={`https://www.twitter.com/intent/tweet?url=/https://myblogs-indol.vercel.app/blog/${ObjectId}`}
        >
          <FaTwitter />
        </Link>
        <Link
          href={`https://wa.me/?text=/https://myblogs-indol.vercel.app/blog/${ObjectId}`}
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
}
