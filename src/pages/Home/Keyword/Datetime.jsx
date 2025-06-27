import { useEffect, useState } from "react";
// Libraries
import classNames from "classnames/bind";
//CSS - UI component - React Icons - Images
import style from "./Keyword.module.css";
import { PiStarFourFill } from "react-icons/pi";

const cx = classNames.bind(style);

function Datetime() {
  const [dateTimeStr, setDateTimeStr] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();

      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear();

      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // chuyển sang 12h format
      const hourStr = hours.toString().padStart(2, "0");

      setDateTimeStr(`${day}.${month}.${year} ${hourStr}:${minutes} ${ampm}`);
    };

    updateDate(); // chạy lần đầu
    const interval = setInterval(updateDate, 1000); // cập nhật mỗi giây
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={cx(
        "typography-decor",
        "absolute w-[100%] top-[-130%] translate-y-[-50%] flex items-center gap-5 justify-between"
      )}
    >
      <div className={cx("key-0", "icon", "text-[1vw]")}>
        <PiStarFourFill />
      </div>
      <div className={cx("border-col", "w-[40vw] h-[2px]")}></div>
      <div className={cx("key-0", "text-[1vw] w-[5%]")}>{dateTimeStr}</div>
      <div className={cx("border-col", "w-[40vw] h-[2px]")}></div>
      <div className={cx("key-0", "icon", "text-[1vw]")}>
        <PiStarFourFill />
      </div>
    </div>
  );
}

export default Datetime;
