import React from 'react';
import '../styles/QuizCard.css';


const QuizCard = () => {
    const categories = [
        { id: 1, name:'Algemeen'},
        { id: 2, name:'Sport'},
        { id: 3, name:'Muziek'},
        { id: 4, name:'Film'},
        { id: 5, name:'Eten & Drinken'},
        { id: 6, name:'Georgrafie'},
        { id: 7, name: 'Kunst'},
        { id: 8, name:'Geschiedenis'}
    ];

    return (
        <main className={'QuizCard'}>
            <h2>Dit is de hoofdinhoud van de app.</h2>
            <div className='categories'>
                {categories.map((category) => (
                    <div className={category} key={category.id}>
                        {category.name}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default QuizCard;