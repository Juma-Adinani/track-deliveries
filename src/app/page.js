// import * as React from 'react';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import NextLink from 'next/link';
// import ProTip from '@/components/ProTip';
// import Copyright from '@/components/Copyright';

"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    router.push('/trip')
  }, [router])
  return <></>
  // return (
  //   <Container maxWidth="lg">
  //     <Box
  //       sx={{
  //         my: 4,
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
  //         Material UI - Next.js App Router example in JavaScript
  //       </Typography>
  //       <Link href="/about" color="secondary" component={NextLink}>
  //         Go to the about page
  //       </Link>
  //       <ProTip />
  //       <Copyright />
  //     </Box>
  //   </Container>
  // );
}