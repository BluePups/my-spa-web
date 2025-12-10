import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import SafeImage from '@/components/SafeImage';

export default function ContactPage() {
  return (
    <Container className="container" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Liên hệ</Typography>
      <Box display="flex" gap={4} flexDirection={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Typography variant="body1" paragraph>
            Địa chỉ: 123 Đường Đẹp, Quận X, Thành phố Y
          </Typography>
          <Typography variant="body1" paragraph>
            Điện thoại: 0900 123 456
          </Typography>
          <Typography variant="body1" paragraph>
            Email: lienhe@thammyminh.vn
          </Typography>
        </Box>
        <Box flexBasis="360px">
          <SafeImage src="/services.jpg" alt="Contact" style={{ width: '100%', borderRadius: 8 }} />
        </Box>
      </Box>
    </Container>
  );
}
