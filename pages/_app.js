import React from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import Head from "next/head";
import Link from "next/link";
import configureStore from "../modules/store";
import GlobalStyles from "../styles/global-styles";
import { ThemeProvider } from "../styles/themed-components";
import theme from "../styles/themes";
import { Wrap, Sidebar, Menu, Main } from "../styles/layouts.styles";

function MyApp({ Component, store, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrap>
          <Head>
            <title>Nextjs Practice</title>
          </Head>
          <Sidebar>
            <Menu>
              <Link href="/">Home</Link>
            </Menu>
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
    </Provider>
  );
}

export default withRedux(configureStore)(MyApp);
