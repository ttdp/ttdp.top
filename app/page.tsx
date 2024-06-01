'use client'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Blog />
    </ThemeProvider>
  )
}