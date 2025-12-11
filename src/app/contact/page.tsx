import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ContactPage() {
  return (
    <Container className="container section">
      <Typography variant="h2" sx={{ mb: 2 }}>Liên hệ</Typography>
      <Box>
        <Typography>Địa chỉ: 123 Đường Làm Đẹp, Quận X, Thành phố</Typography>
        <Typography>SĐT: 0987 654 321</Typography>
        <Typography>Email: lienhe@thammy-thanhhai.vn</Typography>
      </Box>
    </Container>
  );
}
