
import { HomeImageBox, HomeParagraphInfo, HomeSubtitleInfo, HomeTitle } from '@atoms';
import styles from '@styles/home/home-banner.module.scss';

export function TitleContentHomeBanner(): JSX.Element {
    return (
        <div
            id={styles.titleContentHomeBanner}
        >
            <HomeTitle></HomeTitle>
            <HomeImageBox></HomeImageBox>
        </div>
    )
}

export function HomeSkillsListBlock(): JSX.Element {
    const skills: Array<{title: string, paragraph: string}> = [
        {
            title: 'Front-End',
            paragraph: 'Especialista em aplicações WEB optmizadas para SEO como blogs e ecommerces, sistemas para gestão ERP',
        },
        {
            title: 'Mobile',
            paragraph: 'Desenvolvimento mobile integrados com plataformas WEB, seu produto em todas as telas',
        },
        {
            title: 'Backend',
            paragraph: 'Especialista em aplicações back-end baseado em micro serviços e mult tenancy, serviços inteligentes para varias aplicações',
        },
        {
            title: 'Infraestrutura',
            paragraph: 'Gerência de aplicações  Aws com Ec2, Amplify e bancos de dados Postgres, MySql e Mongo DB',
        },
    ]
    return (
        <div className={styles.technologyGridBlock}>
            {skills.map((skill:{title: string, paragraph: string} , key: number) => (

            <div className={styles.technologyCategoryBlock} key={key}>
                <div className={styles.iconBox}>
                    {/* <div style={{ width: "40px" }}>
                        <HomeImageBox />
                    </div> */}
                    <HomeSubtitleInfo text={skill.title} />
                </div>
                <HomeParagraphInfo text={skill.paragraph} />
            </div>
            ))}
        </div>
    )
}