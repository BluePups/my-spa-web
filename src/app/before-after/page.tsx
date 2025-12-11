import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import SafeImage from '@/components/SafeImage';
import fs from 'fs';
import path from 'path';

export default function BeforeAfterPage() {
  // Server-side: quét folder public/sample-before-after
  const dir = path.join(process.cwd(), 'public', 'sample-before-after');
  let items: { src: string; title: string }[] = [];

  try {
    const files = fs.readdirSync(dir);
    items = files.filter((f) => {
      const ext = f.toLowerCase().split('.').pop();
      return ['jpg', 'jpeg', 'png', 'webp'].includes(ext ?? '');
    }).map((f) => {
      const title = f.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      return { src: `/sample-before-after/${f}`, title };
    });
  } catch (e) {
    // nếu không có thư mục hoặc lỗi, items sẽ rỗng
    items = [];
  }

  return (
    <Container className="container section">
      <Typography variant="h2" sx={{ mb: 3 }}>Before & After</Typography>

      {items.length === 0 ? (
        <Typography>Chưa có ảnh nào trong thư mục sample-before-after. Hãy tải ảnh vào public/sample-before-after/ để hiển thị.</Typography>
      ) : (
        <Stack direction="row" flexWrap="wrap" gap={2}>
          {items.map((it) => (
            <div key={it.src} style={{ width: 320, borderRadius: 8, overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
              <SafeImage src={it.src} alt={it.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
              <div style={{ padding: 12 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{it.title}</Typography>
              </div>
            </div>
          ))}
        </Stack>
      )}
    </Container>
  );
}
