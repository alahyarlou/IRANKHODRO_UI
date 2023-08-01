import Image from "next/image";
// components
import BuyCard from "@/components/pages/car-purchase/card";
import FilterCar from "@/components/pages/car-purchase/sections/filterCar";
import Steper from "@/components/pages/car-purchase/sections/Steper";

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

const carList: BuyCardPropsType[] = [
  {
    imgdesc: "206",
    imgSrc: "/assets/images/206.png",
    carName: "پژو ۲۰۶ تیپ ۵ (طرح پیش فروش محصولات ایران خودرو)",
    engine: "۱۶۰۰ُU5",
    letter_section: 23452,
    gearbox: "دستی(۵دنده)",
    insurance: "شخص ثالث",
    combined_consumption: "۶.۴ لیتر",
    delivery_date: "۱هفته",
    price: "210,000,000",
  },
  {
    imgdesc: "rana",
    imgSrc: "/assets/images/rana+.png",
    carName: "رانا پلاس توربو (طرح پیش فروش محصولات ایران خودرو)",
    engine: "۱۶۰۰ُU5",
    letter_section: 23452,
    gearbox: "دستی(۵دنده)",
    insurance: "شخص ثالث",
    combined_consumption: "۶.۴ لیتر",
    delivery_date: "۱هفته",
    price: "210,000,000",
  },
  {
    imgdesc: "۲۰۷",
    imgSrc: "/assets/images/207.png",
    carName: "پژو ۲۰۷ (طرح پیش فروش محصولات ایران خودرو)",
    engine: "۱۶۰۰ُU5",
    letter_section: 23452,
    gearbox: "دستی(۵دنده)",
    insurance: "شخص ثالث",
    combined_consumption: "۶.۴ لیتر",
    delivery_date: "۱هفته",
    price: "210,000,000",
  },
];
const CarPurchase = () => {
  return (
    <div className="my-5 sm:mx-4">
      <section className="w-full h-[200px] overflow-hidden md:rounded-md relative">
        <Image
          src={"/assets/images/buy-car.jpg"}
          alt="bannerTop"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute w-full h-full bg-blue-900 bg-opacity-60 top-0"></div>
        <h1 className="text-white absolute top-1/2 left-1/2 text-2xl sm:text-3xl font-black text-center -translate-x-1/2 -translate-y-1/2">
          انتخاب و خرید خودرو
        </h1>
      </section>
      <section className="bg-gray-100 p-4 sm:rounded-md mt-5">
        <Steper />
      </section>
      <section className="grid grid-cols-12 items-start gap-4 mt-6">
        <div className="hidden lg:inline-block lg:col-span-3 rounded-md border p-5 bg-white">
          <FilterCar />
        </div>
        <div className="col-span-12 lg:col-span-9  grid grid-cols-1 md:grid-cols-2 gap-5 mx-4">
          {carList.map((item, index) => (
            <BuyCard key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarPurchase;
