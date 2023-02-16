import { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

interface Props {
  mainSwiperIdX: number;
  sideSwiperIdX: number;
}

let mainSwiperIdXTemp: number;
let allowSlide: boolean = false;

function SlideToOrderSwiper({ mainSwiperIdX, sideSwiperIdX }: Props) {
  const swiper = useSwiper();
  const didMountRef = useRef<number>(0);

  useEffect(() => {
    if (didMountRef.current > 1) {
      if (sideSwiperIdX === 3) {
        mainSwiperIdXTemp = mainSwiperIdX;
        allowSlide = true;
        swiper.slideTo(4);
      } else {
        if (allowSlide) {
          swiper.slideTo(mainSwiperIdXTemp);
          allowSlide = false;
        }
      }
    }
    didMountRef.current++;
  }, [sideSwiperIdX]);

  return <></>;
}

export default SlideToOrderSwiper;
