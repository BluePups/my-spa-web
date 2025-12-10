import React from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import SafeImage from '../components/SafeImage'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    id: 'dv1',
    title: 'Chăm sóc da mặt chuyên sâu',
    description: 'Làm sạch, điều trị, và tái tạo da với công nghệ hiện đại.',
    image: '/services.jpg',
    price: 'Từ 500.000đ'
  },
  {
    id: 'dv2',
    title: 'Trẻ hóa vùng mắt',
    description: 'Giảm nếp nhăn và quầng thâm bằng liệu trình chuyên biệt.',
    image: '/services.jpg',
    price: 'Từ 400.000đ'
  },
  {
    id: 'dv3',
    title: 'Điều trị mụn chuyên sâu',
    description: 'Kết hợp liệu pháp ánh sáng và peel nhẹ nhàng.',
    image: '/services.jpg',
    price: 'Từ 350.000đ'
  }
]

export default function HomePage() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Box className="hero" sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <SafeImage src="/hero-banner.jpg" alt="Banner thẩm mỹ viện" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Box className="overlay" />
        <Box sx={{ position: 'absolute', zIndex: 2, color: '#fff', textAlign: 'center', px: 2 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
            ILMio - Chăm sóc sắc đẹp chuyên sâu
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            Liệu trình an toàn, chuyên gia có chứng chỉ, kết quả rõ rệt.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Link href="/booking" >
              <Button variant="contained" color="primary">Đặt lịch ngay</Button>
            </Link>
            <Link href="/services" >
              <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>Xem dịch vụ</Button>
            </Link>
          </Stack>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Dịch vụ nổi bật</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
          {services.map(s => (
            <ServiceCard key={s.id} title={s.title} description={s.description} image={s.image} price={s.price} />
          ))}
        </Stack>
      </Box>
    </Container>
  )
}
