import "../styles/QuizCard.css";
import { Icon } from "@iconify/react";

const QuizCard = ({ title, icon, onClick }) => {
    return (
        <div className="quiz_card" onClick={onClick}>
            <Icon icon={icon} className="quiz_icon" />
            <h3 className="quiz_card_title">{title}</h3>
        </div>
    );
};

export default QuizCard;
