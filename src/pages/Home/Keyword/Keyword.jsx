import { useEffect, useState } from "react";
// Libraries
import classNames from "classnames/bind";
//CSS - UI component - React Icons - Images
import style from "./Keyword.module.css";
import { PiStarFourFill } from "react-icons/pi";
import Typography from "./Typography";
import Datetime from "./Datetime";

const cx = classNames.bind(style);

function Keyword() {
  return (
    <section
      className={cx("keyword-section", " isolate mx-10 sm:mx-20 lg:mx-30 xl:mx-40 mx-[10%] my-20 py-[17%] isolate")}
    >
      <div className={cx("typography-word", "text-center w-auto relative")}>
        <Typography />
        {/* Bottom title */}
        <span
          className={cx(
            "key-0",
            "absolute bottom-[-130%] left-[50%] translate-x-[-50%] flex items-center gap-2 uppercase text-[1vw] font-medium"
          )}
        >
          <span className={cx("icon")}>
            <PiStarFourFill />
          </span>
          Portlify Creative Agency
          <span className={cx("icon")}>
            <PiStarFourFill />
          </span>
        </span>
        {/* Decoration */}
        <Datetime />
        <div className={cx("typography-decor", "absolute bottom-[-130%]")}>
          <div className={cx("relative")}>
            <div className={cx("border", "absolute bottom-0 left-1/2 w-[2px] h-[10vw] -translate-x-1/2 my-4")} />
            <div
              className={cx("border", "absolute top-1/2 left-[calc(50%+6px)] h-[2px] w-[10vw] -translate-y-1/2 mx-3")}
            />

            {/* Icon ngôi sao */}
            <div className={cx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")}>
              <PiStarFourFill size={20} className={cx("icon")} />
            </div>
          </div>
        </div>

        <div className={cx("typography-decor", "absolute bottom-[-130%] right-[0%]")}>
          <div className={cx("relative")}>
            <div className={cx("border", "absolute bottom-0 left-1/2 w-[2px] h-[10vw] -translate-x-1/2 my-4")} />
            <div
              className={cx("border", "absolute top-1/2 right-[calc(50%+6px)] h-[2px] w-[10vw] -translate-y-1/2 mx-3")}
            />

            {/* Icon ngôi sao */}
            <div className={cx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2")}>
              <PiStarFourFill size={20} className={cx("icon")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keyword;
