import Link from "next/link";
import ThemeSwitcher from "@/components/theme-switcher";

export default async function Header() {

  return (
    <div className="flex-1 w-full flex flex-col gap-10 items-center">
        <nav className="w-full flex justify-center border-b border-b-gray-dash h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blog</Link>
                <a  href="https://github.com/YuriSuheishi/blog-pessoal" target="_blank" rel="noopener noreferrer" >Github</a>
                <a  href="https://www.linkedin.com/in/yuri-suheishi-56b009153/" target="_blank" rel="noopener noreferrer" >Linkedin</a>
                
                </div>
                <div className="flex gap-2">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    </div>
  );
}