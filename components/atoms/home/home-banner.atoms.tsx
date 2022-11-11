import styles from "@styles/home/home-banner.module.scss";
import Image from "next/image";

export function HomeImageBox(): JSX.Element {
    return (
        <div className={styles.imageBox}>
            <Image alt="" src="/images/moldura.webp" quality={50} width="384" height="419"  loading="eager" ></Image>
        </div>
    );
}

export function HomeParagraphInfo({ text }: { text:string}): JSX.Element {
    return (
        <p className={styles.contentInfo}>
        {text}
      </p>
    )
}

export function HomeSubtitleInfo({text}:{text: string}): JSX.Element {
    return (
        <h2 className={styles.info}>{text}</h2>
    )
}

export function HomeTitle(): JSX.Element {
    return (
    <h1 id={styles.titleHomeBanner}>
      Hugo Gualberto, Desenvolvedor de software{" "}
      <b className={styles.featuredSubWord}>web</b> e{" "}
      <b className={styles.featuredSubWord}>Mobile</b> profissional
    </h1>
    )
  }
