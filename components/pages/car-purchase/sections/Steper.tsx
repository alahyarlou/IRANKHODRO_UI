import { BsCheck } from "react-icons/bs";

const Steper = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-between max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <div className="bg-gray-200  text-gray-400 rounded-full flex items-center justify-center w-12 h-12 text-center align-middle text-xl font-bold">
          <span className="text-3xl">
            <BsCheck />
          </span>
        </div>
        <p className="font-medium text-gray-400">ثبت نام و ورود</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <div className="bg-blue-700 text-white rounded-full flex items-center justify-center w-12 h-12 text-center align-middle text-xl font-bold">
          2
        </div>
        <p className="text-blue-700 font-bold">انتخاب و خرید خودرو</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <div className="bg-gray-200 text-gray-400 rounded-full flex items-center justify-center w-12 h-12 text-center align-middle text-xl font-bold">
          3
        </div>
        <p className="font-medium text-gray-400">مشاهده جزئیات سفارش</p>
      </div>
      <div className="flex flex-col items-center gap-y-2 justify-center">
        <div className="bg-gray-200 text-gray-400 rounded-full flex items-center justify-center w-12 h-12 text-center align-middle text-xl font-bold">
          4
        </div>
        <p className="font-medium text-gray-400">دریافت کد سفارش</p>
      </div>
    </div>
  );
};

export default Steper;
