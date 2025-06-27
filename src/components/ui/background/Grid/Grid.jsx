// Libraries
import classNames from "classnames/bind";
// CSS
import style from "./Grid.module.css";

const cx = classNames.bind(style);

function Grid() {
  return <section className={cx("grid-pattern", "isolate")}></section>;
}

export default Grid;
