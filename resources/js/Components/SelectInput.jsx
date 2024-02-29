export default ({
    label,
    name,
    children,
    errors = [],
    ...props
}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {label && (
                <label style={{ marginBottom: '5px' }} htmlFor={name}>
                    {label}:
                </label>
            )}
            <select
                id={name}
                name={name}
                {...props}
                style={{
                    width: label == '' ? '50%' : '400px',
                    borderRadius: '5px',
                    padding: '8px',
                    border: `1px solid ${errors.length ? 'red' : '#ccc'}`,
                }}
            >
                {children}
            </select>
            {errors && <div style={{ color: 'red', margin: '5px' }}>{errors}</div>}
        </div>
    );
};
