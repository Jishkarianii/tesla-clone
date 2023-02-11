import "./style.scss";
import { useState } from "react";
import { useSwiper } from "swiper/react";

function Header() {
  const swiper = useSwiper();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const slideTo = (index: number): void => {
    swiper.slideTo(index);
    menuHandler()
  }

  const menuHandler = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <svg width="120" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
          fill="currentColor"
        ></path>
      </svg>
      <div className="header-menu" onClick={menuHandler}>
        Menu
      </div>
      <div
        className={`header-menu-bg ${isOpen ? "show" : ""}`}
        onClick={menuHandler}
      ></div>
      <div className={`header-menu-cont ${isOpen ? "open" : ""}`}>
        <div className="close-cont">
          <div className="close-wrapper" onClick={menuHandler}>
            <svg
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.53 17.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.748.748 0 0 1-1.06 0 .75.75 0 0 1 0-1.06L10.94 12 5.47 6.53a.75.75 0 1 1 1.06-1.06L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <ul>
          <li title="Model 3" onClick={() => slideTo(0)}>
            Model 3
          </li>
          <li title="Model Y" onClick={() => slideTo(1)}>
            Model Y
          </li>
          <li title="Model S" onClick={() => slideTo(2)}>
            Model S
          </li>
          <li title="Model X" onClick={() => slideTo(3)}>
            Model X
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
