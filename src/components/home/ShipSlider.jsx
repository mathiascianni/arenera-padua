import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { ships } from "../../api/ships";
import ShipSlide from "./ShipSlide";
import { Navigation, Pagination } from "swiper/modules";
import { Title } from "../ui"
export default function ShipSlider() {
  return (
    <section className="mb-12 lg:mb-24">
      <Title hierachy={'h2'}>Nuestras <span className="text-primary">Embarcaciones</span></Title>
      <Swiper
        style={{
          "--swiper-pagination-color": "#FFCB3A",
          "--swiper-navigation-color": "#FFCB3A",
          "--swiper-navigation-size": "24px"
        }}
        spaceBetween={48}
        slidesPerView={1}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {ships.map((ship, index) => (
          <SwiperSlide key={index}>
            <ShipSlide ship={ship} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
