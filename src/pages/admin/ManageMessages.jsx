import { useEffect, useState } from "react";
import "../../assets/styles/Admin.css";
import { getMessages, deleteMessage } from "../../services/messageService";
import DeleteButton from "../../components/buttons/DeleteButton.jsx";
import BackButton from "../../components/buttons/BackButton.jsx";


const ManageMessages = () => {

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;
        const loadMessages = async () => {
            try {
                const data = await getMessages();
                if (!cancelled) setMessages(data);
            } catch {
                if (!cancelled) setError("Berichten konden niet worden geladen.");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        void loadMessages();

        return () => {
            cancelled = true;
        };

    }, []);
    const handleDelete = async (id) => {

        if (!window.confirm("Bericht verwijderen?")) return;

        try {
            await deleteMessage(id);
            setMessages(prev => prev.filter((m) => m.id !== id));

        } catch {
            alert("Verwijderen mislukt");
        }
    };

    return (
        <section className="admin_page">
            <div className="admin_container">

                <div className="admin_header">
                    <h1>Manage Messages</h1>
                    <p>Bekijk en beheer contactberichten.</p>
                </div>

                {loading && <p>Berichten laden...</p>}
                {error && <p style={{ color: "#d33" }}>{error}</p>}

                {!loading && !error && messages.length === 0 && (
                    <p>Geen berichten gevonden.</p>
                )}

                {!loading && !error && messages.length > 0 && (
                    <div className="admin_table messages_grid">

                        <div className="admin_table_header">
                            <span>Naam</span>
                            <span>Email</span>
                            <span>Bericht</span>
                            <span>Datum</span>
                            <span>Action</span>
                        </div>

                        {messages.map((msg) => (
                            <div className="admin_table_row" key={msg.id}>
                                <span>{msg.name}</span>
                                <span>{msg.email}</span>
                                <span>{msg.message}</span>
                                <span>{msg.date}</span>
                                <DeleteButton onDelete={() => handleDelete(msg.id)} />
                            </div>
                        ))}

                    </div>
                )}

                <BackButton />

            </div>
        </section>
    );
};

export default ManageMessages;