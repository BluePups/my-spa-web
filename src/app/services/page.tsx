import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ServiceCard from '../../components/ServiceCard'

const services = [
  {
    id: 's1',
    title: 'Liệu trình tắm trắng y tế',
    description: 'Tắm trắng an toàn bằng công nghệ thẩm mỹ kết hợp dưỡng chuyên sâu.',
    image: '/services.jpg',
    price: 'Từ 1.200.000đ'
  },
  {
    id: 's2',
    title: 'Căng da mặt không phẫu thuật',
    description: 'Sử dụng công nghệ RF và filler an toàn, phục hồi nhanh.',
    image: '/services.jpg',
    price: 'Từ 2.500.000đ'
  },
  {
    id: 's3',
    title: 'Massage thư giãn & dưỡng da',
    description: 'Liệu trình kết hợp massage và mặt nạ tạo cảm giác thư thái.',
    image: '/services.jpg',
    price: 'Từ 300.000đ'
  }
]

export default function ServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Danh sách dịch vụ</Typography>
      <Stack spacing={3}>
        {services.map(s => (
          <ServiceCard key={s.id} title={s.title} description={s.description} image={s.image} price={s.price} />
        ))}
      </Stack>
    </Container>
  )
}
