import "./style.scss";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import CheckIcon from "@mui/icons-material/Check";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Navigation, EffectFade, Mousewheel, Scrollbar } from "swiper";
import Header from "../../components/Header";
import Button from "../../components/Button";
import ArrowDown from "../../components/ArrowDown";
import { Fade } from "react-awesome-reveal";

function OrderPage() {
  const mainSwiperRef = useRef<any>(null);
  const didMountRef = useRef<boolean>(false);
  const [activeIndex, setactiveIndex] = useState<number>(0);

  useEffect(() => {
    if (didMountRef.current) {
      document.querySelectorAll(".swiper-scrollbar-drag")[0].remove();
    }
    didMountRef.current = true;
  }, []);

  useEffect(() => {
    calcMainSwiperWidth();
    window.addEventListener("resize", calcMainSwiperWidth);
    return () => window.removeEventListener("resize", calcMainSwiperWidth);
  }, []);

  const calcMainSwiperWidth = (): void => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.style.width = `${window.innerWidth - 416}px`;
    }
  };

  return (
    <div className="order-page">
      <Header />
      <div className="order-page-swipers-cont">
        <Fade>
          <div className="order-page-main-swipers-wrapper">
            <Swiper
              className="main-swiper"
              ref={mainSwiperRef}
              loop={true}
              effect="fade"
              navigation={true}
              modules={[Navigation, EffectFade]}
            >
              <SwiperSlide>
                <img
                  src="../assets/Model3/slide-1-blue-aero-black.jpg"
                  alt="tesla"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../assets/Model3/slide-2-blue-aero-black.jpg"
                  alt="tesla"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../assets/Model3/slide-3-blue-aero-black.jpg"
                  alt="tesla"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../assets/Model3/slide-4-blue-aero-black.jpg"
                  alt="tesla"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="../assets/Model3/slide-5-blue-aero-black.jpg"
                  alt="tesla"
                />
              </SwiperSlide>
            </Swiper>
            <div className="main-swiper-vehicle-price-cont">
              <div className="main-swiper-vehicle-price-cont-icon">
                <KeyboardArrowUpRoundedIcon />
              </div>
              <p className="main-swiper-vehicle-price">$42,990 Vehicle Price</p>
            </div>
          </div>
        </Fade>
        <div className="order-page-options-swipers-wrapper">
          <Swiper
            className="options-swiper"
            direction={"vertical"}
            mousewheel
            speed={1000}
            scrollbar={{ draggable: true }}
            modules={[Mousewheel, Scrollbar]}
            simulateTouch={false}
            // onSlideChange={(e) => {
            //   setactiveIndex(e.activeIndex);
            // }}
          >
            <SwiperSlide>
              <div className="options-swiper-slide">
                <Fade direction="up">
                  <div className="options-swiper-slide-intro">
                    <h2>Model 3</h2>
                    <p className="delivery">Est. Delivery: Feb - Mar 2023</p>
                    <div className="specifications-cont">
                      <div>
                        <p>
                          272<span>mi</span>
                        </p>
                        <span>Range (EPA est.)</span>
                      </div>
                      <div>
                        <p>
                          140<span>mph</span>
                        </p>
                        <span>Top Speed</span>
                      </div>
                      <div>
                        <p>
                          5.8<span>sec</span>
                        </p>
                        <span>0-60 mph</span>
                      </div>
                    </div>
                    <Button className="btn" width="145px" option="gray">
                      Feature Details
                    </Button>
                  </div>
                </Fade>
                <ArrowDown className="options-swiper-cont-bottom-arrow" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="options-swiper-slide">
                <div className="options-swiper-slide-paint">
                  <h3>Paint</h3>
                  <div className="car-colors-cont">
                    <div className="color active">
                      <img
                        src="../assets/option-icons/Paint_White.avif"
                        alt="car color"
                      />
                    </div>
                    <div className="color">
                      <img
                        src="../assets/option-icons/Paint_Blue.avif"
                        alt="car color"
                      />
                    </div>
                    <div className="color">
                      <img
                        src="../assets/option-icons/Paint_Red.avif"
                        alt="car color"
                      />
                    </div>
                  </div>
                  <div className="color-name-price">
                    <p>White Multi-Coat</p>
                    <span>Included</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="options-swiper-slide">
                <div className="options-swiper-slide-wheels">
                  <h3>Wheels</h3>
                  <div className="car-wheels-cont">
                    <div className="wheel active">
                      <img
                        src="../assets/option-icons/option-wheels-18-aero.avif"
                        alt="car wheel"
                      />
                    </div>
                    <div className="wheel">
                      <img
                        src="../assets/option-icons/option-wheels-19-sport.avif"
                        alt="car wheel"
                      />
                    </div>
                  </div>
                  <div className="wheel-name-price">
                    <p>18’’ Aero Wheels</p>
                    <span>Included</span>
                  </div>
                  <p className="more-info">All-Season Tires</p>
                  <p className="more-info">Range (EPA est.) : 272mi</p>
                  <Button className="btn" width="145px" option="gray">
                    Learn More
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="options-swiper-slide">
                <div className="options-swiper-slide-interior">
                  <h3>Interior</h3>
                  <div className="car-interior-cont">
                    <div className="interior active">
                      <img
                        src="../assets/option-icons/Interior_Black.avif"
                        alt="car wheel"
                      />
                    </div>
                    <div className="interior">
                      <img
                        src="../assets/option-icons/Interior_White.avif"
                        alt="car wheel"
                      />
                    </div>
                  </div>
                  <div className="interior-name-price">
                    <p>All Black</p>
                    <span>Included</span>
                  </div>
                  <Button className="btn" width="145px" option="gray">
                    Feature Details
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="options-swiper-slide">
                <div className="options-swiper-slide-order">
                  <h3>Order Your Model 3</h3>
                  <p className="delivery">Est. Delivery: Feb - Mar 2023</p>
                  <div className="option-cont">
                    <CheckIcon />
                    <div>
                      <p>
                        Your design qualifies for a $7,500 federal tax credit
                        for eligible buyers.
                      </p>
                      <span>See Details</span>
                    </div>
                  </div>
                  <Button className="btn" width="288px" option="blue">
                    Continue to Payment
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="order-page-responsive">
        <div className="order-page-options-swipers-wrapper">
          <div className="order-page-responsive-img-cont">
            <img
              src="../assets/Model3/slide-1-blue-aero-black.jpg"
              alt="tesla"
            />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-intro">
              <h2>Model 3</h2>
              <p className="delivery">Est. Delivery: Feb - Mar 2023</p>
              <div className="specifications-cont">
                <div>
                  <p>
                    272<span>mi</span>
                  </p>
                  <span>Range (EPA est.)</span>
                </div>
                <div>
                  <p>
                    140<span>mph</span>
                  </p>
                  <span>Top Speed</span>
                </div>
                <div>
                  <p>
                    5.8<span>sec</span>
                  </p>
                  <span>0-60 mph</span>
                </div>
              </div>
              <Button className="btn" width="145px" option="gray">
                Feature Details
              </Button>
            </div>
          </div>
          <div className="order-page-responsive-img-cont">
            <img
              src="../assets/Model3/slide-2-blue-aero-black.jpg"
              alt="tesla"
            />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-paint">
              <h3>Paint</h3>
              <div className="car-colors-cont">
                <div className="color active">
                  <img
                    src="../assets/option-icons/Paint_White.avif"
                    alt="car color"
                  />
                </div>
                <div className="color">
                  <img
                    src="../assets/option-icons/Paint_Blue.avif"
                    alt="car color"
                  />
                </div>
                <div className="color">
                  <img
                    src="../assets/option-icons/Paint_Red.avif"
                    alt="car color"
                  />
                </div>
              </div>
              <div className="color-name-price">
                <p>White Multi-Coat</p>
                <span>Included</span>
              </div>
            </div>
          </div>
          <div className="order-page-responsive-img-cont">
            <img
              src="../assets/Model3/slide-4-blue-aero-black.jpg"
              alt="tesla"
            />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-wheels">
              <h3>Wheels</h3>
              <div className="car-wheels-cont">
                <div className="wheel active">
                  <img
                    src="../assets/option-icons/option-wheels-18-aero.avif"
                    alt="car wheel"
                  />
                </div>
                <div className="wheel">
                  <img
                    src="../assets/option-icons/option-wheels-19-sport.avif"
                    alt="car wheel"
                  />
                </div>
              </div>
              <div className="wheel-name-price">
                <p>18’’ Aero Wheels</p>
                <span>Included</span>
              </div>
              <p className="more-info">All-Season Tires</p>
              <p className="more-info">Range (EPA est.) : 272mi</p>
              <Button className="btn" width="145px" option="gray">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-page-responsive-img-cont">
            <img
              src="../assets/Model3/slide-5-blue-aero-black.jpg"
              alt="tesla"
            />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-interior">
              <h3>Interior</h3>
              <div className="car-interior-cont">
                <div className="interior active">
                  <img
                    src="../assets/option-icons/Interior_Black.avif"
                    alt="car wheel"
                  />
                </div>
                <div className="interior">
                  <img
                    src="../assets/option-icons/Interior_White.avif"
                    alt="car wheel"
                  />
                </div>
              </div>
              <div className="interior-name-price">
                <p>All Black</p>
                <span>Included</span>
              </div>
              <Button className="btn" width="145px" option="gray">
                Feature Details
              </Button>
            </div>
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-order">
              <h3>Order Your Model 3</h3>
              <p className="delivery">Est. Delivery: Feb - Mar 2023</p>
              <div className="option-cont">
                <CheckIcon />
                <div>
                  <p>
                    Your design qualifies for a $7,500 federal tax credit for
                    eligible buyers.
                  </p>
                  <span>See Details</span>
                </div>
              </div>
              <Button className="btn" width="100%" option="blue">
                Continue to Payment
              </Button>
            </div>
          </div>
          <div className="main-swiper-vehicle-price-cont">
            <div className="main-swiper-vehicle-price-cont-icon">
              <KeyboardArrowUpRoundedIcon />
            </div>
            <p className="main-swiper-vehicle-price">$42,990 Vehicle Price</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
