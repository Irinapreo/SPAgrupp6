import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/Layout.css'; // Import layout-specific styles

const Layout = ({ children }) => {
    return (
        <div className="App">
            <Navbar />
            <main role="main" className="pb-3">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

// Define propTypes for the component
Layout.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is passed and is of the correct type
};

export default Layout;
