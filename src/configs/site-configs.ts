import { Metadata, Viewport } from 'next';

export const siteConfig = {
  name: 'Dev Utils',
  description:
    'A comprehensive collection of essential utility tools for developers by Prisma Devlab',
  url: 'https://dev-utils.prisma.io',
  ogImage: 'https://dev-utils.prisma.io/og-image.jpg',
  links: {
    github: 'https://github.com/prisma-devlab/dev-utils',
    documentation: 'https://github.com/prisma-devlab/dev-utils/blob/master/README.md',
    contribute: 'https://github.com/prisma-devlab/dev-utils/blob/master/.github/CONTRIBUTING.md',
    license: 'https://github.com/prisma-devlab/dev-utils/blob/master/LICENSE',
    issues: 'https://github.com/prisma-devlab/dev-utils/issues',
  },
  creator: 'Prisma dev labs',
  license: 'MIT',
  keywords: [
    'developer tools',
    'utility tools',
    'web development',
    'prisma',
    'developer utilities',
    'coding tools',
    'programming utilities',
  ],
};

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: 'Prisma dev labs',
      url: 'https://github.com/prisma-devlab/',
    },
  ],
  creator: siteConfig.creator,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@prisma-devLab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL(siteConfig.url),
};

export const siteViewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};
