import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "https://manuel.co.in/wp-content/uploads/2024/01/tyteen_front-e1705487716303.png",
  "https://manuel.co.in/wp-content/uploads/2024/01/tyteen_front-e1705487716303.png",
  "https://manuel.co.in/wp-content/uploads/2024/01/tyteen_front-e1705487716303.png",
];

const ManufacturingSlider = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-[#191970] flex items-center">
        Manufacturing <span className="text-orange-500 ml-2">Facility</span>
      </h2>
      <Swiper slidesPerView={3} spaceBetween={20} className="mt-6">
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="border rounded-lg overflow-hidden"
          >
            <Image
              src={src}
              alt={`Manufacturing Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ManufacturingSlider;
