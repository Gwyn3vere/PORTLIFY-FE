import React from "react";
// Libraries
import classNames from "classnames/bind";
// CSS - React Icons
import style from "./Marquee.module.css";
import { PiStarFourFill } from "react-icons/pi";

const cx = classNames.bind(style);

function Marquee() {
  const words = [
    "PORTLIFY",
    "Build Portfolio",
    "Connect Now",
    "Showcase Skills",
    "Stand Out",
    "Be Confident",
    "Get Hired"
  ];
  const items = Array.from({ length: 20 }, (_, i) => words[i % words.length]);

  // Hàm render từng phần từ xen kẽ icon
  function renderItems(items, keyPrefix) {
    return items.map((item, index) => (
      <React.Fragment key={`${keyPrefix}-${index}`}>
        <span className={cx("marquee-item", "text-[80px]", "font-semibold", "whitespace-nowrap")}>{item}</span>
        {/* Icon giữa các từ, không xuất hiện sau từ cuối */}
        {index !== items.length - 1 && (
          <span className={cx("icon", "text-[50px]", "text-yellow-500", "mx-3")}>
            <PiStarFourFill />
          </span>
        )}
      </React.Fragment>
    ));
  }

  return (
    <div className={cx("marquee-container")}>
      <div className={cx("marquee")}>
        <div className={cx("marquee-inner")}>
          <div className={cx("marquee-track", "flex", "items-center")}>
            {renderItems(items, "a")}
            {renderItems(items, "b")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
