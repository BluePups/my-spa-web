'use client'

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SafeImage from './SafeImage';
import Stack from '@mui/material/Stack';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar position="static" sx={{
        background: 'linear-gradient(90deg,#6c5ce7,#00b894)',
        boxShadow: 'none'
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            <SafeImage src="/logo.png" alt="logo" style={{ width: 56, height: 56, borderRadius: 8 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, ml: 1, fontWeight: 700 }}>
              Thẩm mỹ viện Ngọc Ánh
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Stack direction="row" spacing={2}>
                <Link href="/"><Button variant="text">Trang chủ</Button></Link>
                <Link href="/services"><Button variant="text">Dịch vụ</Button></Link>
                <Link href="/before-after"><Button variant="text">Before/After</Button></Link>
                <Link href="/about"><Button variant="text">Giới thiệu</Button></Link>
                <Link href="/contact"><Button variant="text">Liên hệ</Button></Link>
                <Link href="/booking"><Button variant="contained">Đặt lịch</Button></Link>
              </Stack>
            </Box>

            <IconButton edge="end" color="inherit" aria-label="menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
          <List>
            <ListItem>
              <ListItemText primary="Thẩm mỹ viện Ngọc Ánh" />
            </ListItem>
            <ListItem button component="a" href="/">
              <ListItemText primary="Trang chủ" />
            </ListItem>
            <ListItem button component="a" href="/services">
              <ListItemText primary="Dịch vụ" />
            </ListItem>
            <ListItem button component="a" href="/before-after">
              <ListItemText primary="Before/After" />
            </ListItem>
            <ListItem button component="a" href="/about">
              <ListItemText primary="Giới thiệu" />
            </ListItem>
            <ListItem button component="a" href="/contact">
              <ListItemText primary="Liên hệ" />
            </ListItem>
            <ListItem button component="a" href="/booking">
              <ListItemText primary="Đặt lịch" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
