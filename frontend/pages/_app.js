import '../styles/globals.css';
import Navbar from '../components/Navbar'; // Ensure correct path
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // Hide navbar on admin pages
    const hideNavbar = router.pathname.startsWith('/admin');

    return (
        <>
            {!hideNavbar && <Navbar />}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
