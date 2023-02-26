import Contacts from "./Contacts";
import Experience from "./Experience";
import Education from './Education';
import Skills from './Skills'
import avatar from "../assets/avatar.jpg";
import "../style/Info.css";
import { useTranslation } from "react-i18next";

function Info() {
  const { t } = useTranslation();
  return (
    <main className="info">
      <img className="pic" src={avatar} alt="me" />
      <Contacts />
      <p>{t("description")}</p>
      <Experience />
      <Education />
      <Skills />
    </main>
  );
}

export default Info;
