import React from 'react';
import BookingForm from '@/components/BookingForm';
import { Container, Typography } from '@mui/material';

export default function BookingPage() {
  return (
    <Container className="container" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Đặt lịch khám / liệu trình</Typography>
      <BookingForm />
    </Container>
  );
}
