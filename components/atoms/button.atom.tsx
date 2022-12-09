import classNames from './styles/buttonAtom.module.scss'

export interface ButtonPropsInterface {
    children: JSX.Element;
}

export function ButtonAtom({ children }: ButtonPropsInterface): JSX.Element {

    return (
        <button
            className={classNames.buttonAtom}
        >{children}</button>
    )
}