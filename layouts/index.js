import { useRouter } from 'next/router'

import Header from 'components/Header'
import CityStatus from 'components/CityStatus'
import Footer from 'components/Footer'
import Dot from 'components/Dot'

const DefaultLayout = ({ settings, children }) => {
  const router = useRouter()

  return (
    <div className='flex flex-col min-h-screen'>
      <CityStatus settings={settings} />
      <Header settings={settings} pathname={router.pathname}/>
      <main
        className='relative py-20 mt-40'
        style={router.pathname === '/' ? { marginTop: '700px' } : {}}
      >{children}</main>
      <Footer settings={settings} />
      <Dot />
    </div>
  )
};

export default DefaultLayout;
