import Link from 'next/link';
import classNames from './styles/buttonAtom.module.scss'

export interface ButtonPropsInterface {
    children: JSX.Element;
}

export function ButtonAtom({ children }: ButtonPropsInterface): JSX.Element {

    return (
        <div className={classNames.containerBtn}>

            <button
                className={classNames.buttonAtom}
            >
                <span className={classNames.linkBtn}>
                    {children}
                </span>
            </button>
        </div>
    )
}