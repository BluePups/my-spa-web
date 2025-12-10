import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SafeImage from './SafeImage'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

type Props = {
  title: string
  description: string
  image: string
  price?: string
}

export default function ServiceCard({ title, description, image, price }: Props) {
  return (
    <Card sx={{
      display: 'flex',
      gap: 2,
      alignItems: 'stretch',
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      '&:hover': {
        transform: 'translateY(-6px) rotateX(2deg)',
        boxShadow: 6
      },
      p: 1,
      borderRadius: 2
    }}>
      <Box sx={{ width: 160, minWidth: 120, borderRadius: 1, overflow: 'hidden' }}>
        <SafeImage src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="start">
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{description}</Typography>
          </Box>
          {price && <Chip label={price} color="secondary" />}
        </Stack>
      </CardContent>
    </Card>
  )
}
