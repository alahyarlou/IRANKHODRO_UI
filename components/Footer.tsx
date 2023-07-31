import Image from "next/image";
// icons
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white border-t p-5">
      <div className="container mx-auto flex flex-col">
        <Image
          src={"/assets/images/Iran-Khodro-Logo.png"}
          alt="Iran-Khodro-Logo.png"
          className="mx-auto"
          width={200}
          height={200}
        />
        <div className="flex gap-x-10 justify-between border-t mt-5 pt-5">
          <ul className="flex flex-col gap-y-4 list-disc">
            <li className="font-bold text-blue-700">ارتباط با ما</li>
            <li className="flex items-start gap-x-2 text-gray-500">
              <span className="flex-shrink-0 text-gray-400">
                <HiOutlineLocationMarker />
              </span>
              <span className="text-sm">
                آدرس: تهران - كيلومتر 14 جاده مخصوص كرج (بزرگراه شهيد لشكري ) ،
                شركت ايران خودرو
              </span>
            </li>
            <li className="flex items-start gap-x-2 text-gray-500">
              <span>
                <HiOutlinePhone className="flex-shrink-0 text-gray-400" />
              </span>
              <span className="text-sm">
                مركز پاسخگويي ايران خودرو : 096440
              </span>
            </li>
            <li className="flex items-start gap-x-2 text-gray-500">
              <span>
                <BiSupport className="flex-shrink-0 text-gray-400" />
              </span>
              <span className="text-sm">
                پشتیبانی سایت فروش اینترنتی : 82272727-021
              </span>
            </li>
            <li className="flex items-start gap-x-2 text-gray-500">
              <span>
                <MdOutlineAlternateEmail className="flex-shrink-0 text-gray-400" />
              </span>
              <span className="text-sm">ایمیل: info@ikco.ir</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4 list-disc">
            <li className="font-bold text-blue-700">مطالب مرتبط</li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              ثبت نظرات و شکایات (درخصوص عملکرد سایت)
            </li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              سوالات متداول
            </li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              سایت گروه صنعتی ایران خودرو
            </li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              اپليکيشن خدمات پس از فروش ايران خودرو
            </li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              تماس با ما
            </li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              درباره ما
            </li>
            <li className="flex items-start gap-x-2 text-gray-500 text-sm">
              قوانین و مقررات
            </li>
          </ul>
          <ul className="flex flex-col gap-y-4 list-disc">
            <li className="font-bold text-blue-700">نماد اعتماد</li>
            <li className="list-none">
              <Image
                src={"/assets/images/nemad.png"}
                alt="enemad icon"
                width={200}
                height={200}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;