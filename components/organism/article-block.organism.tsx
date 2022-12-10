import React from "react";
import styles from "./styles/article-block.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ButtonAtom } from "components/atoms/button.atom";

interface Classes {
  img: string;
  block: string;
}
interface ArticleBlockOrganismInterface {
  classes: Classes;
  image: string;
  categoryName: string;
  categorySlug: string;
  title: string;
  postSlug: string;
  excerpt: string;
  author: string;
  date: string;
  square: string;
  imageWidth: number;
  imageHeight: number;
  articleContent: string;
  index: number;
}

export function OrganismArticleBlock(
  props: ArticleBlockOrganismInterface
): JSX.Element {
  return (
    <article className={styles.effectBlockArticle}>

      <div className={`${styles.blogArticleBlock} ${props.classes.block}`}>
        <div className={`${styles.blogFeaturedImageBlock}`}>
          <Image
            alt="helo"
            sizes="
          (max-width: 320px) 320px,
          (max-width: 1140px) 400px,
          (max-width: 1240px) 400px,
          (max-width: 1640px) 400px,
          (max-width: 1740px) 400px,
          (max-width: 1940px) 400px,
          (max-width: 2560px) 400px,
          "
            loading={!props.index ? "eager" : "lazy"}
            src="/images/post-400.jpg"
            fill
            quality={10}
          ></Image>

          <div className={styles.blogArticleCategoryBadge}>
            {props.categoryName}
          </div>
        </div>
        <div className={`${styles.blogArticleContent} `}>
          <Link href={`/${props.postSlug}`}>
            <h1 style={{ textTransform: "none" }}>{props.title}</h1>

            <p
              className={styles.blogArticleExcerpt}
              style={{ textTransform: "none" }}
            >
              {props.excerpt}
            </p>
          </Link>
          <div className={styles.blogArticleMeta}>
            <span style={{ color: "white" }}>{props.author}</span>
            <span style={{ color: "white" }}>{props.date}</span>
          </div>
          <div className={styles.blogArticleContainerButton}>
            <p style={{ color: "white", fontSize: "12px" }}> 0 Comentários</p>
            <Link href={`/${props.postSlug}`}>
              <ButtonAtom>
                <span>Continue Lendo</span>
              </ButtonAtom>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
