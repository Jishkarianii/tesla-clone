import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from 'swiper';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/scrollbar';

import { useEffect, useState, useRef } from "react";
import MainSwiperItem from "../../components/MainSwiperItem";
import MainSwiperInner from "../../components/MainSwiperInner";

interface SwiperItem {
  img: string;
}

const swiperItems: SwiperItem[] = [
  { img: "./assets/Model3/Homepage-Model-3.jpg" },
  { img: "./assets/ModelY/Homepage-Model-Y.jpg" },
  { img: "./assets/ModelS/Homepage-Model-S.jpg" },
  { img: "./assets/ModelX/Homepage-Model-X.jpg" },
];

function MainPage() {
  const didMountRef = useRef<boolean>(false);
  const [activeIndex, setactiveIndex] = useState<number>(0);

  useEffect(() => {
    if (didMountRef.current) { 
      document.querySelectorAll(".swiper-scrollbar-drag")[0].remove()
    }
    didMountRef.current = true;
  }, [])

  return (
    <div className="main-swiper-page">
      <Swiper
        className="main-page-swiper"
        direction={"vertical"}
        mousewheel
        speed={1000}
        scrollbar={{ draggable: true }}
        modules={[Mousewheel, Scrollbar]}
        onSlideChange={(e) => {
          setactiveIndex(e.activeIndex);
        }}
      >
        {swiperItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <MainSwiperItem 
                img={item.img}
            />
          </SwiperSlide>
        ))}
        <MainSwiperInner activeIndex={activeIndex} />
      </Swiper>
    </div>
  );
}

export default MainPage;
