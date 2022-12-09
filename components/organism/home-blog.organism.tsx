import styles from '@styles/home/home-blog.module.scss'
import stylesArticle from '@styles/blog/blog-article.module.scss'
import { OrganismArticleBlock } from './article-block.organism'
import { posts } from 'mocks'



export function HomeBlogOranism(): JSX.Element {

  return (

    <section id={styles.homeBlockSection}>
      <div style={{ maxWidth: "1250px" }}>
        <h2 id={styles.homeSubtitleSection}>Aprenda Conosco e se atualize</h2>
        <p style={{ color: "white" }}>
          Acesse nosso portal repleto de artigos e notícias tecnológicas, e
          mergulhe fundo em nossos cursos e tutoriais de marketing, programação
          e SEO. Postagens diárias para manter você atualizado de tudo que a de
          novo no mundo da tecnologia
        </p>
        <div id={styles.homeContainerArticle}>
          {posts?.map((post, index) => {
            if (index < 3) {

              return (
                <OrganismArticleBlock
                  index={index}
                  classes={{ block: stylesArticle.blogArticleBlockSquare, img: '' }}
                  key={index}
                  {...post}
                />
              )
            }
            return null
          })}
        </div>
      </div>
    </section>
  )

}

