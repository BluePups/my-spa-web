import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import SafeImage from '@/components/SafeImage';

export default function AboutPage() {
  return (
    <Container className="container" sx={{ py: 6 }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        <Box flex={1}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Về chúng tôi</Typography>
          <Typography variant="body1" paragraph>
            Thẩm Mỹ Viện Minh hoạt động từ năm 2015 với đội ngũ bác sĩ và chuyên viên nhiều kinh nghiệm.
            Cam kết an toàn, tư vấn trung thực và liệu trình cá nhân hoá theo nhu cầu khách hàng.
          </Typography>
          <Typography variant="body1" paragraph>
            Chúng tôi tập trung vào kết quả lâu dài, theo dõi sau liệu trình và hỗ trợ khách hàng tận tình.
          </Typography>
        </Box>
        <Box flexBasis="360px" flexShrink={0}>
          <SafeImage src="/services.jpg" alt="Thẩm mỹ viện" style={{ width: '100%', borderRadius: 8 }} />
        </Box>
      </Box>
    </Container>
  );
}
