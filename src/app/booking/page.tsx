import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <Container className="container section">
      <Typography variant="h2" sx={{ mb: 2 }}>Đặt lịch dịch vụ</Typography>
      <BookingForm />
    </Container>
  );
}
