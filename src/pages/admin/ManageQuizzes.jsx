import "../../assets/styles/Admin.css";

const ManageQuizzes = () => {

    return (
        <section className="admin_page">

            <div className="admin_container">

                <h1>Manage Quizzes</h1>

                <p>Hier kan de admin quiz categorieën beheren.</p>

                <div className="admin_table">

                    <div className="admin_table_header">
                        <span>Category</span>
                        <span>Questions</span>
                    </div>

                    <div className="admin_table_row">
                        <span>Sport</span>
                        <span>15</span>
                    </div>

                    <div className="admin_table_row">
                        <span>Film</span>
                        <span>15</span>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default ManageQuizzes;