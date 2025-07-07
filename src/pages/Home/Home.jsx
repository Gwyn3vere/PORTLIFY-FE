// Library
import classNames from "classnames/bind";
// CSS - UI component - React Icons - Images
import style from "./Home.module.css";
import Hero from "./Hero/Hero.jsx";
import Feature from "./Feature/Feature.jsx";
import Template from "./Template/Template.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";
import Keyword from "./Keyword/Keyword.jsx";

const cx = classNames.bind(style);

function Home() {
  return (
    <div className={cx("home")}>
      <Hero />
      <Feature />
      <Template />
    </div>
  );
}

export default Home;
