import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Liên hệ</Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Địa chỉ: 123 Đường Làn Sóng, Quận Yêu Thương, Thành phố.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Hotline: <strong>0909 123 456</strong>
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Email: <strong>lienhe@ilmio.example</strong>
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Link href="/booking">Đặt lịch trực tuyến</Link>
      </Box>
    </Container>
  )
}
