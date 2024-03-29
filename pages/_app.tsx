import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import Layout from '../src/layout/index';
import theme from '../src/theme';
import '../src/theme/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo title="Mauro Sosa" description="Full Stack Developer" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
