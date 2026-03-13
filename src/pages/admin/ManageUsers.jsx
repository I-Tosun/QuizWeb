import { useEffect, useState } from "react";
import "../../assets/styles/Admin.css";

import {
    getUserFromToken,
    getUserInfo,
    deleteUser
} from "../../services/authService";

const ManageUsers = () => {

    const [user, setUser] = useState(null);

    const loadUser = async () => {

        const username = getUserFromToken();
        const data = await getUserInfo(username);

        setUser(data);
    };

    useEffect(() => {
        loadUser();
    }, []);

    const handleDelete = async (username) => {

        const confirmDelete = window.confirm(
            `Weet je zeker dat je gebruiker ${username} wilt verwijderen?`
        );

        if (!confirmDelete) return;

        try {

            await deleteUser(username);

            alert("User verwijderd");

            setUser(null);

        } catch (error) {

            alert("Verwijderen mislukt");

        }
    };

    if (!user) return <p>Loading users...</p>;

    return (
        <section className="admin_page">

            <div className="admin_container">

                <h1>Manage Users</h1>

                <p>Gebruikers in het systeem.</p>

                <div className="admin_table">

                    <div className="admin_table_header">
                        <span>ID</span>
                        <span>Username</span>
                        <span>Email</span>
                        <span>Action</span>
                    </div>

                    <div className="admin_table_row">
                        <span>{user.id}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>

                        <button
                            className="admin_delete"
                            onClick={() => handleDelete(user.username)}
                        >
                            Delete
                        </button>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ManageUsers;