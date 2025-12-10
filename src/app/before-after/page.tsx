import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import SafeImage from '../../components/SafeImage'
import fs from 'fs'
import path from 'path'

function fileNameToTitle(name: string) {
  const base = name.replace(/\.[^/.]+$/, '')
  return base.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

export default function BeforeAfterPage() {
  // Server-side read of public/sample-before-after
  const publicDir = path.join(process.cwd(), 'public', 'sample-before-after')
  let files: string[] = []
  try {
    files = fs.readdirSync(publicDir).filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f))
  } catch (e) {
    files = []
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Trước - Sau</Typography>
      {files.length === 0 ? (
        <Typography variant="body1">Chưa có ảnh mẫu. Vui lòng thêm ảnh vào thư mục <code>public/sample-before-after/</code>.</Typography>
      ) : (
        <Stack spacing={3}>
          {files.map(f => (
            <Stack key={f} direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Box sx={{ width: { xs: '100%', sm: '40%' } }}>
                <SafeImage src={`/sample-before-after/${f}`} alt={fileNameToTitle(f)} style={{ width: '100%', height: 240, objectFit: 'cover', borderRadius: 8 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{fileNameToTitle(f)}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Mô tả: Đây là ảnh mẫu trước và sau điều trị. Ảnh được hiển thị tự động từ thư mục `public/sample-before-after/`.
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      )}
    </Container>
  )
}
