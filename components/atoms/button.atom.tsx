import classNames from './styles/buttonAtom.module.scss'

export interface ButtonPropsInterface {
    children: JSX.Element;
}

export function ButtonAtom({ children }: ButtonPropsInterface): JSX.Element {

    return (
        <div className={classNames.containerBtn}>

            <button
                className={classNames.buttonAtom}
            ><a href="">
                    {children}
                </a>
            </button>
        </div>
    )
}