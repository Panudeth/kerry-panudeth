export interface IMainProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    height?: number | string,
    width?: number | string,
    maxHeight?: number | string,
    maxWidth?: number | string,
    padding?: number | string,
    margin?: number | string,
    background?: string,
    overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | undefined
}