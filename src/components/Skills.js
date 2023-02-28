import { useTranslation } from "react-i18next";

const SK = [
    {id: 0, name: 'programming', items: [['Javascript', 'good'], ['HTML, CSS', 'good'], ['Vue JS', 'good'], ['React JS', 'basic'], ['npm', 'basic'], ['PHP', 'basic'], ['MySQL', 'basic']]},
    {id: 1, name: 'soft', items: ['org', 'learn', 'adapt']},
    {id: 2, name: 'langs', items: [['ru', 'native'], ['en', 'b2'], ['pl', 'a2']]}
]

function Skills() {
    const { t } = useTranslation()
    const SK_LIST = SK.map(s =>
        <div className="skills-list">
            <p className="skills-groupname">{t(s.name)}</p>
            <ul className="skills-group">
                {s.id !== 1 ? s.items.map(i => <li className="skills-item" key={i[0]}>{t(i[0]) + ' - ' + t(i[1])}</li>) : s.items.map(i => <li>{t(i)}</li>)}
            </ul>
        </div>
    )
    return (
        <section className="skills">
            <h2 className="skills-header">{t('skills')}</h2>
            <div className="skills-total">{SK_LIST}</div>
        </section>
    )
}

export default Skills;