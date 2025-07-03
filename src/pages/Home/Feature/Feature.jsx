// Libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// CSS - Images - UI Component - Hook
import style from "./Feature.module.css";
import Carousel from "./Carousel";
import Marquee from "../Marquee/Marquee";

const cx = classNames.bind(style);

function Feature() {
  const { t } = useTranslation();

  return (
    <section className={cx("feature-section", "isolate relative")}>
      <div className={cx("feature-bg", "px-3 py-10 xl:px-20 xl:py-20", "h-[800px]")}>
        <div className={cx("content")}>
          <p className={cx("title", "uppercase w-[100%]", "text-[100px]")}>Turn ideas into a professional portfolio</p>
          <p className={cx("desc", "uppercase my-14 w-[60%]", "text-[18px]")}>
            Explore design features that make it easy to create a professional portfolio, showcase your unique style,
            and capture the attention of employers or potential clients.
          </p>
          <a className={cx("see-more")} href="#">
            <div className={cx("btn", "uppercase text-[18px] mb-10")}>see more</div>
          </a>
        </div>
        <div className={cx("right-content")}></div>
      </div>
      <div className={cx("absolute z-1 px-20", "bottom-[-20%]")}>
        <Carousel />
      </div>
      <Marquee />
    </section>
  );
}

export default Feature;
