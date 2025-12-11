import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SafeImage from '@/components/SafeImage';
import Grid from '@mui/material/Grid';

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Liên hệ</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Địa chỉ</Typography>
          <Typography>123 Đường Hoa, Quận 1, TP. Hồ Chí Minh</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Điện thoại</Typography>
          <Typography>0977 123 456</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>Email</Typography>
          <Typography>lienhe@ngocanh-beauty.vn</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <SafeImage src="/services.jpg" alt="Map" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
