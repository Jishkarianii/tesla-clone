import "./style.scss";
import { useState, useEffect, useRef } from "react";
import Button from "../Button";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import ArrowDown from "../ArrowDown";

const customLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface SwiperData {
  carName: string;
  subText?: string;
}

const swiperData: SwiperData[] = [
  {
    carName: "Model 3",
    subText: "Leasing starting at $349/mo",
  },
  {
    carName: "Model Y",
    subText: "",
  },
  {
    carName: "Model S",
    subText: "Schedule a Demo Drive",
  },
  {
    carName: "Model X",
    subText: "Schedule a Demo Drive",
  },
];

interface Props {
  activeIndex: number;
}

function MainSwiperInner({ activeIndex }: Props) {
  const didMountRef = useRef<number>(0);
  const [index, setIndex] = useState<number>(activeIndex);
  const [isHide, setIsHide] = useState<boolean>(false);

  // Change slide data with animation
  useEffect(() => {
    if (didMountRef.current > 1) {
      setIsHide(true);
      setTimeout(() => {
        setIndex(activeIndex);
        setIsHide(false);
      }, 500);
    }
    didMountRef.current++;
  }, [activeIndex]);

  return (
    <>
      <div className="main-swiper-item-inner-cont">
        <div className="main-swiper-item-inner-cont-title">
          <Fade direction="up">
            <h2 className={`${isHide && "hide"}`}>
              {swiperData[index].carName}
            </h2>
          </Fade>
          <Fade direction="up" delay={600}>
            <p className={`${isHide && "hide"}`}>{swiperData[index].subText}</p>
          </Fade>
        </div>
      </div>
      <div className="main-swiper-item-inner-cont-bottom">
        <div className="main-swiper-item-inner-cont-bottom-btns">
          <Reveal keyframes={customLeft} delay={600}>
            <Button
              className={`${isHide && "hide"}`}
              width="264px"
              option="black"
              action={() => null}
            >
              Custom Order
            </Button>
          </Reveal>
          <Reveal keyframes={customRight} delay={600}>
            <Button
              className={`${isHide && "hide"}`}
              width="264px"
              option="gray"
              action={() => null}
            >
              Demo Drive
            </Button>
          </Reveal>
        </div>
        {activeIndex === 0 && (
          <Fade delay={1600}>
            <ArrowDown className="main-swiper-item-inner-cont-bottom-arrow" />
          </Fade>
        )}
      </div>
    </>
  );
}

export default MainSwiperInner;
