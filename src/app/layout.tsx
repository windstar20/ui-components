import Gnb from '@/app/gnb';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UI Elements | FE James',
  description: 'vanilla / React로 UI 요소 만들기',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
    <body>
      <Gnb />
      <main>{children}</main>
    </body>
    </html>
  );
};
export default Layout;
