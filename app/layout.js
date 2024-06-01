import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/_components/Header/Header';
import Footer from '@/app/_components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Payment Gateway',
  description: 'A smart payment gateway for your daily need'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}