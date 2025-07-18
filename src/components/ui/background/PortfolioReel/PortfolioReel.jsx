//libraries - React icons
import classNames from "classnames/bind";
// CSS - Constants data - Components
import styles from "./PortfolioReel.module.css";
import PortfolioList from "./PortfolioList";

// Initialize classNames with styles
const cx = classNames.bind(styles);

function MarqueeList() {
  return (
    <div className={cx("wall-wrapper")}>
      <div className={cx("wall-content")}>
        {[...Array(8)].map((_, idx) => (
          <PortfolioList key={idx} reverse={idx % 2 === 1} />
        ))}
      </div>
    </div>
  );
}

export default MarqueeList;
