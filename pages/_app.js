import React from "react";
import { Container } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Wrap, Sidebar, Menu, Main } from "../styles/layouts.styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Container>
      <Head>
        <title>Static Website</title>
      </Head>
      <Wrap>
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
    </Container>
  );
}

export default MyApp;
