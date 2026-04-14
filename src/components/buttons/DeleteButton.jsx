const DeleteButton = ({ onDelete, label = "Delete" }) => {
    return (
        <button className="admin_delete" onClick={onDelete}>
            {label}
        </button>
    );
};

export default DeleteButton;