import Header from 'components/Header';
import Footer from 'components/Footer';

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
