import { RegisterInputs } from '@/components/accountForm/Login'
import React from 'react'
import { ControllerRenderProps } from 'react-hook-form'

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    icon?: string
    margin?: string
    field: ControllerRenderProps<RegisterInputs, any>
}

export const Input = ({
    label,
    icon,
    margin = '7% auto',
    field,
    ...res
}: IInput) => {
    return (
        <div style={{ margin }}>
            <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{label}</span>
            <div style={{ display: 'flex', border: '1px solid #8C8C8C', borderRadius: '4px', padding: '8px 12px' }}>
                <img src={icon} alt={label} />
                <input {...res} {...field} style={{ border: 0, width: '100%', marginLeft: '12px', ...res.style }} placeholder={label} />
            </div>
        </div>
    )
}