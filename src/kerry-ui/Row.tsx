import React, { PropsWithChildren, ReactNode } from "react"

interface IRow extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spacing?: number,
    children: ReactNode
}

export const Row = ({ spacing, children, ...res }: PropsWithChildren<IRow>) => {
    return (
        <div {...res} className='row'>
            {children}
        </div>
    )
}