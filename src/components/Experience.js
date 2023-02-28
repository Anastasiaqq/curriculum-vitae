import { useTranslation } from "react-i18next";
const EXPERIENCE_ARRAY = [
  {
    id: 0,
    years: "09/2016 - 04/2018",
    name: "sch1210",
    role: "teacher",
    resps: [
      { id: 0, v: "researchCenter" },
      { id: 1, v: "biochem" },
    ],
  },
  {
    id: 1,
    years: "04/2018 - 09/2020",
    name: "r2",
    role: "tutor",
    resps: [{ id: 0, v: "exams" }],
  },
  {
    id: 2,
    years: "09/2019 - 06/2021",
    name: "sch1621",
    role: "teacher",
    resps: [
      { id: 0, v: "projects" },
      { id: 1, v: "biochem" },
      { id: 2, v: "JewishEdu" },
      { id: 3, v: "digit" },
    ],
  },
  {
    id: 3,
    years: "11/2021 - 11/2022",
    name: "azimuth",
    role: "programmer",
    resps: [
      { id: 0, v: "applications" },
      { id: 1, v: "library" },
    ],
  },
  {
    id: 4,
    years: "12/2022 - 12/2022",
    name: "terem",
    role: "intern",
    resps: [{ id: 0, v: "pixel" }],
  },
];

function Experience() {
  const { t } = useTranslation();

  let expTable = EXPERIENCE_ARRAY.map((exp) => (
    <tr key={exp.id}>
      <td className="experience-td years">{exp.years}</td>
      <td className="experience-td">
        <p className="experience-place">{t(exp.name) + " - " + t(exp.role)}</p>
        <ul className="experience-list">
          {exp.resps.map((r) => (
            <li key={r.id}>{t(r.v)}</li>
          ))}
        </ul>
      </td>
    </tr>
  ));
  return (
    <section className="experience">
      <h2 className="experience-header">{t('experience')}</h2>
      <table className="experience-table">
        <tbody>{expTable}</tbody>
      </table>
    </section>
  );
}

export default Experience;
