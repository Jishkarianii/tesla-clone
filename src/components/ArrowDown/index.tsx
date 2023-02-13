import "./style.scss";
import { useSwiper } from "swiper/react";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

interface Props {
  className?: string;
}

function ArrowDown({ className }: Props) {
  const swiper = useSwiper();

  return (
    <div className={`arrow-down ${className}`}>
      <ExpandMoreRoundedIcon onClick={() => swiper.slideNext()} />
    </div>
  );
}

export default ArrowDown;
