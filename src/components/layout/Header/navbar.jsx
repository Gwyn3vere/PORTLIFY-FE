// Libraries
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
// CSS
import styles from "./Navbar.module.css";
// React icons
import { TbMenu2, TbX } from "react-icons/tb";

const cx = classNames.bind(styles);
const navItems = [
  { name: "explore", href: "/explore", icon: "" },
  { name: "community", href: "/community", icon: "" },
  { name: "about us", href: "/about", icon: "" },
  { name: "contracts", href: "/contract", icon: "" }
];

export function Hamburgur({ isOpen, setIsOpen }) {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cx("responsive-menu")}>
      {isOpen ? (
        <div className={cx("close-icon")} onClick={handleToggle}>
          <TbX />
        </div>
      ) : (
        <TbMenu2 onClick={handleToggle} />
      )}
    </div>
  );
}

export function Navbar({ isOpen }) {
  const { t } = useTranslation();
  const navVariants = {
    open: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    },
    closed: {
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -40 }
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className={cx("nav")}>
        <ul className="hidden block md:hidden lg:flex gap-5">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{t(`navbar.${item.name}`)}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav className={cx("nav")} variants={navVariants} initial="closed" animate="open" exit="closed">
            <ul className={cx("mb-nav")} style={{ listStyle: "none", padding: 0 }}>
              {navItems.map((item, index) => {
                return (
                  <motion.li key={index} variants={itemVariants}>
                    <a href={item.href}>{t(`navbar.${item.name}`)}</a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
