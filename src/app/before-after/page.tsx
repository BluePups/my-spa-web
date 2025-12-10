import React from 'react';
import { Container, Typography } from '@mui/material';
import path from 'path';
import fs from 'fs';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';

export default function BeforeAfterPage() {
  const dir = path.join(process.cwd(), 'public', 'sample-before-after');
  let images: string[] = [];

  try {
    const files = fs.readdirSync(dir);
    images = files
      .filter((f) => /\.(jpe?g|png|webp|gif)$/i.test(f))
      .map((f) => `/sample-before-after/${f}`);
  } catch (err) {
    images = [];
  }

  return (
    <Container className="container" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>Ảnh trước - sau</Typography>
      {images.length === 0 ? (
        <Typography variant="body1">Hiện chưa có ảnh mẫu. Vui lòng thêm ảnh vào thư mục <code>public/sample-before-after/</code>.</Typography>
      ) : (
        <BeforeAfterGallery images={images} />
      )}
    </Container>
  );
}
