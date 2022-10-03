import React, { PropsWithChildren } from "react"

interface IRow extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    spacing?: number
}

export const Row = (props: PropsWithChildren<IRow>) => {
    return (
        <div {...props} className='row'>
            {props.children}
        </div>
    )
}