import { useRouter } from 'next/router'
import { isBrowser } from 'react-device-detect'
import Header from 'components/Header'
import Footer from 'components/Footer'

import { useWindowSize } from 'utils/hooks'

const DefaultLayout = ({ settings, children }) => {
  const router = useRouter()
  const windowSize = useWindowSize()
  const shouldAnimate = router.pathname === '/' && windowSize.width >= 768

  return (
    <div className='flex flex-col min-h-screen'>
      <Header settings={settings} shouldAnimate={shouldAnimate} />
      <main
        className='relative py-20'
        style={shouldAnimate ? { marginTop: '60vh' } : {}}
      >{children}</main>
      <Footer settings={settings} />
    </div>
  )
};

export default DefaultLayout;
