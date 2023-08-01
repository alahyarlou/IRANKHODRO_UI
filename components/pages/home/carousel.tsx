"use client";
import Image from "next/image";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
// css
import "swiper/css";
import "swiper/css/pagination";

// props type
interface SwiperSilderProps {
  id: number;
  path: string;
  title: string;
}
const swiperSidle: SwiperSilderProps[] = [
  {
    id: 1,
    path: "/assets/images/slide_01.jpg",
    title: "slide 01",
  },
  {
    id: 2,
    path: "/assets/images/slide_02.jpg",
    title: "slide 02",
  },
  {
    id: 3,
    path: "/assets/images/slide_03.jpg",
    title: "slide 03",
  },
  {
    id: 4,
    path: "/assets/images/slide_04.jpg",
    title: "slide 04",
  },
];

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      className="sm:rounded-md w-full h-[200px] sm:h-[300px] xl:h-[400px] mt-4 lg:mt-8"
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
    >
      {swiperSidle.map((item: SwiperSilderProps) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.path}
            alt={item.title}
            width={2000}
            height={1000}
            quality={50}
            className="object-cover h-full w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
