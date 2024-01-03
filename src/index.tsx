import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Bootstrap';
import Some from './components/Some';

const rootContainer = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootContainer);

root.render(
    <React.StrictMode>
        <App />
        <Some />
    </React.StrictMode>,
);
