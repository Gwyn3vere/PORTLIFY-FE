// libraries
import classNames from "classnames/bind";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
// React icons
import { TbCheck } from "react-icons/tb";
// CSS
import styles from "./Language.module.css";

const cx = classNames.bind(styles);

const languages = [
  { code: "en", name: "english", flag: <Flag code="us" style={{ width: 24, height: 16 }} /> },
  { code: "vi", name: "vietnamese", flag: <Flag code="vn" style={{ width: 24, height: 16 }} /> }
];

function LanguageMenu() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const language = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={cx("language-menu")}>
      <ul className={cx("language-list")}>
        {languages.map((lang) => (
          <li key={lang.code} className={cx("language-item")} onClick={() => handleLanguageChange(lang.code)}>
            <div className={cx("menu-icon")}>
              <span className={cx("icon-placeholder")}>{lang.flag}</span>
            </div>
            <div className={cx("menu-name")}>
              {t(`user_menu.${lang.name}`)}
              {language === lang.code && (
                <span className={cx("check-icon")}>
                  <TbCheck />
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageMenu;
