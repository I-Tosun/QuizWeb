const SuccessMessage = ({ message }) => {
    if (!message) return null;

    return (
        <div style={{
            padding: "12px",
            backgroundColor: "#e6ffed",
            color: "#006622",
            borderRadius: "6px",
            marginBottom: "10px"
        }}>
            {message}
        </div>
    );
};

export default SuccessMessage;