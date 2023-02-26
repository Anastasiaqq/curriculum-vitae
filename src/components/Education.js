import { useTranslation } from "react-i18next";

const EDU = [
    {id: 0, years: '2011 - 2016', name: 'mpsu', degree: 'bachelor'},
    {id: 1, years: '2016 - 2019', name: 'mpsu', degree: 'master'},
    {id: 3, years: '2020 - 2021', name: 'gb', degree: 'web'},
    {id: 4, years: '2021', name: 'prof', degree: 'frontend'}
]

function Education() {
    const { t } = useTranslation()
    const EDU_LIST = EDU.map(e => 
            <li key={e.id}>
                <p>{e.years}</p>
                <div>
                    <p>{t(e.name)}</p>
                    <p>{t(e.degree)}</p>
                </div>
            </li>
    )
    return (
        <section>
            <h2>{t("education")}</h2>
            <ol>{ EDU_LIST }</ol>
        </section>
    )
}

export default Education