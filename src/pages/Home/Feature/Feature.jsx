// Libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// CSS - Images - UI Component - Hook
import style from "./Feature.module.css";
import Carousel from "./Carousel";

const cx = classNames.bind(style);

function Feature() {
  const { t } = useTranslation();

  return (
    <section
      className={cx(
        "feature-section",
        "mx-5 xl:mx-20",
        "my-20 sm:my-40 md:my-50 lg:my-60",
        "isolate flex flex-col xl:flex-row gap-5"
      )}
    >
      <Carousel />
      <div>s</div>
    </section>
  );
}

export default Feature;
