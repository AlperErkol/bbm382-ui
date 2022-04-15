
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import TestimonialItem from "./TestimonialItem";



const Slider = () => {


  const testimonials = [
    {
      name : "John Doe",
      position : "UI/UX Designer"
    },
    {
      name : "John Doe",
      position : "UI/UX Designer"
    },
    {
      name : "John Doe",
      position : "UI/UX Designer"
    },
    {
      name : "John Doe",
      position : "UI/UX Designer"
    },
    {
      name : "John Doe",
      position : "UI/UX Designer"
    }
  ];




  return (
    <>
              <Swiper
            slidesPerView={3}
            spaceBetween={30}
            className="mySwiper"
          >
            {testimonials.map(data => (
            <SwiperSlide>
              <TestimonialItem data={data}/>
            </SwiperSlide>
            ))}

          </Swiper>
    </>
  )
}

export default Slider