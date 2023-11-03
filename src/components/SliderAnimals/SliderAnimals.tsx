import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SliderAnimalsStyled from "./SliderAnimalsStyled";
import { AnimalDataStructure } from "../../types";
import { NavLink } from "react-router-dom";

interface SliderProps {
  animals: AnimalDataStructure[];
}

const SliderAnimals = ({ animals }: SliderProps): React.ReactElement => {
  return (
    <SliderAnimalsStyled className="slider-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        loop={true}
        pagination={{
          bulletActiveClass: "swiper-pagination-bullet-active",
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <div>
          {animals.map((animal, index) => (
            <SwiperSlide key={index}>
              <img
                src={animal.imageUrl}
                alt={`A ${animal.species} with name ${animal.name}`}
                width={277.6}
                height={279.8}
              />
              <NavLink to={`/${animal.id}`}>Meet {animal.name}</NavLink>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </SliderAnimalsStyled>
  );
};

export default SliderAnimals;
