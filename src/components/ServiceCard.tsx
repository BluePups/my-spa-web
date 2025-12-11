import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import SafeImage from './SafeImage';
import Stack from '@mui/material/Stack';

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: Props) {
  return (
    <Card sx={{
      borderRadius: 2,
      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
      '&:hover': {
        transform: 'translateY(-8px) rotateX(2deg)',
        boxShadow: 6
      }
    }}>
      <CardActionArea>
        <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
          <SafeImage src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <Box sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.28))'
          }} />
        </Box>
        <CardContent>
          <Stack spacing={1}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
