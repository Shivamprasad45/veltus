import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "https://res.cloudinary.com/dn633knvv/image/upload/v1740743449/pixelcut-export_upscaled_zl9ymz.png",
  "https://res.cloudinary.com/dn633knvv/image/upload/v1740744420/botle_upscaled-removebg-preview_upscaled_mfrrd5.png",
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
              width={images[1] ? 100 : 400}
              height={images[1] ? 100 : 400}
              className="w-full h-52 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ManufacturingSlider;
