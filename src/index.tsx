import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootContainer = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootContainer);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);