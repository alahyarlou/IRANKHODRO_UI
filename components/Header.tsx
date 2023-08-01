"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// navigation
import { usePathname, useRouter } from "next/navigation";
// icons
import {
  HiOutlineUser,
  HiOutlineMenuAlt3,
  HiOutlineSearch,
} from "react-icons/hi";
import { BsCarFrontFill } from "react-icons/bs";
import Sidebar from "./Sidebar";

const headerURL: { id: number; title: string; path: string }[] = [
  {
    id: 1,
    title: "صفحه اصلی",
    path: "/",
  },
  {
    id: 2,
    title: "خرید خودرو",
    path: "/car-purchase",
  },
  {
    id: 3,
    title: "لیست قیمت خودرو",
    path: "/price-list",
  },
  {
    id: 4,
    title: "لیست برندگان قرعه کشی",
    path: "/list-of-lottery-winners",
  },
  {
    id: 5,
    title: "لیست بخشنامه ها",
    path: "/list-of-directives",
  },
];
const Header = () => {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <Sidebar
        headerURL={headerURL}
        pathname={pathname}
        setShowSidebar={setShowSidebar}
        showSidebar={showSidebar}
      />
      <div className="bg-white shadow-sm px-5 py-4">
        <div className="flex flex-col gap-y-5 container mx-auto">
          <div className="flex items-center justify-between">
            <button
              className="lg:hidden text-2xl"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <HiOutlineMenuAlt3 />
            </button>
            <Image
              src={"/assets/images/Iran-Khodro-Logo.png"}
              alt="Iran-Khodro-Logo.png"
              width={100}
              height={100}
            />
            <button className="lg:hidden text-2xl">
              <HiOutlineSearch />
            </button>
            <ul className="hidden lg:flex items-center gap-x-7">
              {headerURL.map((item) => (
                <li
                  key={item.id}
                  className={`transition-all duration-300 ease-in-out 
              ${
                pathname === item.path
                  ? "font-bold underline underline-offset-[14px] text-blue-700"
                  : "text-gray-500"
              }`}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <button className="hidden lg:flex items-center gap-x-2 rounded-md border px-4 py-3">
              <HiOutlineUser />
              <span className="inline-block">ورود / ثبت نام</span>
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-y-3 lg:hidden sm:items-center justify-center gap-x-6">
            <button
              onClick={() => router.push("/car-purchase")}
              className="flex flex-1 items-center justify-center gap-x-2 bg-slate-100 text-slate-700 font-medium px-10 py-2 rounded-md"
            >
              <span className="text-xl">
                <BsCarFrontFill />
              </span>
              <span>ثبت نام خودرو</span>
            </button>
            <button className="flex flex-1 items-center justify-center gap-x-2 bg-slate-100 text-slate-700 font-medium px-10 py-2 rounded-md">
              <span className="text-xl">
                <HiOutlineUser />
              </span>
              <span>ورود / ثبت نام</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
