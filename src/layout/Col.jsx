export function Col({children, textRight}) {
    return (
        <div className={`col ${textRight ? 'text-right' : ''}`}>{children}</div>
    )
}

