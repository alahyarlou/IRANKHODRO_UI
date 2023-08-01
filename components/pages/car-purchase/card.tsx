import Image from "next/image";
import { BsCreditCard2Back } from "react-icons/bs";

interface BuyCardPropsType {
  imgdesc: string;
  imgSrc: string;
  carName: string;
  engine: string;
  letter_section: number;
  gearbox: string;
  insurance: string;
  combined_consumption: string;
  delivery_date: string;
  price: string;
}
const BuyCard = (props: BuyCardPropsType) => {
  return (
    <div className="shadow-md bg-white rounded-md">
      <div className="w-full flex flex-col items-center justify-center h-[250px] bg-gray-100">
        <Image
          src={props.imgSrc}
          alt={props.imgdesc}
          width={350}
          height={350}
          className="mx-auto object-cover hover:scale-125 transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="p-5">
        <h2 className="text-gray-800 font-semibold">{props.carName}</h2>
        <ul className="grid grid-cols-1 xl:grid-cols-2 items-center gap-4 justify-between mt-4 w-full">
          <li className="text-gray-400">
            <span>موتور:</span>
            <span className="mr-1">{props.engine}</span>
          </li>
          <li className="text-gray-400">
            <span>بخش نامه:</span>
            <span className="mr-1">{props.letter_section}</span>
          </li>
          <li className="text-gray-400">
            <span>گیربکس:</span>
            <span className="mr-1">{props.gearbox}</span>
          </li>
          <li className="text-gray-400">
            <span>بیمه:</span>
            <span className="mr-1">{props.insurance}</span>
          </li>
          <li className="text-gray-400">
            <span>مصرف ترکیبی:</span>
            <span className="mr-1">{props.combined_consumption}</span>
          </li>
          <li className="text-gray-400">
            <span>موعد تحویل:</span>
            <span className="mr-1">{props.delivery_date}</span>
          </li>
        </ul>
        <div className="flex flex-col-reverse gap-4 xl:flex-row items-center justify-between mt-6">
          <button className="flex items-center justify-center gap-x-2 bg-blue-700 text-white px-10 py-3 rounded-md w-full xl:w-fit text-center">
            <span className="text-xl">
              <BsCreditCard2Back />
            </span>
            ثبت سفارش
          </button>
          <p className="text-xl font-bold text-gray-700">
            {props.price}
            <span className="mr-1">ت</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
