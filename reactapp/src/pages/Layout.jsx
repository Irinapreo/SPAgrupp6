import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import '../assets/Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="App">
            <main role="main" className="pb-3">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
