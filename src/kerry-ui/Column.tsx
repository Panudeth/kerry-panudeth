import React, { PropsWithChildren, ReactNode, useMemo } from "react"

interface ICol extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
    xl?: number
    children: ReactNode
}

export const Column = ({ children, sm , md , lg , xl , ...rest }: PropsWithChildren<ICol>) => {

    const classProps: string = useMemo(() => {
        const classArr = []
        if (sm) classArr.push(`col-sm-${sm}`)
        if (md) classArr.push(`col-md-${md}`)
        if (lg) classArr.push(`col-lg-${lg}`)
        if (xl) classArr.push(`col-xl-${xl}`)
        if (classArr.length > 0) {
            return classArr.join(' ')
        }
        return ''
    }, [lg, md, sm, xl])
    console.log({ classProps })
    return (
        <div {...rest} className={classProps}>
            {children}
        </div>
    )
}