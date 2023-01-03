import Link from "next/link";
import classNames from "./styles/buttonAtom.module.scss";
import { useRouter } from "next/router";
export interface ButtonPropsInterface {
    text: string;
    path: string
}

export function ButtonAtom({ text, path }: ButtonPropsInterface): JSX.Element {
    const router = useRouter();
    return (
        <div className={classNames.containerBtn}>
            <Link

                href={path}
                className={classNames.buttonAtom}
            >
                <span className={classNames.linkBtn}>{text}</span>
            </Link>
        </div>
    );
}
