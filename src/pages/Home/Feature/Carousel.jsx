// Libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// Data constants
import { featuresData } from "../../../constants/sections";
// CSS - Images - UI Component - Hook
import style from "./Feature.module.css";
import useDragRotation from "../../../components/hooks/useRotation";

const cx = classNames.bind(style);

function Carousel() {
  const { t } = useTranslation();
  const {
    rotation,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useDragRotation();
  return (
    <div
      className={cx("banner")}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={cx("slider")}
        style={{
          "--quantity": featuresData.length,
          transform: `perspective(700px) rotateY(${rotation}deg)`
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {featuresData.map((item) => {
          return (
            <div className={cx("card", `bg-${item.id}`)} key={item.id} style={{ "--position": item.id }}>
              <div className={cx("image", `image-${item.id}`)}>
                <div className={cx("icon")}>{item.icon}</div>
                <div className={cx("title", "py-2")}>{t(`homepage.${item.title}`)}</div>
                <div className={cx("content")}>{t(`homepage.${item.description}`)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
