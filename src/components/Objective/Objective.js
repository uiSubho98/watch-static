import React from 'react';
import './Objective.css'

const Objective = () => {
    return (
        <div className='objective-container container' id='objective'>
            <div className="objective-header">
                <h2 className='text-center'>Our Objective</h2>
            </div>
            <div className="objective-content container">
                <ol>
                <li>
                Creating a safe, judgement free, queer affirmative space for mental health counselling.
                </li>
                <li>
                Normalising mental health issues by educating people about their condition, help them understand their triggers, and  develop healthy coping mechanisms. 
                </li>
                <li>
                Helping people understand mental health conditions better by providing information  through credible sources.
                </li>
                <li>
                Changing the way people view mental health by encouraging people to seek help of a professional in case they  are mentally or emotionally distressed.
                </li>
                <li>
                Motivating people to question harmful taboos, myths and stereotypes and to open up about less focused but important issues.
                </li>
                </ol>
                
            </div>

        </div>
    );
};

export default Objective;