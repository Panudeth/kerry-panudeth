import { RegisterInputs } from '@/components/accountForm/SignUp'
import React from 'react'
import { ControllerRenderProps } from 'react-hook-form'

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    icon?: string
    margin?: string
    field: ControllerRenderProps<RegisterInputs, any>
    errors?: string
}

export const Input = ({
    label,
    icon,
    margin = '7% auto',
    field,
    errors = '',
    ...res
}: IInput) => {
    return (
        <div style={{ margin, ...res.style }}>
            <span style={{ color: errors ? 'red' : '#000', fontSize: '14px', fontWeight: 'bold' }}>{`${label} ${errors}`}</span>
            <div style={{ display: 'flex', border: errors ? '1px solid red' : '1px solid #8C8C8C', borderRadius: '4px', padding: '8px 12px' }}>
                <img src={icon} alt={label} />
                <input {...res} {...field} style={{ border: 0, width: '100%', marginLeft: '12px' }} placeholder={label} />
            </div>
        </div>
    )
}