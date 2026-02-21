import type { Metadata } from 'next';
import '@/index.css';
import Providers from './providers';

export const metadata: Metadata = {
    metadataBase: new URL('https://idealphotovercel.com'),
    title: {
        default: 'İdeal Photo - AI-Powered Virtual Photo Booth',
        template: '%s | İdeal Photo',
    },
    description: 'Create stunning virtual photo booth pictures with İdeal Photo. Professional quality results, K-pop themes, vintage styles, and more. Free to start!',
    keywords: 'virtual photo booth, online photo booth, kpop photo booth, photo booth maker, digital photo booth',
    authors: [{ name: 'İdeal Photo' }],
    robots: 'index, follow',
    verification: {
        google: 'lWI-svoNOSDJuqGM1uzShfPyqhAyArWAa-F5S3I-Igw',
    },
    openGraph: {
        siteName: 'İdeal Photo',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@idealphoto',
        creator: '@idealphoto',
    },
    other: {
        'theme-color': '#8B5CF6',
        'application-name': 'İdeal Photo',
        'msapplication-TileColor': '#8B5CF6',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
