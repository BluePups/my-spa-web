'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SafeImage from '@/components/SafeImage';
import { Button } from '@mui/material';

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <Card className="service-card" sx={{ borderRadius: 2 }}>
      <CardActionArea>
        <Box sx={{ position: 'relative', height: 180 }}>
          <SafeImage src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.35))'
          }} />
        </Box>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{title}</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>{description}</Typography>
          <Button variant="contained" size="small" href="/booking">Đặt lịch</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
