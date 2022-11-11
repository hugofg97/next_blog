import React from "react"
import styles from '@styles/blog/blog-article.module.scss'
import Link from "next/link"
import Image from "next/image"

interface ArticleProps {
    image: string 
    categoryName: string
    categorySlug: string
    title: string
    postSlug: string
    excerpt: string
    author: string
    date: string
    square: string
    imageWidth: number
    imageHeight: number
    articleContent: string
}


export function OrganismArticleBlock(props: ArticleProps): JSX.Element {
  return (
    <article className={`${styles.blogArticleBlock} ${styles.blogArticleBlockSquare}` }>
      <div
        className={`${styles.blogFeaturedImageBlock}`}>
        
          <Image
          
        //   lazyRoot=""
          alt="helo"
            // style={{
            //   borderTopLeftRadius: "10px",
            //   borderBottomLeftRadius: "10px",
            // }}
            loading="lazy"
            src={'/images/post.webp'}
            // fill={true} 
        
            
            // objectFit="cover"   
            layout="fill"
            //  priority={}
            quality={10}
            // placeholder="blur"
            
            //      layout={} objectFit={}
            //      objectPosition={}
            //  lazyRoot={}

            // width={props.imageWidth}
            // height={200}
          ></Image>
     
          {/* <div className={styles.blogArticleCategoryBadge}>
            
              {props.categoryName}
          
          </div> */}
     
      </div>
      <div className={`${styles.blogArticleContent} ` }>
        <Link href={`/${props.postSlug}`}>
          <h1 style={{ textTransform: "none" }}>{props.title}</h1>

          <p className={styles.blogArticleExcerpt} style={{ textTransform: "none" }}>{props.excerpt}</p>
        </Link>
        <div className={styles.blogArticleMeta}>
          <span style={{ color: "white" }}>{props.author}</span>
          <span style={{ color: "white" }}>{props.date}</span>
        </div>
        <div className={styles.blogArticleContainerButton}>
          <p style={{ color: "white", fontSize: "12px" }}> 0 Comentários</p>
          <Link href={`/${props.postSlug}`}>
            <button>Continue lendo</button>
          </Link>
        </div>
      </div>
    </article>
  )
}

