import 'styles/index.css'
import Dot from 'components/Dot'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Dot />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
