import Link from 'next/link';
import classNames from './styles/buttonAtom.module.scss'
import { useRouter } from 'next/router'
export interface ButtonPropsInterface {
    text: string;
}

export function ButtonAtom({ text }: ButtonPropsInterface): JSX.Element {
    const router = useRouter();
    return (
        <div className={classNames.containerBtn}>

            <Link
                onClick={(e) => {
                    e.preventDefault()
                    setTimeout(() => {
                        router.push("/conteudo/hugo-bonitao")

                    }, 500);
                }}
                href="/conteudo/hugo-bonitao"
                className={classNames.buttonAtom}
            >
                <span className={classNames.linkBtn}>
                    {text}
                </span>
            </Link>
        </div>
    )
}