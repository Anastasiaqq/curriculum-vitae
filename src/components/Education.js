import { useTranslation } from "react-i18next";

const EDU = [
    {id: 0, years: '2011 - 2016', name: 'mpsu', degree: 'bachelor'},
    {id: 1, years: '2016 - 2019', name: 'mpsu', degree: 'master'},
    {id: 3, years: '2020 - 2021', name: 'gb', degree: 'web'},
    {id: 4, years: '08 - 10/2021', name: 'prof', degree: 'frontend'}
]

function Education() {
    const { t } = useTranslation()
    const EDU_LIST = EDU.map(e => 
            <li className="education-item" key={e.id}>
                <p className="education-years">{e.years}</p>
                
                    <p className="education-name">{t(e.name)}</p>
                    <p className="education-degree">{t(e.degree)}</p>
               
            </li>
    )
    return (
        <section className="education">
            <h2 className="education-header">{t("education")}</h2>
            <ol className="education-list">{ EDU_LIST }</ol>
        </section>
    )
}

export default Education