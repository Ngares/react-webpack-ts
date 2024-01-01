import React from 'react';
import './styles/index.scss';
import Armadilo from '../assets/images/arm.svg';
import lucas from '../assets/images/lucas.jpg';

export default function App (): JSX.Element {
    return (
        <div className="app">
            123
            <img alt="lucas" className="img" src={ lucas } />
            <Armadilo />
        </div>
    );
}
