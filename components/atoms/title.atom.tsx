export interface TitleAtomInterface {
  children?: JSX.Element;
  text?: string;
  classes?: string;
}

export function TitleAtom({
  children,
  text,
  classes,
}: TitleAtomInterface): JSX.Element {
  return (
    <h1 className={classes}>
      {text} {children}
    </h1>
  );
}
