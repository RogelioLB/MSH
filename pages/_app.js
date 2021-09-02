import '../styles/globals.css'
import UserContextProvider from '../context/UserContext'
import SongContextProvider from '../context/SongContext';

function MyApp({ Component, pageProps }) {
  return <UserContextProvider><SongContextProvider><Component {...pageProps}/></SongContextProvider></UserContextProvider>
}

export default MyApp;
