// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CherryApp',
  tagline: 'Create better Apps',
  url: 'https://cherry-app-site.web.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  titleDelimiter: '-',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CherryAppLtd', // Usually your GitHub org/user name.
  projectName: 'appwebsite', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    // locales: ['en'],
    locales: ['en', 'zh-Hans', 'fa'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // 如果你不需要覆盖默认值，你可以忽略这个语言（比如 zh-Hans）
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/'
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // googleAnalytics: {
        //   trackingID: 'UA-4290683538-1',
        //   anonymizeIP: true,
        // },
        gtag: {
          trackingID: 'G-SEW2PNB155',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: 'HOME',
        // logo: {
        //   alt: 'CherryApp Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: 'APPS',
          // },
          { to: '#apps', label: 'APPS', position: 'right' },
          { to: '#apps', label: 'ABOUT US', position: 'right' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // title: 'App Store',
            items: [
              {
                label: 'Terms of Service',
                href: '/terms',
              },
              {
                label: 'Privacy Policy',
                href: '/privacy',
              },
            ],
          },
          {
            // title: 'App Store',
            items: [
              {
                label: 'Google Play',
                href: 'https://play.google.com/store/apps/dev?id=6719318621819155546',
              },
              {
                label: 'Apple Store',
                href: '#',
              },
            ],
          },
          {
            // title: 'Community',
            items: [
              // {
              //   label: 'Facebook',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Insgraph',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CherryAppLtd',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CherryApp, Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: 'keywords',
          content: 'Dynamic Island, QRScanner - Barcode Scanner, YuMusic',
        },
      ],
    }),
};

module.exports = config;