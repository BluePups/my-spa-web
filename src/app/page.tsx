import SafeImage from '@/components/SafeImage';
import ServiceCard from '@/components/ServiceCard';
import BookingForm from '@/components/BookingForm';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="hero" style={{ background: 'linear-gradient(135deg,var(--gradient-header-start),var(--gradient-header-end))' }}>
        <SafeImage src="/hero-banner.jpg" alt="Banner chính" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="overlay" />
        <Container className="container" style={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ color: '#fff', textAlign: 'center', py: 6 }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '1.6rem', md: '2.4rem' }, fontWeight: 800 }}>
              Thẩm mỹ viện Thanh Hải — Chăm sóc nhan sắc chuyên nghiệp
            </Typography>
            <Typography sx={{ mt: 2, mb: 3 }}>
              Dịch vụ phun xăm, chăm sóc da, trẻ hoá và nhiều liệu trình an toàn, hiệu quả.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant="contained" href="/booking">Đặt lịch ngay</Button>
              <Button variant="outlined" href="/services">Xem dịch vụ</Button>
            </Stack>
          </Box>
        </Container>
      </section>

      <Container className="container section">
        <Typography variant="h2" sx={{ mb: 3 }}>Dịch vụ nổi bật</Typography>
        <Stack direction="row" flexWrap="wrap" gap={2}>
          <ServiceCard title="Chăm sóc da chuyên sâu" description="Làm sạch, cấp ẩm, phục hồi da tổn thương, phù hợp mọi loại da." image="/services.jpg" />
          <ServiceCard title="Phun thêu mày" description="Sắc nét, tự nhiên, giữ màu bền đẹp." image="/services.jpg" />
          <ServiceCard title="Điều trị mụn chuyên sâu" description="Liệu trình loại bỏ nhân mụn, giảm sẹo và phục hồi da." image="/services.jpg" />
        </Stack>
      </Container>

      <Container className="container section">
        <Typography variant="h2" sx={{ mb: 3 }}>Đặt lịch nhanh</Typography>
        <BookingForm />
      </Container>
    </>
  );
}
