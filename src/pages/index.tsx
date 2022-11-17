import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Secetion() {
  return (
    <section
      id="apps"
      // className={styles.features}
      className={clsx('hero hero--primary', styles.heroBanner)}
    >
      <div className="container">
        <a href="https://play.google.com/store/apps/details?id=dynamic.island.dynamicspot.dynamicisland.app">
          <img src="logo/dynamicisland.png" />
          <p>Dynamic Island</p>
        </a>
      </div>
      <div className="container">
        <a href="https://play.google.com/store/apps/details?id=com.cherry.qrscanner666">
          <img src="logo/qrscanner.png" />
          <p>QRScanner</p>
        </a>
      </div>
      <div className="container">
        <a href="https://play.google.com/store/apps/details?id=youtube.player.music.musica.tvmusic.free.download.yumusic">
          <img src="logo/yumusic.png" />
          <p>YuMusic</p>
        </a>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      // title="Cherry App"
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <Secetion />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}