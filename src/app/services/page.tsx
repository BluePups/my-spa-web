import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import ServiceCard from '@/components/ServiceCard';
import SafeImage from '@/components/SafeImage';

export default function ServicesPage() {
  const list = [
    { id: 's1', title: 'Làm sáng da bằng ánh sáng', desc: 'Liệu trình 6 buổi - cải thiện sạm, tăng độ đều màu', img: '/services.jpg' },
    { id: 's2', title: 'Nâng cơ trẻ hóa', desc: 'Công nghệ RF, giảm nhăn, săn chắc cơ', img: '/sample-before-after/combined1.jpg' },
    { id: 's3', title: 'Tẩy tế bào chết chuyên sâu', desc: 'Da mịn màng, sẵn sàng cho điều trị tiếp theo', img: '/services.jpg' }
  ];

  return (
    <Container className="container" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Dịch vụ của chúng tôi</Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Các gói dịch vụ được thiết kế phù hợp cho từng loại da và nhu cầu thẩm mỹ.
      </Typography>

      <Grid container spacing={3}>
        {list.map((svc) => (
          <Grid item xs={12} sm={6} md={4} key={svc.id}>
            <ServiceCard title={svc.title} description={svc.desc} image={svc.img} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
