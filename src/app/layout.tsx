import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'Thẩm mỹ viện Ngọc Ánh',
  description: 'Website demo thẩm mỹ viện — đặt lịch, dịch vụ, before/after'
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
