export default ({ label, name, className, errors = [], ...props }) => {
    return (
        <div className={className} style={{ display: 'flex', flexDirection: 'column'}}>
            {label && (
                <label htmlFor={name} style={{ marginBottom: '5px' }}>
                    {label}:
                </label>
            )}
            <input
                id={name}
                name={name}
                {...props}
                style={{
                    width: '400px',
                    borderRadius: '5px',
                    padding: '8px',
                    border: `1px solid ${errors.length ? 'red' : '#ccc'}`,
                }}
            />
            {errors && <div style={{ color: 'red', marginTop: '5px' }}>{errors}</div>}
        </div>
    );
};
