import Header from 'components/Header';
import Footer from 'components/Footer';

/**
 * Default layout component
 */
const DefaultLayout = ({ settings, children }) => (
  <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='relative'>{children}</main>
    <Footer settings={settings} />
  </div>
);

export default DefaultLayout;
