'use client';

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ background: 'linear-gradient(90deg,var(--gradient-header-start),var(--gradient-header-end))' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <SafeImage src="/logo.png" alt="logo" style={{ width: 48, height: 48, objectFit: 'contain' }} />
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff', fontWeight: 700 }}>
              Thẩm Mỹ Thanh Hải
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button href="/" color="inherit">Trang chủ</Button>
            <Button href="/services" color="inherit">Dịch vụ</Button>
            <Button href="/before-after" color="inherit">Before/After</Button>
            <Button href="/about" color="inherit">Về chúng tôi</Button>
            <Button href="/contact" color="inherit">Liên hệ</Button>
            <Button href="/booking" variant="contained" sx={{ ml: 1 }}>Đặt lịch</Button>
          </Box>

          <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 260 }}>
          <ListItem><Link href="/" onClick={() => setOpen(false)}>Trang chủ</Link></ListItem>
          <ListItem><Link href="/services" onClick={() => setOpen(false)}>Dịch vụ</Link></ListItem>
          <ListItem><Link href="/before-after" onClick={() => setOpen(false)}>Before/After</Link></ListItem>
          <ListItem><Link href="/about" onClick={() => setOpen(false)}>Về chúng tôi</Link></ListItem>
          <ListItem><Link href="/contact" onClick={() => setOpen(false)}>Liên hệ</Link></ListItem>
          <ListItem><Link href="/booking" onClick={() => setOpen(false)}>Đặt lịch</Link></ListItem>
        </List>
      </Drawer>
    </>
  );
}
