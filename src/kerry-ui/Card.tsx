import { IMainProps } from "@/type/type"
import React, { PropsWithChildren, ReactNode } from "react"



export interface ICard extends IMainProps {
    angle?: 'square' | 'rounded',
    children: ReactNode
}

export const Card = ({
    height,
    width = '100px',
    maxHeight = '100%',
    maxWidth = '100%',
    padding = '20px',
    margin = 0,
    angle = 'square',
    background = '#fff',
    children
}: PropsWithChildren<ICard>): JSX.Element => {
    return <div style={{
        maxHeight,
        maxWidth, height, width, padding, margin, background, borderRadius: angle === 'rounded' ? '20px' : undefined
    }}>
        {children}
    </div>
}