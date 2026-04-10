import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ImageSlider = ({ images, autoplay = true, slidesPerView = 1, loop = true }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={autoplay ? { delay: 3000 } : false}
      loop={loop}
      slidesPerView={slidesPerView}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;