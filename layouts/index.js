import Header from 'components/Header'
import Footer from 'components/Footer'
import Dot from 'components/Dot'

const DefaultLayout = ({ settings, children }) => (
  <div className='flex flex-col min-h-screen'>
    <Header settings={settings} />
    <main className='relative py-20'>{children}</main>
    <Footer settings={settings} />
    <Dot />
  </div>
);

export default DefaultLayout;
