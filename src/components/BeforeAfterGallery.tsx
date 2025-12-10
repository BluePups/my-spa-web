'use client'

import React from 'react'
import Stack from '@mui/material/Stack'
import SafeImage from './SafeImage'
import Typography from '@mui/material/Typography'

type Props = {
  images: string[]
}

export default function BeforeAfterGallery({ images }: Props) {
  if (!images || images.length === 0) {
    return <Typography variant="body1">Chưa có ảnh để hiển thị.</Typography>
  }

  return (
    <Stack spacing={2}>
      {images.map((img, idx) => (
        <SafeImage key={idx} src={img} alt={`BeforeAfter ${idx + 1}`} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 8 }} />
      ))}
    </Stack>
  )
}
