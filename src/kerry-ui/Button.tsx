import React from "react"

export const Button = ({ children, onClick }: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
    return <button onClick={onClick} style={{ background: 'var(--kerry-sec)', color: '#fff', border: 'none', borderRadius: '4px', padding: '14px 32px', cursor: 'pointer', display: 'block', margin: 'auto', fontWeight: 'bold' }}>
        {children}
    </button>
} 