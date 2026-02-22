import type { Metadata } from 'next';
import IndexPage from '@/pages/Index';

export const metadata: Metadata = {
    title: 'İdeal Photo | Free Online 4-Cut Photo Booth (Easy4Cut & Memorify Alternative)',
    description: 'İdeal Photo Vercell App is the best free online photo booth for K-pop style 4-cut photo strips. A powerful, free alternative to Easy4cut, Memorify Photo Booth, and Chinchinbooth.',
    keywords: 'İdeal Photo, ideal photo vercel app, idealphoto, easy4cut alternative, memorify photobooth alternative, chinchin booth alternative, kpop photo booth, kpop photobooth online, free photo booth, virtual photo booth, 4-cut photo strip maker, online photo booth free',
    alternates: {
        canonical: 'https://idealphotovercel.com',
    },
    openGraph: {
        title: 'İdeal Photo | Free Online 4-Cut Photo Booth (Easy4Cut & Memorify Alternative)',
        description: 'Create stunning K-pop style 4-cut photo strips online for free. The ultimate Easy4cut and Memorify replacement with premium filters.',
        type: 'website',
        url: 'https://idealphotovercel.com',
    },
};

export default function Home() {
    return <IndexPage />;
}
