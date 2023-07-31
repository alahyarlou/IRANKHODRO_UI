"use client";

import Image from "next/image";
import Link from "next/link";
// navigation
import { usePathname } from "next/navigation";
// icons
import { HiOutlineUser } from "react-icons/hi";

const headerURL = [
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

  return (
    <div className="container mx-auto mt-5">
      <div className="flex items-center justify-between border rounded-md px-6 py-2">
        <Image
          src={"/assets/images/Iran-Khodro-Logo.png"}
          alt="Iran-Khodro-Logo.png"
          width={100}
          height={100}
        />
        <ul className="flex items-center gap-x-7">
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
        <button className="flex items-center gap-x-2 rounded-md border px-4 py-3">
          <HiOutlineUser />
          <span>ورود / ثبت نام</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
