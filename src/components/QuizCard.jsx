import { Icon } from "@iconify/react";
import { useLanguage } from "../context/useLanguage";
import "../assets/styles/QuizCard.css";

const QuizCard = ({ icon, titleKey, onClick }) => {
    const { t } = useLanguage();

    return (
        <div className="quiz_card" onClick={onClick}>
            <Icon icon={icon} width="32" />
            <h3>{t(titleKey)}</h3>
        </div>
    );
};

export default QuizCard;