import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from "./application/Router.js";



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router/>)




