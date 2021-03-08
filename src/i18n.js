import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import transEng from "./components/locales/en/translation.js";
import transSve from "./components/locales/sv/translation.js";

i18n
.use(initReactI18next)
.init( {
  resources: {
  en: {translation: transEng},
  sv: {translation: transSve},
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {escapeValue: false},
});