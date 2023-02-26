import "../style/App.css";
import Info from "./Info.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  let buttonText = "";
  let buttonValue = "";
  if (i18n.resolvedLanguage === "en") {
    buttonText = "Перевести на русский";
    buttonValue = "ru";
  } else if (i18n.resolvedLanguage === "ru") {
    buttonText = "Switch to English";
    buttonValue = "en";
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{t("name")}</p>
        <h1>{t("header")}</h1>
        <button
          onClick={(e) => i18n.changeLanguage(e.target.value)}
          value={buttonValue}
        >
          {buttonText}
        </button>
      </header>
      <Info />
      <footer>{t("footer")}</footer>
    </div>
  );
}

export default App;
