import React, { PropsWithChildren } from "react"

export const Box = (props: PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}