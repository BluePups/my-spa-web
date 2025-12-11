import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import fs from 'fs';
import path from 'path';

export default function BeforeAfterPage() {
  // Server side read from public/sample-before-after
  const dir = path.join(process.cwd(), 'public', 'sample-before-after');
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  } catch (err) {
    files = [];
  }

  const images = files.map((f) => `/sample-before-after/${f}`);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Before & After</Typography>
      <BeforeAfterGallery images={images} />
    </Container>
  );
}
