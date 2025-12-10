import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'Thẩm Mỹ Viện Minh - Dịch vụ chuyên nghiệp',
  description: 'Trang web demo Thẩm mỹ viện - đặt lịch, dịch vụ, trước sau'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Providers>
          <Header />
          <main style={{ minHeight: '70vh' }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
