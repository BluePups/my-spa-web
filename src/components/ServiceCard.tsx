import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SafeImage from '@/components/SafeImage';

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <Box sx={{
      width: 300,
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
      transform: 'translateZ(0)',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      ':hover': {
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.12)'
      }
    }}>
      <div style={{ position: 'relative', overflow: 'hidden', height: 180 }}>
        <SafeImage src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.35))' }} />
      </div>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>{description}</Typography>
        <Button href="/booking" variant="contained" size="small">Đặt lịch</Button>
      </Box>
    </Box>
  );
}
