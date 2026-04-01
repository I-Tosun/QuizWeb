import { Link } from "react-router-dom";
import "../../assets/styles/Admin.css";

const AdminDashboard = () => {

    return (
        <section className="admin_page">

            <div className="admin_container">

                <div className="admin_header">
                    <h1>Admin Dashboard</h1>
                    <p>Beheer gebruikers en quiz resultaten.</p>
                </div>

                <div className="admin_dashboard_grid">

                    <Link to="/admin/users" className="admin_card">
                        <h2>Manage Users</h2>
                        <p>Bekijk en beheer alle gebruikers.</p>
                    </Link>

                    <Link to="/admin/scores" className="admin_card">
                        <h2>Manage Scores</h2>
                        <p>Bekijk en beheer alle quiz resultaten.</p>
                    </Link>

                    <Link to="/admin/messages" className="admin_card">
                        <h2>Manage Messages</h2>
                        <p>Bekijk en beheer contactberichten.</p>
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default AdminDashboard;