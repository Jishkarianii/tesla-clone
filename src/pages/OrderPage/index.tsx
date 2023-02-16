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
import { useParams } from "react-router-dom";
import SlideToOrderSwiper from "../../components/SlideToOrderSwiper";

interface TeslaType {
  model: string;
  range: number;
  topSpeed: number;
  acceleration: number;
  price: number;
  paint: {
    white: {
      img: string;
      name: string;
      cost: number;
    };
    blue: {
      img: string;
      name: string;
      cost: number;
    };
    red: {
      img: string;
      name: string;
      cost: number;
    };
  };
  wheels: [
    {
      img: string;
      name: string;
      range: string;
      cost: number;
    },
    {
      img: string;
      name: string;
      range: string;
      cost: number;
    }
  ];
  salon: {
    black: {
      img: string;
      name: string;
      cost: number;
    };
    white: {
      img: string;
      name: string;
      cost: number;
    };
  };
  interior: {
    black: {
      wheels: {
        aero: {
          white: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          blue: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          red: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
        };
        sport: {
          white: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          blue: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          red: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
        };
      };
    };
    white: {
      wheels: {
        aero: {
          white: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          blue: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          red: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
        };
        sport: {
          white: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          blue: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
          red: [
            { img: string },
            { img: string },
            { img: string },
            { img: string },
            { img: string }
          ];
        };
      };
    };
  };
}

const tesla: TeslaType[] = [
  {
    model: "Model 3",
    range: 272,
    topSpeed: 140,
    acceleration: 5.8,
    price: 42990,
    paint: {
      white: {
        img: "../assets/option-icons/Paint_White.avif",
        name: "White Multi-Coat",
        cost: 0,
      },
      blue: {
        img: "../assets/option-icons/Paint_Blue.avif",
        name: "Deep Blue Metallic",
        cost: 1000,
      },
      red: {
        img: "../assets/option-icons/Paint_Red.avif",
        name: "Red Multi-Coat",
        cost: 2000,
      },
    },
    wheels: [
      {
        img: "../assets/option-icons/option-wheels-18-aero.avif",
        name: "18’’ Aero Wheels",
        range: "Range (EPA est.) : 272mi",
        cost: 0,
      },
      {
        img: "../assets/option-icons/option-wheels-19-sport.avif",
        name: "19’’ Sport Wheels",
        range: "Range (est.) : 267mi",
        cost: 1500,
      },
    ],
    salon: {
      black: {
        img: "../assets/option-icons/Interior_Black.avif",
        name: "All Black",
        cost: 0,
      },
      white: {
        img: "../assets/option-icons/Interior_White.avif",
        name: "Black and White",
        cost: 1000,
      },
    },
    interior: {
      black: {
        wheels: {
          aero: {
            white: [
              { img: "../assets/Model3/slide-1-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-2-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-3-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-4-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-5-white-aero-black.jpg" },
            ],
            blue: [
              { img: "../assets/Model3/slide-1-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-2-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-3-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-4-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-5-blue-aero-black.jpg" },
            ],
            red: [
              { img: "../assets/Model3/slide-1-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-2-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-3-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-4-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-5-red-aero-black.jpg" },
            ],
          },
          sport: {
            white: [
              { img: "../assets/Model3/slide-1-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-2-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-3-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-4-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-5-white-sport-black.jpg" },
            ],
            blue: [
              { img: "../assets/Model3/slide-1-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-2-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-3-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-4-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-5-blue-sport-black.jpg" },
            ],
            red: [
              { img: "../assets/Model3/slide-1-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-2-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-3-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-4-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-5-red-sport-black.jpg" },
            ],
          },
        },
      },
      white: {
        wheels: {
          aero: {
            white: [
              { img: "../assets/Model3/slide-1-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-2-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-3-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-4-white-aero-black.jpg" },
              { img: "../assets/Model3/slide-5-white-sport-white.jpg" },
            ],
            blue: [
              { img: "../assets/Model3/slide-1-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-2-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-3-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-4-blue-aero-black.jpg" },
              { img: "../assets/Model3/slide-5-blue-sport-white.jpg" },
            ],
            red: [
              { img: "../assets/Model3/slide-1-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-2-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-3-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-4-red-aero-black.jpg" },
              { img: "../assets/Model3/slide-5-red-sport-white.jpg" },
            ],
          },
          sport: {
            white: [
              { img: "../assets/Model3/slide-1-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-2-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-3-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-4-white-sport-black.jpg" },
              { img: "../assets/Model3/slide-5-white-sport-white.jpg" },
            ],
            blue: [
              { img: "../assets/Model3/slide-1-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-2-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-3-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-4-blue-sport-black.jpg" },
              { img: "../assets/Model3/slide-5-blue-sport-white.jpg" },
            ],
            red: [
              { img: "../assets/Model3/slide-1-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-2-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-3-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-4-red-sport-black.jpg" },
              { img: "../assets/Model3/slide-5-red-sport-white.jpg" },
            ],
          },
        },
      },
    },
  },
];

interface ImagesType {
  img: string;
}

function OrderPage() {
  const { carId } = useParams<string>();
  const [car, setCar] = useState<TeslaType>();
  const mainSwiperRef = useRef<any>(null);
  const didMountRef = useRef<boolean>(false);
  const [mainSwiperIdX, setMainSwiperIdX] = useState<number>(0);
  const [sideSwiperIdX, setSideSwiperIdX] = useState<number>(0);
  const [images, setImages] = useState<ImagesType[]>();
  const [paint, setPaint] = useState<string>("white");
  const [wheels, setWheels] = useState<string>("first");
  const [interior, setInterior] = useState<string>("black");
  const [price, setPrice] = useState<number>(0);

  // Calculate price by selected options
  useEffect(() => {
    if (carId) {
      const idx = parseInt(carId);

      if (interior === "black" && wheels === "first" && paint === "white") {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.black.cost +
            tesla[idx].wheels[0].cost +
            tesla[idx].paint.white.cost
        );
      } else if (
        interior === "black" &&
        wheels === "first" &&
        paint === "blue"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.black.cost +
            tesla[idx].wheels[0].cost +
            tesla[idx].paint.blue.cost
        );
      } else if (
        interior === "black" &&
        wheels === "first" &&
        paint === "red"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.black.cost +
            tesla[idx].wheels[0].cost +
            tesla[idx].paint.red.cost
        );
      } else if (
        interior === "black" &&
        wheels === "second" &&
        paint === "white"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.black.cost +
            tesla[idx].wheels[1].cost +
            tesla[idx].paint.white.cost
        );
      } else if (
        interior === "black" &&
        wheels === "second" &&
        paint === "blue"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.black.cost +
            tesla[idx].wheels[1].cost +
            tesla[idx].paint.blue.cost
        );
      } else if (
        interior === "black" &&
        wheels === "second" &&
        paint === "red"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.black.cost +
            tesla[idx].wheels[1].cost +
            tesla[idx].paint.red.cost
        );
      } else if (
        interior === "white" &&
        wheels === "first" &&
        paint === "white"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.white.cost +
            tesla[idx].wheels[0].cost +
            tesla[idx].paint.white.cost
        );
      } else if (
        interior === "white" &&
        wheels === "first" &&
        paint === "blue"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.white.cost +
            tesla[idx].wheels[0].cost +
            tesla[idx].paint.blue.cost
        );
      } else if (
        interior === "white" &&
        wheels === "first" &&
        paint === "red"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.white.cost +
            tesla[idx].wheels[0].cost +
            tesla[idx].paint.red.cost
        );
      } else if (
        interior === "white" &&
        wheels === "second" &&
        paint === "white"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.white.cost +
            tesla[idx].wheels[1].cost +
            tesla[idx].paint.white.cost
        );
      } else if (
        interior === "white" &&
        wheels === "second" &&
        paint === "blue"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.white.cost +
            tesla[idx].wheels[1].cost +
            tesla[idx].paint.blue.cost
        );
      } else if (
        interior === "white" &&
        wheels === "second" &&
        paint === "red"
      ) {
        setPrice(
          tesla[idx].price +
            tesla[idx].salon.white.cost +
            tesla[idx].wheels[1].cost +
            tesla[idx].paint.red.cost
        );
      }
    }
  }, [paint, wheels, interior]);

  // Set photos in slider by selected options
  useEffect(() => {
    if (carId) {
      const idx = parseInt(carId);

      if (interior === "black" && wheels === "first" && paint === "white") {
        setImages(tesla[idx].interior.black.wheels.aero.white);
      } else if (
        interior === "black" &&
        wheels === "first" &&
        paint === "blue"
      ) {
        setImages(tesla[idx].interior.black.wheels.aero.blue);
      } else if (
        interior === "black" &&
        wheels === "first" &&
        paint === "red"
      ) {
        setImages(tesla[idx].interior.black.wheels.aero.red);
      } else if (
        interior === "black" &&
        wheels === "second" &&
        paint === "white"
      ) {
        setImages(tesla[idx].interior.black.wheels.sport.white);
      } else if (
        interior === "black" &&
        wheels === "second" &&
        paint === "blue"
      ) {
        setImages(tesla[idx].interior.black.wheels.sport.blue);
      } else if (
        interior === "black" &&
        wheels === "second" &&
        paint === "red"
      ) {
        setImages(tesla[idx].interior.black.wheels.sport.red);
      } else if (
        interior === "white" &&
        wheels === "first" &&
        paint === "white"
      ) {
        setImages(tesla[idx].interior.white.wheels.aero.white);
      } else if (
        interior === "white" &&
        wheels === "first" &&
        paint === "blue"
      ) {
        setImages(tesla[idx].interior.white.wheels.aero.blue);
      } else if (
        interior === "white" &&
        wheels === "first" &&
        paint === "red"
      ) {
        setImages(tesla[idx].interior.white.wheels.aero.red);
      } else if (
        interior === "white" &&
        wheels === "second" &&
        paint === "white"
      ) {
        setImages(tesla[idx].interior.white.wheels.sport.white);
      } else if (
        interior === "white" &&
        wheels === "second" &&
        paint === "blue"
      ) {
        setImages(tesla[idx].interior.white.wheels.sport.blue);
      } else if (
        interior === "white" &&
        wheels === "second" &&
        paint === "red"
      ) {
        setImages(tesla[idx].interior.white.wheels.sport.red);
      }
    }
  }, [paint, wheels, interior]);

  // Set default
  useEffect(() => {
    if (carId) {
      const idx = parseInt(carId);
      setCar(tesla[idx]);
    }
  }, []);

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

  const selectColor = (color: string): void => {
    setPaint(color);
  };

  const selectWheels = (wheel: string): void => {
    setWheels(wheel);
  };

  const selectInterior = (interior: string): void => {
    setInterior(interior);
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
              effect="fade"
              navigation={true}
              modules={[Navigation, EffectFade]}
              onSlideChange={(e) => {
                setMainSwiperIdX(e.activeIndex);
              }}
            >
              {images &&
                images.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={item.img} alt="tesla" />
                  </SwiperSlide>
                ))}
              <SlideToOrderSwiper
                sideSwiperIdX={sideSwiperIdX}
                mainSwiperIdX={mainSwiperIdX}
              />
            </Swiper>
            <div className="main-swiper-vehicle-price-cont">
              <div className="main-swiper-vehicle-price-cont-icon">
                <KeyboardArrowUpRoundedIcon />
              </div>
              <p className="main-swiper-vehicle-price">
                ${price.toLocaleString("en-US")} Vehicle Price
              </p>
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
            onSlideChange={(e) => {
              setSideSwiperIdX(e.activeIndex);
            }}
          >
            <SwiperSlide>
              <div className="options-swiper-slide">
                <Fade direction="up">
                  <div className="options-swiper-slide-intro">
                    <h2>{car?.model}</h2>
                    <p className="delivery">Est. Delivery: Feb - Mar 2023</p>
                    <div className="specifications-cont">
                      <div>
                        <p>
                          {car?.range}
                          <span>mi</span>
                        </p>
                        <span>Range (EPA est.)</span>
                      </div>
                      <div>
                        <p>
                          {car?.topSpeed}
                          <span>mph</span>
                        </p>
                        <span>Top Speed</span>
                      </div>
                      <div>
                        <p>
                          {car?.acceleration}
                          <span>sec</span>
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
                    <div
                      className={`color ${paint === "white" ? "active" : ""}`}
                      onClick={() => selectColor("white")}
                    >
                      <img src={car?.paint.white.img} alt="car color" />
                    </div>
                    <div
                      className={`color ${paint === "blue" ? "active" : ""}`}
                      onClick={() => selectColor("blue")}
                    >
                      <img src={car?.paint.blue.img} alt="car color" />
                    </div>
                    <div
                      className={`color ${paint === "red" ? "active" : ""}`}
                      onClick={() => selectColor("red")}
                    >
                      <img src={car?.paint.red.img} alt="car color" />
                    </div>
                  </div>
                  <div className="color-name-price">
                    <p>
                      {paint === "white"
                        ? car?.paint.white.name
                        : paint === "blue"
                        ? car?.paint.blue.name
                        : car?.paint.red.name}
                    </p>
                    <span>
                      {paint === "white"
                        ? "Included"
                        : paint === "blue"
                        ? `$${car?.paint.blue.cost.toLocaleString("en-US")}`
                        : `$${car?.paint.red.cost.toLocaleString("en-US")}`}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="options-swiper-slide">
                <div className="options-swiper-slide-wheels">
                  <h3>Wheels</h3>
                  <div className="car-wheels-cont">
                    <div
                      className={`wheel ${wheels === "first" ? "active" : ""}`}
                      onClick={() => selectWheels("first")}
                    >
                      <img src={car?.wheels[0].img} alt="car wheel" />
                    </div>
                    <div
                      className={`wheel ${wheels === "second" ? "active" : ""}`}
                      onClick={() => selectWheels("second")}
                    >
                      <img src={car?.wheels[1].img} alt="car wheel" />
                    </div>
                  </div>
                  <div className="wheel-name-price">
                    <p>
                      {wheels === "first"
                        ? car?.wheels[0].name
                        : car?.wheels[1].name}
                    </p>
                    <span>
                      {wheels === "first"
                        ? "Included"
                        : `$${car?.wheels[1].cost.toLocaleString("en-US")}`}
                    </span>
                  </div>
                  <p className="more-info">All-Season Tires</p>
                  <p className="more-info">
                    {wheels === "first"
                      ? car?.wheels[0].range
                      : car?.wheels[1].range}
                  </p>
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
                    <div
                      className={`interior ${
                        interior === "black" ? "active" : ""
                      }`}
                      onClick={() => selectInterior("black")}
                    >
                      <img src={car?.salon.black.img} alt="car interior" />
                    </div>
                    <div
                      className={`interior ${
                        interior === "white" ? "active" : ""
                      }`}
                      onClick={() => selectInterior("white")}
                    >
                      <img src={car?.salon.white.img} alt="car interior" />
                    </div>
                  </div>
                  <div className="interior-name-price">
                    <p>
                      {interior === "black"
                        ? car?.salon.black.name
                        : car?.salon.white.name}
                    </p>
                    <span>
                      {interior === "black"
                        ? "Included"
                        : `$${car?.salon.white.cost.toLocaleString("en-US")}`}
                    </span>
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
                  <h3>Order Your {car?.model}</h3>
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
          <Fade triggerOnce>
            <div className="order-page-responsive-img-cont">
              <img src={images && images[0].img} alt="tesla" />
            </div>
          </Fade>
          <Fade direction="up" triggerOnce>
            <div className="options-swiper-slide">
              <div className="options-swiper-slide-intro">
                <h2>{car?.model}</h2>
                <p className="delivery">Est. Delivery: Feb - Mar 2023</p>
                <div className="specifications-cont">
                  <div>
                    <p>
                      {car?.range}
                      <span>mi</span>
                    </p>
                    <span>Range (EPA est.)</span>
                  </div>
                  <div>
                    <p>
                      {car?.topSpeed}
                      <span>mph</span>
                    </p>
                    <span>Top Speed</span>
                  </div>
                  <div>
                    <p>
                      {car?.acceleration}
                      <span>sec</span>
                    </p>
                    <span>0-60 mph</span>
                  </div>
                </div>
                <Button className="btn" width="145px" option="gray">
                  Feature Details
                </Button>
              </div>
            </div>
          </Fade>
          <div className="order-page-responsive-img-cont">
            <img src={images && images[1].img} alt="tesla" />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-paint">
              <h3>Paint</h3>
              <div className="car-colors-cont">
                <div
                  className={`color ${paint === "white" ? "active" : ""}`}
                  onClick={() => selectColor("white")}
                >
                  <img src={car?.paint.white.img} alt="car color" />
                </div>
                <div
                  className={`color ${paint === "blue" ? "active" : ""}`}
                  onClick={() => selectColor("blue")}
                >
                  <img src={car?.paint.blue.img} alt="car color" />
                </div>
                <div
                  className={`color ${paint === "red" ? "active" : ""}`}
                  onClick={() => selectColor("red")}
                >
                  <img src={car?.paint.red.img} alt="car color" />
                </div>
              </div>
              <div className="color-name-price">
                <p>
                  {paint === "white"
                    ? car?.paint.white.name
                    : paint === "blue"
                    ? car?.paint.blue.name
                    : car?.paint.red.name}
                </p>
                <span>
                  {paint === "white"
                    ? "Included"
                    : paint === "blue"
                    ? `$${car?.paint.blue.cost.toLocaleString("en-US")}`
                    : `$${car?.paint.red.cost.toLocaleString("en-US")}`}
                </span>
              </div>
            </div>
          </div>
          <div className="order-page-responsive-img-cont">
            <img src={images && images[3].img} alt="tesla" />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-wheels">
              <h3>Wheels</h3>
              <div className="car-wheels-cont">
                <div
                  className={`wheel ${wheels === "first" ? "active" : ""}`}
                  onClick={() => selectWheels("first")}
                >
                  <img src={car?.wheels[0].img} alt="car wheel" />
                </div>
                <div
                  className={`wheel ${wheels === "second" ? "active" : ""}`}
                  onClick={() => selectWheels("second")}
                >
                  <img src={car?.wheels[1].img} alt="car wheel" />
                </div>
              </div>
              <div className="wheel-name-price">
                <p>
                  {wheels === "first"
                    ? car?.wheels[0].name
                    : car?.wheels[1].name}
                </p>
                <span>
                  {wheels === "first"
                    ? "Included"
                    : `$${car?.wheels[1].cost.toLocaleString("en-US")}`}
                </span>
              </div>
              <p className="more-info">All-Season Tires</p>
              <p className="more-info">
                {wheels === "first"
                  ? car?.wheels[0].range
                  : car?.wheels[1].range}
              </p>
              <Button className="btn" width="145px" option="gray">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-page-responsive-img-cont">
            <img src={images && images[4].img} alt="tesla" />
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-interior">
              <h3>Interior</h3>
              <div className="car-interior-cont">
                <div
                  className={`interior ${interior === "black" ? "active" : ""}`}
                  onClick={() => selectInterior("black")}
                >
                  <img src={car?.salon.black.img} alt="car interior" />
                </div>
                <div
                  className={`interior ${interior === "white" ? "active" : ""}`}
                  onClick={() => selectInterior("white")}
                >
                  <img src={car?.salon.white.img} alt="car interior" />
                </div>
              </div>
              <div className="interior-name-price">
                <p>
                  {interior === "black"
                    ? car?.salon.black.name
                    : car?.salon.white.name}
                </p>
                <span>
                  {interior === "black"
                    ? "Included"
                    : `$${car?.salon.white.cost.toLocaleString("en-US")}`}
                </span>
              </div>
              <Button className="btn" width="145px" option="gray">
                Feature Details
              </Button>
            </div>
          </div>
          <div className="options-swiper-slide">
            <div className="options-swiper-slide-order">
              <h3>Order Your {car?.model}</h3>
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
            <p className="main-swiper-vehicle-price">
              ${price.toLocaleString("en-US")} Vehicle Price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
