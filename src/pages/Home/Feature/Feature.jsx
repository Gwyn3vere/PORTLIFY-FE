// Libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// CSS - Images - UI Component - Hook
import { transparentImages } from "../../../assets/images";
import style from "./Feature.module.css";
import { useRotatingFeature } from "../../../components/hooks/useRotation";
import Marquee from "../Marquee/Marquee";

const cx = classNames.bind(style);

function Feature() {
  const { t } = useTranslation();
  const feature = useRotatingFeature(10000);

  return (
    <section className={cx("feature-section", "isolate relative mb-50")}>
      <div className={cx("feature-bg", "px-3 py-10 xl:px-20 xl:py-20", "h-[700px] xl:h-[800px]")}>
        <div className={cx("content")}>
          <p className={cx("title", "uppercase", "text-[35px] xl:text-[100px]")}>
            Turn ideas into a professional portfolio
          </p>
          <p className={cx("desc", "uppercase mt-10 mb-5 xl:my-14 xl:w-[60%]", "text-[14px] xl:text-[18px]")}>
            Explore design features that make it easy to create a professional portfolio, showcase your unique style,
            and capture the attention of employers or potential clients.
          </p>
          <a className={cx("see-more")} href="#">
            <div className={cx("btn", "uppercase text-[18px] mb-10")}>see more</div>
          </a>
        </div>
        <div
          className={cx(
            "card",
            " z-1 flex flex-col items-center justify-between",
            // Mobile: căn giữa tuyệt đối
            "absolute left-1/2 bottom-[-25%] -translate-x-1/2",

            // PC: override lại top/bottom position
            "md:bottom-[-20%] md:top-auto md:left-auto md:translate-x-0 md:translate-y-0",
            "w-[350px] h-[450px]"
          )}
        >
          <div className={cx("top", "mt-5 w-[300px]")}>
            <div className={cx("flex justify-between gap-5")}>
              <span className={cx("card-title", "uppercase")}>{t(`homepage.${feature.title}`)}</span>
              <div className={cx("circle", "flex gap-2")}>
                <div className={cx("dot")}></div>
                <div className={cx("dot")}></div>
              </div>
            </div>
            <p className={cx("uppercase text-[15px] mt-3")}>{t(`homepage.${feature.description}`)}</p>
          </div>
          <div className={cx("bot", "mb-5 w-[300px] h-[200px]", "flex items-center justify-center")}>
            <span className={cx("text-[100px]")}>{feature.icon}</span>
          </div>
        </div>
        <div className={cx("absolute inset-0 overflow-hidden")}>
          <img
            className={cx("absolute bottom-0 -right-20 xl:right-40", "w-[700px]")}
            src={transparentImages.character1}
          />
        </div>
      </div>
      <Marquee />
    </section>
  );
}

export default Feature;
