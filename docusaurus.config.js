/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WSO2 Identity Server',
  tagline: 'WSO2 Identity Server',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://wso2identityserver.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wso2', // Usually your GitHub org/user name.
  projectName: 'docs-is', // Usually your repo name.

  // temporarily ignore broken links
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wso2/docs-is'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'https://redocly.github.io/redoc/openapi.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Identity Server Docs',
        logo: {
          alt: 'WSO2 Identity Server Logo',
          src: 'img/identity-server-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'setupSidebar',
            position: 'left',
            label: 'Setup',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guideSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'APIs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'left',
            label: 'SDKs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: 'References',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Learn',
          //   items: [
          //     {
          //       label: 'Style Guide',
          //       to: 'docs/',
          //     },
          //     {
          //       label: 'Second Doc',
          //       to: 'docs/doc2',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: 'blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'Legal',
          //   // Please do not remove the privacy and terms, it's a legal requirement.
          //   items: [
          //     {
          //       label: 'Privacy',
          //       href: 'https://opensource.fb.com/legal/privacy/',
          //     },
          //     {
          //       label: 'Terms',
          //       href: 'https://opensource.fb.com/legal/terms/',
          //     },
          //     {
          //       label: 'Data Policy',
          //       href: 'https://opensource.fb.com/legal/data-policy/',
          //     },
          //     {
          //       label: 'Cookie Policy',
          //       href: 'https://opensource.fb.com/legal/cookie-policy/',
          //     },
          //   ],
          // },
        ],
        // logo: {
        //   alt: 'WSO2 Identity Server Logo',
        //   // This default includes a positive & negative version, allowing for
        //   // appropriate use depending on your site's style.
        //   src: '/img/meta_opensource_logo_negative.svg',
        //   href: 'https://opensource.fb.com',
        // },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} WSO2 Identity Server. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
