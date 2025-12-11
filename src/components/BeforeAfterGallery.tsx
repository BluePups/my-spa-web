'use client'

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SafeImage from './SafeImage';
import Typography from '@mui/material/Typography';

interface Props {
  images: string[];
}

export default function BeforeAfterGallery({ images }: Props) {
  if (!images || images.length === 0) {
    return <Typography variant="body1">Chưa có ảnh mẫu. Vui lòng kiểm tra lại thư mục <code>public/sample-before-after/</code>.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {images.map((src) => {
        const name = src.split('/').pop() || 'Ảnh';
        const title = name.replace(/\.(jpg|jpeg|png|webp)$/i, '').replace(/[-_]/g, ' ');
        return (
          <Grid item xs={12} sm={6} md={4} key={src}>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 2 }}>
              <SafeImage src={src} alt={title} style={{ width: '100%', height: 260, objectFit: 'cover' }} />
              <Box sx={{ p: 1 }}>
                <Typography variant="subtitle1">{title}</Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
