import { useState, useRef, useEffect } from "react";
// libraries
import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
// React icons
import {
  TbMessage,
  TbBell,
  TbSearch,
  TbBookmark,
  TbHeart,
  TbUsers,
  TbFolderOpen,
  TbSettings,
  TbNews,
  TbHistory,
  TbLanguage,
  TbMoon,
  TbChevronRight,
  TbChevronDown,
  TbChevronLeft,
  TbHelpHexagon,
  TbLogout,
  TbSend,
  TbDots
} from "react-icons/tb";
// Components
import { ThemeMenu, LanguageMenu } from "../../../ui/index";
// Images - data constants - // CSS
import { avatarImages, vectorImages } from "../../../../assets/images/index";
import { notificationsData } from "../../../../constants/notifications";
import { messagesData } from "../../../../constants/messages";
import styles from "./Usermenu.module.css";

const cx = classNames.bind(styles);

const navItems = [
  { name: "my favorites", href: "/my-favorites", icon: <TbHeart />, subMenu: false },
  { name: "my collections", href: "/my-collections", icon: <TbBookmark />, subMenu: false },
  { name: "my friends", href: "/my-friends", icon: <TbUsers />, subMenu: false },
  { name: "my portfolio", href: "/my-portfolio", icon: <TbFolderOpen /> },
  { name: "my blogs", href: "/my-blogs", icon: <TbNews />, subMenu: false },
  { name: "my history", href: "/my-history", icon: <TbHistory />, subMenu: false },
  { name: "theme", href: "#theme", icon: <TbMoon />, subIcon: <TbChevronRight />, subMenu: true },
  { name: "language", href: "#language", icon: <TbLanguage />, subIcon: <TbChevronRight />, subMenu: true },
  { name: "settings", href: "/settings", icon: <TbSettings />, subMenu: false },
  { name: "help center", href: "/help-center", icon: <TbHelpHexagon />, subMenu: false },
  { name: "logout", href: "/logout", icon: <TbLogout />, subMenu: false }
];

export function UserMenu() {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);
  const toggleDropdown = (name) => {
    setIsDropdownOpen((prev) => (prev === name ? null : name));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={cx("user-menu", "flex gap-5 items-center")} ref={dropdownRef}>
      <div className={cx("icon-menu", "flex", "gap-5", "items-center")}>
        <AnimatePresence>
          {isDropdownOpen === "search" && <SearchBarPopup setIsDropdownOpen={setIsDropdownOpen} />}
        </AnimatePresence>
        <div className={cx("icon", { active: isDropdownOpen === "search" })} onClick={() => toggleDropdown("search")}>
          <TbSearch />
        </div>

        <div className={cx("messages-icon")}>
          {isDropdownOpen === "messages" && <MessagesMenu setIsDropdownOpen={setIsDropdownOpen} />}
          <div className={cx("icon", { active: isDropdownOpen === "messages" })}>
            <TbMessage onClick={() => toggleDropdown("messages")} />
          </div>
        </div>

        <div className={cx("notification-icon")}>
          {isDropdownOpen === "notification" && <NotificationMenu setIsDropdownOpen={setIsDropdownOpen} />}
          <div className={cx("icon", { active: isDropdownOpen === "notification" })}>
            <TbBell onClick={() => toggleDropdown("notification")} />
          </div>
        </div>
      </div>

      <div className={cx("avatar")}>
        <div className={cx("avatar-image")} onClick={() => toggleDropdown("avatar")}>
          <img src={avatarImages.avatar1} alt="Avatar" />
        </div>
        {isDropdownOpen === "avatar" && (
          <div className={cx("dropdown")}>
            <DropdownMenu />
          </div>
        )}
      </div>
    </div>
  );
}

export function DropdownMenu() {
  const { t } = useTranslation();
  const [subMenu, setSubMenu] = useState(null);

  const handleSubMenuToggle = (name) => {
    if (subMenu === name) {
      setSubMenu(null);
    } else {
      setSubMenu(name);
    }
  };

  return (
    <div className={cx("dropdown-menu")}>
      <div className={cx("avatar-dropdown")}>
        <div className={cx("avatar-header")}>
          <img src={avatarImages.avatar1} alt="Avatar" />
        </div>
        <div className={cx("profile-info")}>
          <span className={cx("username")}>Gwynevere</span>
          <div className={cx("view-profile")}>
            <a href="/profile" className={cx("view-profile-link")}>
              {t("user_menu.view profile")}
            </a>
            <a href="/upgrade" className={cx("upgrade-link")}>
              {t("user_menu.upgrade pro")}
            </a>
          </div>
        </div>
      </div>

      <ul className={cx("menu-list")}>
        {navItems.map((item, index) =>
          item.subMenu ? (
            subMenu === item.name ? (
              <div key={index}>
                <li className={cx("menu-item")}>
                  <div className={cx("menu-icon")}>
                    <span className={cx("icon-placeholder")}>{item.icon}</span>
                  </div>
                  <div className={cx("menu-link")} onClick={() => handleSubMenuToggle(null)}>
                    {item.name === "theme" ? t("user_menu.theme") : t("user_menu.language")}
                    {item.subIcon && (
                      <span className={cx("sub-icon")}>
                        <TbChevronDown />
                      </span>
                    )}
                  </div>
                </li>
                {item.name === "theme" ? <ThemeMenu /> : <LanguageMenu />}
              </div>
            ) : (
              <li key={index} className={cx("menu-item")}>
                <div className={cx("menu-icon")}>
                  <span className={cx("icon-placeholder")}>{item.icon}</span>
                </div>
                <div className={cx("menu-link")} onClick={() => handleSubMenuToggle(item.name)}>
                  {t(`user_menu.${item.name}`)}
                  {item.subIcon && <span className={cx("sub-icon")}>{item.subIcon}</span>}
                </div>
              </li>
            )
          ) : (
            <li
              key={index}
              className={cx(
                "menu-item",
                { "history-item": item.name === "my history" },
                { "settings-item": item.name === "settings" }
              )}
            >
              <div className={cx("menu-icon")}>
                <span className={cx("icon-placeholder")}>{item.icon}</span>
              </div>
              <a href={item.href} className={cx("menu-link")}>
                {t(`user_menu.${item.name}`)}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export function SearchBarPopup({ setIsDropdownOpen }) {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 768;
  const tablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

  const searchVariants = {
    hidden: {
      width: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: {
      width: isMobile ? "100%" : "430px", // Hoặc 100% nếu bạn muốn full chiều ngang
      opacity: 1,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      width: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      className={cx("search-popup")}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={searchVariants}
      style={{ width: "100%" }}
    >
      <div className={cx("search-background")}>
        <div className={cx("search-back-btn")} onClick={() => setIsDropdownOpen(null)}>
          <TbChevronLeft />
        </div>
        <input
          type="search"
          placeholder={t("user_menu.search portfolios, creators, or projects...")}
          className={cx("search-input")}
        />
        <button className={cx("search-button")}>
          <TbSend />
        </button>
      </div>
    </motion.div>
  );
}

export function HandleConvertToTimeAgo({ title, data }) {
  if (!data.length) return null;

  return (
    <>
      <div className={cx("timeline")}>{title}</div>
      {data.map((noti) => {
        return (
          <div className={cx("notification-list")} key={noti.id}>
            <div className={cx("notification-item")}>
              <img src={vectorImages.vectorNotification} alt="notification" />
            </div>

            <div className={cx("notification-content")}>
              <span className={cx("notification-text")}>
                <span className={cx("notification-username")}>{noti.user}</span> {noti.message}
              </span>
              <div className={cx("notification-time")}>{noti.timestamp}</div>
            </div>

            <button className={cx("notification-options")}>
              <TbDots />
            </button>
          </div>
        );
      })}
    </>
  );
}

export function NotificationMenu({ setIsDropdownOpen }) {
  const { t } = useTranslation();
  const [isFiltered, setIsFiltered] = useState("all");
  const handleFilterChange = (filter) => {
    setIsFiltered(filter);
  };
  const parseToTimeAgo = (timestamp) => {
    if (!timestamp) return Infinity;

    const value = timestamp.trim().toLowerCase();
    const num = parseInt(value);

    if (value.includes("mo")) return num * 60 * 24 * 30;
    if (value.includes("w")) return num * 60 * 24 * 7;
    if (value.includes("d")) return num * 60 * 24;
    if (value.includes("h")) return num * 60;
    if (value.includes("m")) return num;

    if (value.includes("y")) return num * 60 * 24 * 365;

    return Infinity;
  };

  const recentNotifications = notificationsData.filter((n) => parseToTimeAgo(n.timestamp) <= 5);
  const olderNotifications = notificationsData.filter((n) => parseToTimeAgo(n.timestamp) > 5);

  return (
    <div className={cx("notification-menu")}>
      <div className={cx("notification-header")}>
        <div className={cx("notification-title-container")}>
          <span className={cx("notification-title")}>{t("user_menu.notifications")}</span>
          <button className={cx("notification-three-dots")}>
            <TbDots />
          </button>
        </div>

        <div className={cx("notification-filter")}>
          <button className={cx("back-btn")} onClick={() => setIsDropdownOpen(null)}>
            <span>
              <TbChevronLeft />
            </span>
          </button>
          <button className={cx("all-btn", { active: isFiltered === "all" })} onClick={() => handleFilterChange("all")}>
            {t("user_menu.all")}
          </button>
          <button
            className={cx("unread-btn", { active: isFiltered === "unread" })}
            onClick={() => handleFilterChange("unread")}
          >
            {t("user_menu.unread")}
          </button>
        </div>
      </div>

      <div className={cx("notification-body")}>
        <HandleConvertToTimeAgo title="Recent" data={recentNotifications} />
        <HandleConvertToTimeAgo title="Older" data={olderNotifications} />
      </div>
    </div>
  );
}

export function MessagesMenu({ setIsDropdownOpen }) {
  const { t } = useTranslation();
  return (
    <div className={cx("messages-menu")}>
      <div className={cx("messages-header")}>
        <div className={cx("messages-title-container")}>
          <span className={cx("messages-title")}>{t("user_menu.messages")}</span>
          <button className={cx("messages-three-dots")}>
            <TbDots />
          </button>
        </div>
        <div className={cx("messages-search")}>
          <button className={cx("back-btn")} onClick={() => setIsDropdownOpen(null)}>
            <span>
              <TbChevronLeft />
            </span>
          </button>
          <input
            type="search"
            placeholder={t("user_menu.search messages...")}
            className={cx("messages-search-input")}
          />
          <button className={cx("messages-search-button")}>
            <TbSearch />
          </button>
        </div>
      </div>
      <div className={cx("messages-body")}>
        {messagesData.map((message) => (
          <div className={cx("messages-item")} key={message.id}>
            <div className={cx("messages-avatar")}>
              <img src={message.avatar} alt="Avatar" />
            </div>
            <div className={cx("messages-content")}>
              <span className={cx("messages-sender")}>{message.sender}</span>
              <div className={cx("messages-text")}>{message.content}</div>
              <span className={cx("messages-time")}>{message.timestamp}</span>
            </div>
            <button className={cx("messages-options")}>
              <span>
                <TbDots />
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
