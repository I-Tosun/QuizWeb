const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div style={{
            padding: "12px",
            backgroundColor: "#ffe6e6",
            color: "#b30000",
            borderRadius: "6px",
            marginBottom: "10px"
        }}>
            {message}
        </div>
    );
};

export default ErrorMessage;