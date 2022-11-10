import React, {Fragment, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './routes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);


