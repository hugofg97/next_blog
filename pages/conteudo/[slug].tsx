import Head from "next/head";
import styles from "@styles/blog/blog-page.module.scss";
import featuredImageContainer from "./styles/post.module.scss";
import Layout from "templates/layout";
import { posts } from "mocks";
import { OrganismArticleBlock } from "@organism";
import { SidebarOrganism } from "components/organism/sidebar.organism";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react"

export const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback((e: { matches: any; }) => {
        if (e.matches) setTargetReached(true)
        else setTargetReached(false)
    }, [])

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        media.addEventListener('change', updateTarget)

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) setTargetReached(true)

        return () => media.removeEventListener('change', updateTarget)
    }, [])

    return targetReached
}
function BlogPage(): JSX.Element {
    return (
        <div>
            <Head>
                <title>Blog | Gualb</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className={styles.blogMain}>
                    <h1 style={{ marginTop: 200, color: "white" }}>
                        Hugo bonitão ataca novamente as novinhas assanhadas{" "}
                    </h1>
                    <div className={featuredImageContainer.featuredImageContainer}>
                        <Image
                            sizes="
                            (max-width: 320px) 320px,
                            (max-width: 400px) 400px,
                            (min-width: 1920px) 1280px,

                            "
                            alt="Alt image"
                            src="/images/post.jpg"
                            fill
                            loading="eager"
                            quality={50}
                        ></Image>
                    </div>
                    <div className={styles.blogContainerPage}>
                        <div style={{ width: "75%" }}>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                            <p>
                                Hello dude this is makiavelik swap they culo culo marrocos
                                basuresco malala que veio pra ficar dub dubs quero ve nhaaaab
                                nhaaa b.Hello dude this is makiavelik swap they culo culo marr
                                alala que veio pra ficar dub dubs quero
                            </p>
                        </div>
                        <div style={{ position: "static" }}>
                            <SidebarOrganism></SidebarOrganism>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default BlogPage;