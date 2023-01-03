
import { ButtonAtom } from 'components/atoms/button.atom';
import styles from './styles/pagination-blog.module.scss';
import { Router, useRouter } from 'next/router';



export function PaginationBlog(): JSX.Element {
    const history = useRouter()
    return (
        <div className={styles.paginationBlog}>
            <ButtonAtom path="/conteudo" text="Anterior" />
            <span>Página 1 de 2</span>
            <ButtonAtom path="/conteudo/page/2" text="Próximo" />

        </div>
    )
}