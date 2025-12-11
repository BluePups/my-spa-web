import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ServiceCard from '@/components/ServiceCard';
import SafeImage from '@/components/SafeImage';

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
    id: 'body1',
    title: 'Giảm béo công nghệ cao',
    desc: 'Giải pháp giảm mỡ vùng an toàn, kết quả nhanh chóng.',
    img: '/services.jpg'
  },
  {
    id: 'spa',
    title: 'Chăm sóc da chuyên sâu',
    desc: 'Liệu trình massage & mặt nạ chuyên biệt cho từng loại da.',
    img: '/services.jpg'
  }
];

export default function ServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Danh mục dịch vụ</Typography>
      <Grid container spacing={3}>
        {services.map((s) => (
          <Grid item xs={12} sm={6} md={3} key={s.id}>
            <ServiceCard title={s.title} description={s.desc} image={s.img} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
