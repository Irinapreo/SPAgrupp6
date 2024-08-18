// src/main.jsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './pages/App'; // Import your main App component
import './assets/index.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
);