import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Đặt lịch dịch vụ</Typography>
      <BookingForm />
    </Container>
  );
}
