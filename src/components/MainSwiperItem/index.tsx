import "./style.scss";

interface Props {
  img: string;
}

function MainSwiperItem({ img }: Props) {
  return (
    <div className="main-swiper-item">
      <div className="main-swiper-item-bg-cont">
        <img
          className="main-swiper-item-bg"
          src={img}
          alt="tesla"
        />
      </div>
    </div>
  );
}

export default MainSwiperItem;
