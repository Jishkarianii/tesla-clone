import "./style.scss";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import MainSwiperItem from "../../components/MainSwiperItem";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Button from "../../components/Button";

function MainPage() {
  return (
    <div className="main-swiper-page">
      <Swiper
        className="main-page-swiper"
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <MainSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiperItem />
        </SwiperSlide>
        <SwiperSlide>
          <MainSwiperItem />
        </SwiperSlide>
      </Swiper>
      <div className="main-swiper-item-inner-cont">
        <div className="main-swiper-item-inner-cont-title">
          <h2>Model 3</h2>
          <p>Leasing starting at $349/mo</p>
        </div>
        <div className="main-swiper-item-inner-cont-bottom">
          <div className="main-swiper-item-inner-cont-bottom-btns">
            <Button width="264px" option="black" action={() => null}>
              Custom Order
            </Button>
            <Button width="264px" option="gray" action={() => null}>
              Demo Drive
            </Button>
          </div>
          <div className="main-swiper-item-inner-cont-bottom-arrow">
            <ExpandMoreRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
