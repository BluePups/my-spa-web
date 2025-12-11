import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SafeImage from '@/components/SafeImage';
import Box from '@mui/material/Box';

export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
        <Box sx={{ flex: 1 }}>
          <SafeImage src="/services.jpg" alt="Giới thiệu thẩm mỹ viện" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 8 }} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Về chúng tôi</Typography>
          <Typography paragraph>
            Thẩm mỹ viện Ngọc Ánh chuyên cung cấp giải pháp làm đẹp chuyên nghiệp, an toàn và cá nhân hóa.
            Với đội ngũ chuyên gia nhiều năm kinh nghiệm, chúng tôi cam kết mang đến hiệu quả và trải nghiệm dịch vụ chu đáo.
          </Typography>
          <Typography paragraph>
            Từ liệu trình chăm sóc da, phục hồi, đến nâng cơ, tiêm filler và trang điểm cô dâu — mỗi dịch vụ được xây dựng theo chuẩn an toàn y tế.
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
