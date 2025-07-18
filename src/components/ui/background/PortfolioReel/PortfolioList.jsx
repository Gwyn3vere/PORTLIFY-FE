// Libraries - React icons
import classNames from "classnames/bind";
import { HiOutlineStar, HiOutlineChatBubbleBottomCenterText, HiOutlineEye } from "react-icons/hi2";

// CSS - Constants data
import styles from "./PortfolioReel.module.css";
import { portfolioData } from "../../../../constants/users.jsx";

// Initialize classNames with styles
const cx = classNames.bind(styles);

function PortfolioList({ reverse = false }) {
  const combinedList = [...portfolioData, ...portfolioData]; // Lặp đúng 2 lần

  return (
    <div className={cx("marquee-container")}>
      <div className={cx("marquee", reverse && "reverse")}>
        {combinedList.map((item, idx) => (
          <div
            className={cx("card", "flex flex-col items-center justify-center gap-2.5 mb-2.5")}
            key={`${item.id}-${idx}`}
          >
            <div className={cx("image")}></div>
            <div className={cx("content", "flex items-center justify-between")}>
              <div className={cx("icons", "flex items-center gap-[5px]")}>
                <div className={cx("favorite", "flex items-center gap-[2px] h-[20px]")}>
                  <HiOutlineStar className={cx("text-[20px] font-medium")} />
                  <span className={cx("text-[12px] font-medium")}>5k</span>
                </div>
                <div className={cx("comment", "flex items-center gap-[2px] h-[20px]")}>
                  <HiOutlineChatBubbleBottomCenterText className={cx("text-[20px] font-medium")} />
                  <span className={cx("text-[12px] font-medium")}>1k</span>
                </div>
                <div className={cx("view", "flex items-center gap-[2px] h-[20px]")}>
                  <HiOutlineEye className={cx("text-[20px] font-medium")} />
                  <span className={cx("text-[12px] font-medium")}>10k</span>
                </div>
              </div>
              <div className={cx("user", "flex items-center gap-[5px]")}>
                <div className={cx("name", "text-[12px] font-medium")}>Name {item.id}</div>
                <div className={cx("avatar", "rounded-full w-[30px] h-[30px]")}></div>
              </div>
            </div>
          </div>
        ))}
        {combinedList.map((item, idx) => (
          <div
            className={cx("card", "flex flex-col items-center justify-center gap-2.5 mb-2.5")}
            key={`${item.id}-${idx}`}
          >
            <div className={cx("image")}></div>
            <div className={cx("content", "flex items-center justify-between")}>
              <div className={cx("icons", "flex items-center gap-[5px]")}>
                <div className={cx("favorite", "flex items-center gap-[2px] h-[20px]")}>
                  <HiOutlineStar className={cx("text-[20px] font-medium")} />
                  <span className={cx("text-[12px] font-medium")}>5k</span>
                </div>
                <div className={cx("comment", "flex items-center gap-[2px] h-[20px]")}>
                  <HiOutlineChatBubbleBottomCenterText className={cx("text-[20px] font-medium")} />
                  <span className={cx("text-[12px] font-medium")}>1k</span>
                </div>
                <div className={cx("view", "flex items-center gap-[2px] h-[20px]")}>
                  <HiOutlineEye className={cx("text-[20px] font-medium")} />
                  <span className={cx("text-[12px] font-medium")}>10k</span>
                </div>
              </div>
              <div className={cx("user", "flex items-center gap-[5px]")}>
                <div className={cx("name", "text-[12px] font-medium")}>Name {item.id}</div>
                <div className={cx("avatar", "rounded-full w-[30px] h-[30px]")}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioList;
