interface ParagraphAtomInterface {
  classes: string;
  text: string;
}

export function ParagraphAtom({
  classes,
  text,
}: ParagraphAtomInterface): JSX.Element {
  return <p className={classes}>{text}</p>;
}
