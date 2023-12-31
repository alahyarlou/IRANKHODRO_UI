"use client";
import Image from "next/image";
import { GoAlertFill } from "react-icons/go";
import { IoIosAlert } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import {
  AiFillPlusCircle,
  AiOutlineEye,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import Carousel from "@/components/pages/home/carousel";

const carsImages: { title: string; path: string }[] = [
  {
    title: "پژو۲۰۶ تیپ ۵",
    path: "/assets/images/206.png",
  },
  {
    title: "رانا پلاس",
    path: "/assets/images/rana+.png",
  },
  {
    title: "پژو ۲۰۷",
    path: "/assets/images/207.png",
  },
  {
    title: "پژو پارس",
    path: "/assets/images/pars.png",
  },
  {
    title: "تارا",
    path: "/assets/images/tara.png",
  },
  {
    title: "سمند سورن پلاس",
    path: "/assets/images/soren.png",
  },
  {
    title: "دنا پلاس توربو",
    path: "/assets/images/dena+.png",
  },
  {
    title: "هایما S7",
    path: "/assets/images/haymaS7.png",
  },
];

export default function Home() {
  const renderCarImages = () => {
    return carsImages.map((item, index) => (
      <div
        key={index}
        className="bg-slate-100 rounded-md flex flex-col items-center justify-center p-4 relative"
      >
        <Image
          src={item.path}
          alt={item.title}
          width={150}
          height={150}
          className="mb-6 xl:mb-3 hover:scale-125 hover:cursor-pointer transition-all duration-300 ease-in-out"
        />
        <h2 className="font-medium absolute bottom-3">{item.title}</h2>
      </div>
    ));
  };
  return (
    <section className="sm:mx-4">
      <Carousel />
      <section className="flex flex-col lg:flex-row items-center justify-center gap-x-4 mt-5 lg:mt-16">
        <div className="p-4 sm:rounded-lg bg-slate-100 ">
          <h2 className="text-lg font-bold text-right">
            نکات قابل توجه مشتریان:
          </h2>
          <div className="flex flex-col gap-y-2 mt-6">
            <div className="flex items-center gap-x-2">
              <span className="text-red-600 text-lg">
                <GoAlertFill />
              </span>
              <h3 className="font-medium">احراز هویت</h3>
            </div>
            <p className="text-sm text-gray-500 leading-6">
              متقاضي محترم، شماره تلفن همراه معرفي شده در زمان ثبت نام حتما بايد
              به نام شما باشد.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 mt-8">
            <div className="flex items-center gap-x-2">
              <span className="text-violet-600 text-lg">
                <IoIosAlert />
              </span>
              <h3 className="font-medium">پاسخگویی به سوالات شما</h3>
            </div>
            <p className="text-sm text-gray-500 leading-6">
              مشتري محترم گروه صنعتي ايران خودرو شماره تلفن
              <span className="font-bold mx-2 text-gray-800">
                82272727 - 021
              </span>
              در ايام طرح هاي فروش اينترنتي بطور 24 ساعته و شبانه روزي جهت
              پاسخگوئي به سئوالات و راهنمائي در خدمت شما مي باشد .
            </p>
          </div>
          <div className="flex flex-col gap-y-2 mt-8">
            <div className="flex items-center gap-x-2">
              <span className="text-green-600 text-lg">
                <AiFillPlusCircle />
              </span>
              <h3 className="font-medium">ثبت نام</h3>
            </div>
            <p className="text-sm text-gray-500 leading-6">
              مشتری گرامی با توجه به تغيير روال ثبت اطلاعات مشتریان (ورود کاربر)
              جهت کلیه امور مرتبط با میزکار خود می بایست از لینک
              <span className="underline underline-offset-8 text-gray-800 inline-block mx-1 font-semibold">
                ثبت نام / تنظیم رمز
              </span>
              اقدام به تکمیل اطلاعات و تنظیم رمز نمایید.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-5 xl:mt-0 items-center justify-center gap-y-5">
          <h2 className="font-bold text-lg">نیاز به راهنمایی دارید؟</h2>
          <span className="text-7xl">
            <AiOutlineQuestionCircle />
          </span>
          <p className="text-center text-gray-500 text-sm mx-3 sm:mx-0">
            شما میتوانید از طریق فایل زیر، نحوه ثبت نام در سایت را مشاهده کنید:
          </p>
          <button className="flex lg:flex-col xl:flex-row items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded">
            <span className="">
              <BsDownload />
            </span>
            <span>دریافت راهنمای ثبت نام در سایت</span>
          </button>
        </div>
      </section>
      <section className="w-full">
        <div className="flex flex-col gap-y-3 mt-16">
          <h1 className="text-xl font-bold underline underline-offset-8 text-blue-700 mx-auto">
            لیست خودروها
          </h1>
          <p className="text-gray-500 text-sm mx-auto max-w-md text-center leading-7">
            با کلیک روی خودرو موردنظر،میتوانید اطلاعات مربوط به آن را در صفحه
            اختصاصی خودرو مشاهده کنید.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-10 mx-4 sm:mx-0">
          {renderCarImages()}
        </div>
        <button className="bg-blue-700 mt-10 text-sm text-white px-6 py-2 rounded-md mb-16 mx-auto flex items-center justify-center gap-x-2">
          <AiOutlineEye />
          مشاهده خودرو های بیشتر
        </button>
      </section>
    </section>
  );
}
