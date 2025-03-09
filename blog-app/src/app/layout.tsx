import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import ReduxProvider from "@/components/provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MyBlog",
    template: "MyBlog - %s"
  },
  description: "This Page About Blog",
  openGraph:{url:"https://myblogs-indol.vercel.app/login1.png"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >

        <ReduxProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          draggable
          theme="dark"
          transition={Bounce}
          closeOnClick
        />
          {children}
          </ReduxProvider>
      </body>
    </html>
  );
}
