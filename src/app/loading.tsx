export default function Loading() {
    return (
        <div
            role="status"
            aria-label="Loading"
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '48px',
                    height: '48px',
                    border: '3px solid rgba(255, 255, 255, 0.1)',
                    borderTopColor: 'var(--accent-gold)',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite',
                }}
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}
