import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Footer() {
  return (
    <Box component="footer" className="footer-root" sx={{ mt: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 2 }}>
          <Box>
            <Typography variant="h6">ILMio</Typography>
            <Typography variant="body2">Địa chỉ: 123 Đường Làn Sóng, Thành phố</Typography>
            <Typography variant="body2">Hotline: 0909 123 456</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1">Liên kết</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/">Trang chủ</Link>
              <Link href="/services">Dịch vụ</Link>
              <Link href="/booking">Đặt lịch</Link>
            </Box>
          </Box>
          <Box>
            <Typography variant="subtitle1">Giờ mở cửa</Typography>
            <Typography variant="body2">Thứ 2 - Thứ 7: 09:00 - 19:00</Typography>
            <Typography variant="body2">Chủ Nhật: 09:00 - 16:00</Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="caption">© {new Date().getFullYear()} ILMio. Bản quyền thuộc về ILMio.</Typography>
        </Box>
      </Container>
    </Box>
  )
}
