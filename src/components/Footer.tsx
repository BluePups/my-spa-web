'use client'

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box component="footer" className="footer" sx={{ mt: 6 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6">Thẩm mỹ viện Ngọc Ánh</Typography>
            <Typography variant="body2">Địa chỉ: 123 Đường Hoa, Quận 1, TP. HCM</Typography>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton aria-label="phone"><PhoneIcon /></IconButton>
            <Typography variant="body2">0977 123 456</Typography>
            <IconButton aria-label="email"><EmailIcon /></IconButton>
            <Typography variant="body2">lienhe@ngocanh-beauty.vn</Typography>
          </Stack>
        </Stack>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="caption">© {new Date().getFullYear()} Thẩm mỹ viện Ngọc Ánh. Bảo lưu mọi quyền.</Typography>
        </Box>
      </Container>
    </Box>
  );
}
