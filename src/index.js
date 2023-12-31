import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Importa el JavaScript de Bootstrap
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

function MyApp() {
  useEffect(() => {
    document.title = 'DIASERCH'; // Cambia 'Nuevo Título' por el título que desees
  }, []);

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyApp />);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
