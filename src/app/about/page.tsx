import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AboutPage() {
  return (
    <Container className="container section">
      <Typography variant="h2" sx={{ mb: 2 }}>Về chúng tôi</Typography>
      <Box>
        <Typography paragraph>
          Thẩm mỹ viện Thanh Hải thành lập từ năm 2015, với đội ngũ chuyên gia giàu kinh nghiệm, cam kết đem lại dịch vụ an toàn và hiệu quả.
        </Typography>
        <Typography paragraph>
          Chúng tôi chú trọng tư vấn cá nhân hóa cho từng khách hàng, sử dụng công nghệ và sản phẩm đạt chuẩn.
        </Typography>
      </Box>
    </Container>
  );
}
