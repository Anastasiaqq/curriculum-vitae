import { useTranslation } from "react-i18next";
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
    <li key={c.id}>
      <p>{t(c.title)}</p>
      <a href={c.prefix + c.value}>{c.value}</a>
    </li>
  ));
  return (
    <section className="">
      <ol>{LISTCONT}</ol>
    </section>
  );
}

export default Contacts;
