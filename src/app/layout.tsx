import React from 'react'
import Providers from './providers'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Thẩm mỹ ILMio',
  description: 'Website mẫu thẩm mỹ viện - Đặt lịch, Dịch vụ, Trước/Sau'
}

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
  )
}
