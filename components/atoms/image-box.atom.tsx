import Image from "next/image";

type Loading = "lazy" | "eager" | undefined

interface ImageBoxAtomInterface {
    src: string;
    classes: string;
    quality: number;
    width?: number;
    height?: number;
    loading: Loading;
    layout?: string;
    alt: string;


}


export function ImageBoxAtom({width, height, classes, quality, loading, layout, src, alt}:ImageBoxAtomInterface): JSX.Element {
    return (
        <div className={classes}>
            <Image alt={alt} src={`${src}`} quality={quality ?? 75} width={width ?? undefined} height={height ?? undefined}  loading={loading ?? 'lazy'}  layout={layout?? undefined}/>
        </div>
    );
}
