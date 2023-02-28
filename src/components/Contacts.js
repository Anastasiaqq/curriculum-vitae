import { useTranslation } from "react-i18next";
import avatar from "../assets/avatar.jpg";

const CONT = [
  {
    id: 0,
    title: "email",
    prefix: "mailto:",
    value: "anastasiyaberezina610@gmail.com",
  },
  { id: 1, title: "phone", prefix: "tel:", value: "+79153853850" },
  {
    id: 2,
    title: "github",
    prefix: "",
    value: "https://github.com/Anastasiaqq",
  },
];

function Contacts() {
  const { t } = useTranslation();
  const LISTCONT = CONT.map((c) => (
    <li className="contacts-item" key={c.id}>
      <p className="contacts-title">{t(c.title) + ":"}</p>
      <a className="link" href={c.prefix + c.value}>
        {c.value}
      </a>
    </li>
  ));
  return (
    <section className="contacts">
      <div className="contacts-group">
        <p className="contacts-date">{t("birthdate") + ": 04.03.1993"}</p>
        <p className="contacts-city">{t("Moscow")}</p>
        <ol className="contacts-list">{LISTCONT}</ol>
        <p className="contacts-aboutme">{t("description")}</p>
      </div>
      <img className="pic" src={avatar} alt="me" />
    </section>
  );
}

export default Contacts;
