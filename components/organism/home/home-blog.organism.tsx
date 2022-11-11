import styles from '@styles/home/home-blog.module.scss'
import { OrganismArticleBlock } from '../blog/article-block.organism'



export function HomeBlogOranism(): JSX.Element {

    return (

        <section id={styles.homeBlockSection}>
            <div  style={{ maxWidth: "1250px" }}>
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

const posts = [
{
    image: '/images/moldura.webp', 
    categoryName: 'Bonitão',
    categorySlug: 'hugo',
    title: 'Hugo bonitão ataca novamente as novinhas assanhadas',
    postSlug: 'hugo-bonitao',
    excerpt: 'ataca as novinhas assanhadas em manaus e faz coleções de figurinhas motivadas a sentar',
    author: 'Hugo Bonitão',
    date: '20/10/1997',
    square: 'blogArticleBlockSquare',
    imageWidth: 400,
    imageHeight: 200,
    articleContent: 'coisas a fazer',
},
{
    image: '/images/moldura.webp', 
    categoryName: 'Bonitão',
    categorySlug: 'hugo',
    title: 'Hugo bonitão ataca novamente as novinhas assanhadas',
    postSlug: 'hugo-bonitao',
    excerpt: 'ataca as novinhas assanhadas em manaus e faz coleções de figurinhas motivadas a sentar',
    author: 'Hugo Bonitão',
    date: '20/10/1997',
    square: 'blogArticleBlockSquare',
    imageWidth: 400,
    imageHeight: 200,
    articleContent: 'coisas a fazer',
},
{
    image: '/images/moldura.webp', 
    categoryName: 'Bonitão',
    categorySlug: 'hugo',
    title: 'Hugo bonitão ataca novamente as novinhas assanhadas',
    postSlug: 'hugo-bonitao',
    excerpt: 'ataca as novinhas assanhadas em manaus e faz coleções de figurinhas motivadas a sentar',
    author: 'Hugo Bonitão',
    date: '20/10/1997',
    square: 'blogArticleBlockSquare',
    imageWidth: 400,
    imageHeight: 200,
    articleContent: 'coisas a fazer',
},

]