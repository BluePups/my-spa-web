'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import SafeImage from '@/components/SafeImage';

type Props = {
  images: string[];
};

export default function BeforeAfterGallery({ images }: Props) {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {images.map((src) => {
          // format title từ tên file
          const parts = src.split('/').pop() || src;
          const title = parts.replace(/[-_]/g, ' ').replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
          return (
            <Grid item xs={12} sm={6} md={4} key={src}>
              <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
                <SafeImage src={src} alt={title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                <Box sx={{ p: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{title}</Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
