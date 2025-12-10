import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SafeImage from '../../components/SafeImage'

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Về ILMio</Typography>
      <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            ILMio là thẩm mỹ viện chuyên sâu về chăm sóc da và trẻ hóa. Đội ngũ chuyên gia được đào tạo chính quy,
            cam kết liệu trình an toàn, minh bạch và hiệu quả. Chúng tôi sử dụng công nghệ được chứng nhận và
            sản phẩm chính hãng.
          </Typography>
          <Typography variant="body1">
            Sứ mệnh: Mang lại sự tự tin và vẻ đẹp tự nhiên cho khách hàng.
          </Typography>
        </Box>
        <Box sx={{ width: 320 }}>
          <SafeImage src="/services.jpg" alt="Về ILMio" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
        </Box>
      </Box>
    </Container>
  )
}
