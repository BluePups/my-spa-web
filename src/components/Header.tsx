'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const nav = [
    { href: '/', label: 'Trang chủ' },
    { href: '/services', label: 'Dịch vụ' },
    { href: '/before-after', label: 'Trước/Sau' },
    { href: '/booking', label: 'Đặt lịch' },
    { href: '/about', label: 'Về chúng tôi' },
    { href: '/contact', label: 'Liên hệ' }
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #6c5ce7, #00b894)' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
            <Box sx={{ width: 48, height: 48 }}>
              <SafeImage src="/logo.png" alt="Logo" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              Thẩm Mỹ Viện Minh
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button sx={{ color: '#fff' }}>{item.label}</Button>
              </Link>
            ))}
          </Box>

          <IconButton
            color="inherit"
            edge="end"
            onClick={() => {
              setOpen(true);
            }}
            sx={{ display: { md: 'none' } }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)} onKeyDown={() => setOpen(false)}>
          <List>
            {nav.map((item) => (
              <ListItem key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
