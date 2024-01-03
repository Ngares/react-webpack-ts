import React from 'react';
import './styles/index.scss';
import Armadilo from '../assets/images/arm.svg';
import lucas from '../assets/images/lucas.jpg';
import Counter from '../components/Counter';
import Some from '../components/Some';

export default function App (): JSX.Element {
    return (
        <div className="app">
            КРАСНЫЙ
            <img alt="lucas" className="img" src={ lucas } />
            <Armadilo />
            <Some />
            <Counter />
        </div>
    );
}
