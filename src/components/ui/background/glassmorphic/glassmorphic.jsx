// Libraries
import classNames from "classnames/bind";
// CSS
import style from "./Glassmorphic.module.css";

const cx = classNames.bind(style);

function Glassmorphic() {
  return (
    <section className={cx("glassmorphic", "isolate")}>
      <div
        className={cx(
          "shape1",
          "w-[100px] xl:w-[1200px]",
          "h-[100px] xl:h-[1000px]",
          "top-[10%] xl:top-[-20%]",
          "right-[60%] xl:right-[60%]"
        )}
      ></div>
      <div
        className={cx(
          "shape2",
          "w-[300px] xl:w-[700px]",
          "h-[300px] xl:h-[700px]",
          "top-[2%] xl:top-[30%] ",
          "right-[0%] xl:right-[-20%]"
        )}
      ></div>
      {/* <div
        className={cx(
          "shape3",
          "w-[200px] xl:w-[800px]",
          "h-[200px] xl:h-[800px]",
          "top-[20%] xl:top-[50%] ",
          "left-[-10%] xl:left-[6%]"
        )}
      ></div> */}
      {/* <div
        className={cx(
          "shape4",
          "w-[200px] xl:w-[500px]",
          "h-[200px] xl:h-[500px]",
          "top-[20%] xl:top-[50%] ",
          "right-[-10%] xl:right-[80%]"
        )}
      ></div>
      <div
        className={cx(
          "shape5",
          "w-[200px] xl:w-[100px]",
          "h-[200px] xl:h-[100px]",
          "top-[20%] xl:top-[55%] ",
          "right-[-10%] xl:right-[50%]"
        )}
      ></div>
      <div
        className={cx(
          "shape6",
          "w-[50px] xl:w-[250px]",
          "h-[50px] xl:h-[250px]",
          "top-[17%] xl:top-[60%] ",
          "right-[50%] xl:right-[20%]"
        )}
      ></div>
      <div
        className={cx(
          "shape7",
          "w-[300px] xl:w-[800px]",
          "h-[300px] xl:h-[800px]",
          "top-[30%] xl:top-[80%] ",
          "right-[60%] xl:right-[50%]"
        )}
      ></div> */}
    </section>
  );
}

export default Glassmorphic;
