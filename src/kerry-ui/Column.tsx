import React, { PropsWithChildren, ReactNode } from "react"

interface ICol extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sm?: number
    md?: number
    lg?: number
    xl?: number
    children: ReactNode
}

export const Column = ({ children, sm = 1, md = 1, lg = 1, xl = 1, }: PropsWithChildren<ICol>) => {

    return (
        <div className={`col-sm-${sm ?? md ?? lg ?? xl}`}>
            {children}
        </div>
    )
}