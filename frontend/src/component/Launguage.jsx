import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "zh", name: "Chinese (Simplified)", flag: "🇨🇳" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center">
      <select
        aria-label="Select Language"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language || "en"}
        className="bg-black/40 hover:bg-black/60 text-white text-[13px] font-medium border border-white/20 hover:border-white/40 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer backdrop-blur-md transition-all duration-200"
      >
        {languages.map((lang) => (
          <option
            className="bg-neutral-900 text-white"
            key={lang.code}
            value={lang.code}
          >
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Language;
