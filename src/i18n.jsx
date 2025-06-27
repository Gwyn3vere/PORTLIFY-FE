import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // import bộ detect ngôn ngữ

// Import JSON
import header_en from "../src/components/locales/en/header.json";
import header_vn from "../src/components/locales/vn/header.json";

i18n
  .use(LanguageDetector) // dùng detector để tự động lấy ngôn ngữ và lưu
  .use(initReactI18next)
  .init({
    resources: {
      en: { header: header_en },
      vi: { header: header_vn }
    },
    fallbackLng: "en",
    ns: ["header"],
    defaultNS: "header",
    interpolation: {
      escapeValue: false
    },
    detection: {
      // Đặt ưu tiên lấy ngôn ngữ từ đâu trước
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      // lưu ngôn ngữ vào đâu
      caches: ["localStorage", "cookie"],
      // Tùy chỉnh key lưu
      lookupLocalStorage: "i18nextLng",
      lookupCookie: "i18nextLng",
      cookieMinutes: 10080, // 7 ngày
      cookieDomain: window.location.hostname
    }
  });

export default i18n;
