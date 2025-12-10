'use client';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';

type Props = {
  children: React.ReactNode;
};

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

export default function Providers({ children }: Props) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
