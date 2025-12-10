import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BookingForm from '../../components/BookingForm'

export default function BookingPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>Đặt lịch dịch vụ</Typography>
      <Typography variant="body2" sx={{ mb: 3 }}>
        Vui lòng điền thông tin để chúng tôi liên hệ lại xác nhận lịch cho bạn.
      </Typography>
      <Box sx={{ boxShadow: 2, p: 3, borderRadius: 2 }}>
        <BookingForm />
      </Box>
    </Container>
  )
}
