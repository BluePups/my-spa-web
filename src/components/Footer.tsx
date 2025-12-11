import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box component="footer" className="site-footer">
      <Container className="container">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography>© {new Date().getFullYear()} Thẩm mỹ Thanh Hải. Bảo lưu mọi quyền.</Typography>
          <Typography>Hotline: 0987 654 321</Typography>
        </Box>
      </Container>
    </Box>
  );
}
