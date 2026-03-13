import { Link } from "react-router-dom";
import "../../assets/styles/Admin.css";

const AdminDashboard = () => {
    return (
        <section className="admin_page">

            <div className="admin_container">

                <h1>Admin Dashboard</h1>

                <p className="admin_subtitle">
                    Beheer gebruikers, quizzen en scores.
                </p>

                <div className="admin_grid">

                    <Link to="/admin/users" className="admin_card">
                        <h2>Users</h2>
                        <p>Beheer alle gebruikers van de applicatie.</p>
                    </Link>

                    <Link to="/admin/scores" className="admin_card">
                        <h2>Scores</h2>
                        <p>Bekijk en beheer alle quiz resultaten.</p>
                    </Link>

                    <Link to="/admin/quizzes" className="admin_card">
                        <h2>Quizzes</h2>
                        <p>Beheer quiz categorieën en vragen.</p>
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default AdminDashboard;