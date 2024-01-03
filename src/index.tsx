import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './Bootstrap';
import { store } from '../store';

const rootContainer = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootContainer);

root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>,
);
