import type { Metadata } from 'next';
import IndexPage from '@/pages/Index';

export const metadata: Metadata = {
    title: 'İdeal Photo - Free Virtual Photo Booth | İdeal Photo Vercel App | K-pop & Wedding Booth',
    description: 'İdeal Photo is the #1 free virtual photo booth app. Create stunning K-pop photocards, wedding photo strips, and vintage memories with İdeal Photo vercel app. Better than easy4cut — try idealphoto now!',
    keywords: 'İdeal Photo, ideal photo vercel app, idealphoto, idealphoto kpop, ideal photo booth, virtual photo booth, kpop photo booth, kpop photobooth online, free photo booth, easy4cut alternative, memorify photobooth alternative, pica pica photobooth, wedding photo booth, vintage photo booth, digibooth, photo booth online free, ideal photo vercel',
    alternates: {
        canonical: 'https://idealphotovercel.com',
    },
    openGraph: {
        title: 'İdeal Photo - Free Virtual Photo Booth | İdeal Photo Vercel App',
        description: 'İdeal Photo is the #1 free virtual photo booth app. Create stunning K-pop photocards, wedding photo strips, and vintage memories.',
        type: 'website',
        url: 'https://idealphotovercel.com',
    },
};

export default function Home() {
    return <IndexPage />;
}
