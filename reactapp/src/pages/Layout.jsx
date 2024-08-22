import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import '../assets/Layout.css';

const Layout = ({ children }) => {
    const location = useLocation(); // Get the current location

    // Determine if the Navbar and Footer should be hidden
    const hideHeaderFooter = location.pathname === '/borat' || location.pathname === '/kontakt/borat';

    return (
        <div className="App">
            {!hideHeaderFooter && <Navbar />} {/* Conditionally render Navbar */}
            <main role="main" className="pb-3">
                <div className="container">
                    {children}
                </div>
            </main>
            {!hideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
