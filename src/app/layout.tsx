import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'Thẩm Mỹ Viện - Dịch Vụ Chăm Sóc Sắc Đẹp',
  description: 'Trang web demo cho thẩm mỹ viện - Đặt lịch, Dịch vụ, Before/After'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
