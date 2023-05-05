
export function LoadingView() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <span
                style={{
                    display: "flex"
                }}
            >
                Loading...
                <p
                    className="loading"
                >
                </p>
            </span>
        </div>
    );
}