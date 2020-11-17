import Header from 'components/Header'
import CityStatus from 'components/CityStatus'
import Footer from 'components/Footer'
import Dot from 'components/Dot'

const DefaultLayout = ({ settings, children }) => (
  <div className='flex flex-col min-h-screen'>
    <CityStatus settings={settings} />
    <Header settings={settings} />
    <main className='relative py-20' style={{
      marginTop: '700px'
    }}>{children}</main>
    <Footer settings={settings} />
    <Dot />
  </div>
);

export default DefaultLayout;
