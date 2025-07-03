// Libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Data constants
import { featuresData } from "../../../constants/sections";
// CSS - Images - UI Component - Hook
import style from "./Feature.module.css";
import useDragRotation from "../../../components/hooks/useRotation";

const cx = classNames.bind(style);

function Carousel() {
  const { t } = useTranslation();

  return (
    <div className={cx("carousel-card", "flex justify-start gap-5")}>
      {/* <Swiper className={cx("swiper")} modules={[Navigation]} navigation spaceBetween={20} slidesPerView={1}> */}
      <Swiper className={cx("swiper", "w-[350px]")}>
        {featuresData.map((item) => {
          return (
            <SwiperSlide>
              <div className={cx("card", "bg-white w-[350px] h-[450px]")} key={item.id}>
                <div className={cx("inline-card")}>
                  <div className={cx("main-card")}></div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
