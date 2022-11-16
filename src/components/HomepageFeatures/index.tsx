import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dynamic Island',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    img: '/banner/dynamicisland.png',
    description: (
      <>
        Dynamic Island feature for Android, it's make the interaction for your
        device.
      </>
    ),
  },
  {
    title: 'QRScanner - Barcode Scanner',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    img: '/banner/qrscanner.png',
    description: (
      <>
        Fast, accurate and easy to use QR code and barcode scanner, generator,
        reader.
      </>
    ),
  },
  {
    title: 'YuMusic',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    img: '/banner/yumusic.png',
    description: (
      <>
        A lightweight but useful music player for you. search songs from
        youtube, play and download
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}