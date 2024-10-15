import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzTranslation from "./locales/uz.json";
import enTranslation from "./locales/en.json";
import ruTranslation from "./locales/ru.json";

const resources = {
  uz: {
    translation: uzTranslation,
  },
  en: {
    translation: enTranslation,
  },
  ru: {
    translation: ruTranslation,
  },
};

// LocalStorage'dan tilni o'qib olish (agar mavjud bo'lsa)
const savedLanguage = localStorage.getItem("language") || "uz"; // default uzbek

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Saqlangan tilni yuklash
  fallbackLng: "uz", // Til topilmasa default tilga qaytadi
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
