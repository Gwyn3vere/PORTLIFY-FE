// Library
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// Data - Utils
import { usersData, rateData } from "../../../constants/users.jsx";
import useRandomTags from "../../../utils/randomTagUtils.jsx";
// CSS - UI component - React Icons - Images
import { BiSolidRightArrow } from "react-icons/bi";
import style from "./Hero.module.css";
import { transparentImages } from "../../../assets/images/index.jsx";

const cx = classNames.bind(style);

function Hero() {
  const { t } = useTranslation();
  const tag = useRandomTags();
  return (
    <section className={cx("hero-section", "isolate relative", "mx-3 xl:mx-20")}>
      {/* Main text */}
      <div className={cx("main", "md:flex justify-center", "w-full")}>
        <img
          className={cx("relative", "md:w-[80%] xl:w-[51%]")}
          src={transparentImages.character2}
          alt="hero ai background"
        />
        <span
          className={cx(
            "main-text",
            "absolute uppercase",
            "w-[100%]",
            "top-[48%] sm:top-94 md:top-[38%] xl:top-85",
            "text-[6rem] sm:text-[5rem] md:text-[9rem] xl:text-[13rem]",
            "font-black leading-none text-center text-white"
          )}
        >
          Creative Identity
        </span>
        <span
          className={cx(
            "stroke-text",
            "absolute uppercase",
            "w-[100%]",
            "top-[48%] sm:top-94 md:top-[38%] xl:top-85",
            "text-[6rem] sm:text-[5rem] md:text-[9rem] xl:text-[13rem]",
            "font-black leading-none text-center text-white"
          )}
        >
          Creative Identity
        </span>
      </div>
      {/* Tagline */}
      <div className={cx("tagline", "xl:absolute", "xl:top-50", "xl:left-23", "xl:w-[500px] my-5")}>
        <p className={cx("md:text-[2rem]", "font-medium uppercase text-center xl:text-start")}>
          {t(`homepage.tagline`)}
        </p>
      </div>
      {/* Trusted Users */}
      <div className={cx("trusted", "absolute hidden xl:block", "top-[17%] xl:right-[5%] 2xl:right-[10%]")}>
        <div className={cx("users", "flex")}>
          {usersData.map((users) => {
            return (
              <div className={cx("avatar", users.id !== 1 ? "-ml-4" : "")} key={users.id}>
                <img className={cx("w-[70px]", "rounded-full")} src={users.avatar} alt="users" />
              </div>
            );
          })}
        </div>
        <div className={cx("trusted-line")}></div>
        <div className={cx("trusted-text", "w-[250px]")}>
          <p className={cx("uppercase xl:text-[14px] 2xl:text-[16px] font-bold")}>{t(`homepage.trusted`)}</p>
        </div>
      </div>
      {/* Start button */}
      <div
        className={cx(
          "started",
          "xl:absolute flex justify-center",
          "w-[240px] md:w-[300px] xl:w-[260px]",
          // "p-[10px] md:p-[20px]",
          "mb-5 mx-auto xl:my-0",
          "xl:bottom-40",
          "xl:left-23"
        )}
      >
        <a
          className={cx(
            "started-btn",
            "w-[220px] md:w-[260px] xl:w-[220px]",
            "relative flex items-center gap-2 text-center h-[60px] md:h-[70px] px-[20px]"
          )}
          href="#"
        >
          <span>
            <BiSolidRightArrow />
          </span>
          <p className={cx("text-[1rem] md:text-[1.25rem] xl:text-[1rem] font-medium")}>{t(`homepage.start`)}</p>
        </a>
      </div>
      {/* Tag list */}
      <div
        className={cx("taglist", "absolute hidden xl:block", "w-[350px] 2xl:w-[500px]", "right-[0]", "bottom-[15%]")}
      >
        {tag.map((tag) => {
          return (
            <div
              className={cx("tag", "mx-1 my-1", "xl:py-[3px] 2xl:py-[5px] xl:px-[5px] 2xl:px-[10px]", {
                active: tag.active
              })}
              key={tag.id}
            >
              <span className={cx("xl:text-[14px] 2xl:text-[16px] font-medium uppercase")}>{tag.tag}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
