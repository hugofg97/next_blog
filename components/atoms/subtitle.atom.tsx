
interface SubTitleAtomInterface {
    text: string;
    classes: string;
}

export function SubTitleAtom({text, classes}:SubTitleAtomInterface): JSX.Element {
    return (
        <h2 className={classes}>{text}</h2>
    )
}