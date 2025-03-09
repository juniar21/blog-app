import Home from "./home/page";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Home",
    description: "This Page About Portofolio",
  };
export default function App() {
    return (
        <div>
            <Home />
        </div>
    )
  
}