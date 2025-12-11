import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ServiceCard from '@/components/ServiceCard';
import SafeImage from '@/components/SafeImage';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const services = [
  {
    id: 'skin1',
    title: 'Trẻ hóa da bằng Laser',
    desc: 'Liệu trình 3 buổi giúp cải thiện sắc tố, mịn màng và săn chắc da.',
    img: '/services.jpg'
  },
  {
    id: 'fillers',
    title: 'Fillers & Tiêm chất làm đầy',
    desc: 'Tạo dáng khuôn mặt, làm đầy vùng hõm và nâng mũi không phẫu thuật.',
    img: '/services.jpg'
  },
  {
    id: 'makeup',
    title: 'Trang điểm cô dâu chuyên nghiệp',
    desc: 'Gói trang điểm và làm tóc toàn diện cho ngày trọng đại.',
    img: '/services.jpg'
  }
];

export default function HomePage() {
  return (
    <>
      <Box className="hero" sx={{ position: 'relative' }}>
        <SafeImage src="/hero-banner.jpg" alt="Hero banner thẩm mỹ viện" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box className="hero-overlay" />
        <Box className="hero-content">
          <Container maxWidth="lg">
            <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
              Thẩm mỹ viện Ngọc Ánh
            </Typography>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Nâng tầm nhan sắc — Tự tin kiêu sa. Đội ngũ chuyên gia, liệu trình cá nhân hóa.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Link href="/booking">
                <Button variant="contained" size="large">Đặt lịch ngay</Button>
              </Link>
              <Link href="/services">
                <Button variant="outlined" size="large">Xem dịch vụ</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>Dịch vụ nổi bật</Typography>
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <ServiceCard title={s.title} description={s.desc} image={s.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
