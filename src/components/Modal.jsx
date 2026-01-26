import "../styles/Modal.css";

const Modal = ({ title, onClose, children }) => {
    return (
        <div className="modal_overlay">
            <div className="modal">
                <div className="modal_header">
                    <h2>{title}</h2>
                    <button className="modal_close" onClick={onClose}>✕</button>
                </div>

                <div className="modal_content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
