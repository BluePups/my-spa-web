import SafeImage from '@/components/SafeImage';
import ServiceCard from '@/components/ServiceCard';
import { Box, Container, Grid, Stack, Typography, Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  const services = [
    {
      id: 'dv1',
      title: 'Trị liệu da mặt chuyên sâu',
      desc: 'Kết hợp công nghệ ánh sáng và tinh chất chuyên biệt giúp da sáng, giảm mụn, se khít lỗ chân lông.',
      img: '/services.jpg'
    },
    {
      id: 'dv2',
      title: 'Tiêm filler & tạo hình',
      desc: 'Tạo đường nét thanh tú, an toàn, kỹ thuật chuyên gia có chứng chỉ.',
      img: '/sample-before-after/combined1.jpg'
    },
    {
      id: 'dv3',
      title: 'Chăm sóc body & giảm béo',
      desc: 'Liệu trình kết hợp massage, máy RF, và dinh dưỡng cá nhân hóa.',
      img: '/services.jpg'
    }
  ];

  return (
    <Box>
      <Box className="hero">
        <SafeImage
          src="/hero-banner.jpg"
          alt="Banner thẩm mỹ viện"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            px: 2
          }}
        >
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            Thẩm Mỹ Viện Minh
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Chăm sóc vẻ đẹp toàn diện — an toàn, chuyên nghiệp
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <Link href="/booking">
              <Button variant="contained" color="primary">Đặt lịch ngay</Button>
            </Link>
            <Link href="/services">
              <Button variant="outlined">Xem dịch vụ</Button>
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45))',
            zIndex: 1
          }}
        />
      </Box>

      <Container className="container" sx={{ py: 6 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
          Dịch vụ nổi bật
        </Typography>
        <Grid container spacing={3}>
          {services.map((s) => (
            <Grid item xs={12} sm={6} md={4} key={s.id}>
              <ServiceCard title={s.title} description={s.desc} image={s.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
