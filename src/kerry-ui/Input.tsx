import React from 'react'

interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    icon?: string
}

export const Input = ({
    label,
    icon,
    ...res
}: IInput) => {
    return (
        <div style={{ margin: '5% auto' }}>
            <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>{label}</span>
            <div style={{ display: 'flex', border: '1px solid #8C8C8C', borderRadius: '4px', padding: '8px 12px' }}>
                <img src={icon} alt={label} />
                <input {...res} style={{ border: 0, width: '100%',marginLeft:'12px' }} type="text" placeholder={label} />
            </div>
        </div>
    )
}