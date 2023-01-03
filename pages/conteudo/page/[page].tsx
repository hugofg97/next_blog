import Head from "next/head";
import styles from '@styles/blog/blog-page.module.scss'
import articleStyles from 'components/organism/styles/article-block.module.scss'
import Layout from "templates/layout";
import { posts } from "mocks";
import { ArticleBlockOrganismInterface, OrganismArticleBlock } from "@organism";
import { SidebarOrganism } from "components/organism/sidebar.organism";
import BlogPage from "..";
import { NextPageContext } from "next";

function BlogPagePaginated({ postList, context }: { postList: ArticleBlockOrganismInterface[], context: NextPageContext }): JSX.Element {
    console.log("ARROZ>", postList, context)
    return (
        <BlogPage postList={postList}></BlogPage>
    );
}

export default BlogPagePaginated;
export async function getStaticPaths() {
    return {
        paths: [{ params: { page: '1' } }, { params: { page: '2' } }],
        fallback: false, // can also be true or 'blocking'
    }
}
export async function getStaticProps(context: NextPageContext) {
    return {
        props: {
            postList: posts.slice(5),
            context
        }
    }
}
