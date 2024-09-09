"use client";
import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './globals.css'; // Ensure this file includes responsive styles
import { Footer, Navbar } from '@/components';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
