import '../styles/globals.css'
import FormData from './FormData'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <FormData />
    </div>)
}

export default MyApp
