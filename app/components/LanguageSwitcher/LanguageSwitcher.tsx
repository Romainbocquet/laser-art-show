import { useState } from "react";

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState("fr");
  const [isOpen, setIsOpen] = useState(false);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Bouton affichant la langue sélectionnée */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-transparent text-white border-none cursor-pointer px-4 py-2"
      >
        <span className="mr-2">{selectedLang === "fr" ? "🇫🇷" : "🇬🇧"}</span>
        {selectedLang.toUpperCase()}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-24 bg-black text-white border border-gray-700 rounded shadow-md">
          <button
            onClick={() => handleLangChange("fr")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            🇫🇷 FR
          </button>
          {/* <button
            onClick={() => handleLangChange("en")}
            className="block w-full text-left px-4 py-2 hover:bg-gray-700"
          >
            🇬🇧 EN
          </button> */}
        </div>
      )}
    </div>
  );
}