import { IMainProps } from "@/type/type"
import React, { PropsWithChildren, ReactNode } from "react"


interface IBox extends IMainProps {
    children: ReactNode
    // position?: 'absolute' | 'relative' | 'fixed' | 'sticky' | 'static' | undefined
    // display?: 'flex' | 'block' | 'grid' | 'static' | undefined
    // alignItems?: 'flex-start' | 'flex-end' | 'center' | undefined,
    // justifyContent?: 'start' | 'end' | 'center' | 'space-between' | undefined
}

export const Box = ({
    children,
    ...res

}: PropsWithChildren<IBox>) => {
    return (
        <div {...res} >
            {children}
        </div>
    )
}