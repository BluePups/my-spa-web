import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesPage() {
  return (
    <Container className="container section">
      <Typography variant="h2" sx={{ mb: 3 }}>Danh sách dịch vụ</Typography>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        <ServiceCard title="Trị liệu trẻ hoá" description="Sử dụng công nghệ hiện đại giúp trẻ hoá làn da." image="/services.jpg" />
        <ServiceCard title="Điều trị nám" description="Liệu trình loại bỏ sắc tố, làm đều màu da." image="/services.jpg" />
        <ServiceCard title="Nâng cơ căng da" description="Giữ vẻ tươi trẻ, săn chắc." image="/services.jpg" />
        <ServiceCard title="Phun môi" description="Màu môi tươi tắn, tự nhiên." image="/services.jpg" />
      </Stack>
    </Container>
  );
}
