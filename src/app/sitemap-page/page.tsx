import type { Metadata } from 'next';
import SitemapPage from '@/pages/Sitemap';

export const metadata: Metadata = {
    title: 'Sitemap',
    description: 'Browse all pages on İdeal Photo. Find exactly what you are looking for.',
    alternates: { canonical: 'https://idealphotovercel.com/sitemap-page' },
};

export default function SitemapView() {
    return <SitemapPage />;
}
