import React from "react";
import Head from "next/head";
import Link from "next/link";

import GlobalStyles from "../styles/global-styles";
import { ThemeProvider } from "../styles/themed-components";
import theme from "../styles/themes";

import { Wrap, Sidebar, Menu, Main, StyledP } from "../styles/layouts.styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrap>
          <Head>
            <title>Nextjs Practice</title>
          </Head>
          <Sidebar>
            <Menu>
              <Link href="/advertiser/list">광고주</Link>
            </Menu>
            <Menu>
              <Link href="/project/list">프로젝트</Link>
            </Menu>
          </Sidebar>
          <Main>
            <Component {...pageProps} />
          </Main>
        </Wrap>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
