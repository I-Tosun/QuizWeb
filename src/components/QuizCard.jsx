import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { t } from "../helpers/translate";
import "../assets/styles/QuizCard.css";

const QuizCard = ({ icon, titleKey, path }) => {

    return (

        <Link to={path} className="quiz_card">
            <Icon icon={icon} width="32" />
            <h3>{t(titleKey)}</h3>
        </Link>
    );
};

export default QuizCard;

