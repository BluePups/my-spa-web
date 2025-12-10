'use client'

import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import Button from '@mui/material/Button'
import SafeImage from './SafeImage'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

export default function Header() {
  return (
    <AppBar position="static" className="header-root" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <SafeImage src="/logo.png" alt="ILMio" style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 8 }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                ILMio
              </Typography>
              <Typography variant="caption" display="block">Thẩm mỹ viện chuyên sâu</Typography>
            </Box>
          </Stack>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Link href="/" >
              <Button sx={{ color: '#fff' }}>Trang chủ</Button>
            </Link>
            <Link href="/services" >
              <Button sx={{ color: '#fff' }}>Dịch vụ</Button>
            </Link>
            <Link href="/before-after" >
              <Button sx={{ color: '#fff' }}>Trước - Sau</Button>
            </Link>
            <Link href="/about" >
              <Button sx={{ color: '#fff' }}>Về chúng tôi</Button>
            </Link>
            <Link href="/contact" >
              <Button sx={{ color: '#fff' }}>Liên hệ</Button>
            </Link>
            <Link href="/booking" >
              <Button variant="contained" color="primary">Đặt lịch</Button>
            </Link>
          </Box>

          <IconButton edge="end" color="inherit" sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
