'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import SafeImage from '@/components/SafeImage';
import Typography from '@mui/material/Typography';

type Item = { src: string; title: string; };

export default function BeforeAfterGallery({ items }: { items: Item[] }) {
  if (!items || items.length === 0) {
    return <Typography>Không có ảnh để hiển thị.</Typography>;
  }

  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {items.map((it) => (
        <div key={it.src} style={{ width: 320, borderRadius: 8, overflow: 'hidden' }}>
          <SafeImage src={it.src} alt={it.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
          <div style={{ padding: 12 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{it.title}</Typography>
          </div>
        </div>
      ))}
    </Stack>
  );
}
