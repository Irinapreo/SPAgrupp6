// src/pages/App.jsx
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';  // Import your home page component
import Privacy from '../components/Privacy';  // Import the Privacy component

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />  {/* Default home page */}
                <Route path="/privacy" element={<Privacy />} />  {/* Privacy page */}
            </Routes>
        </Layout>
    );
};

export default App;
