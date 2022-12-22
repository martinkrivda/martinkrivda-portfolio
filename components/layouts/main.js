import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../navbar';
import Footer from '../footer';
import { Box, Container } from '@chakra-ui/react';
import VoxelComputerLoader from '../voxel-computer-loader';

const LazyVoxelComputer = dynamic(() => import('../voxel-computer'), {
  ssr: false,
  loading: () => <VoxelComputerLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <title>Martin Křivda - Homepage</title>
      </Head>
      <Box as="header">
        <Navbar path={router.asPath} />
      </Box>
      <Box as="main">
        <Container maxW="container.md" pt={14} mb={14}>
          <LazyVoxelComputer />
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Main;
