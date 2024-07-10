import { Rubik } from '@next/font/google';
import './globals.css';
import Header from '@/app/_components/Header/Header';
import Footer from '@/app/_components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Karentpay Gateway',
  description: 'A smart payment gateway for your daily need'
};


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/jpeg" href="/favicon.jpeg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${rubik.className} body-background`}>
        <Header />
        <main >{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
