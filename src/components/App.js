import Info from "./Info.js";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  let buttonText = "";
  let buttonValue = "";
  // let mode = "light";
  if (i18n.resolvedLanguage === "en") {
    buttonText = "Перевести на русский";
    buttonValue = "ru";
  } else if (i18n.resolvedLanguage === "ru") {
    buttonText = "Switch to English";
    buttonValue = "en";
  }
  // function changeColorMode() {
  //   //функция смены темы
  // }
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-headercontainer">
          <div>
            <h1 className="header-name">{t("name")}</h1>
            <p className="header-text">{t("header")}</p>
          </div>
          <div className="header-buttongroup">
            <button
              className="header-button"
              onClick={(e) => i18n.changeLanguage(e.target.value)}
              value={buttonValue}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </header>
      <Info />
      <footer className="footer">
        <span>&#169; </span>
        {t("footer")}
      </footer>
    </div>
  );
}

export default App;
