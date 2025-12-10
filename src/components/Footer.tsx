import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box className="footer">
      <Box className="container" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Thẩm Mỹ Viện Minh</Typography>
          <Typography variant="body2">© {new Date().getFullYear()} Thẩm Mỹ Viện Minh. Mọi quyền được bảo lưu.</Typography>
        </Box>

        <Box>
          <Link href="/contact">Liên hệ</Link> · <Link href="/booking">Đặt lịch</Link>
        </Box>
      </Box>
    </Box>
  );
}
