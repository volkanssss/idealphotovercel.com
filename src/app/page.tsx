import type { Metadata } from 'next';
import IndexPage from '@/pages/Index';

export const metadata: Metadata = {
    title: 'İdeal Photo Vercel App | Easy4cut & Memorify Photo Booth Online Free',
    description: 'İdeal Photo Vercell App offers modern K-pop style photo booth templates. A powerful alternative to Easy4cut, Memorify Photo Booth and Chinchinbooth.',
    keywords: 'İdeal Photo, ideal photo vercel app, idealphoto, idealphoto kpop, ideal photo booth, virtual photo booth, kpop photo booth, kpop photobooth online, free photo booth, easy4cut alternative, memorify photobooth alternative, pica pica photobooth, wedding photo booth, vintage photo booth, digibooth, photo booth online free, ideal photo vercel',
    alternates: {
        canonical: 'https://idealphotovercel.com',
    },
    openGraph: {
        title: 'İdeal Photo Vercel App | Easy4cut & Memorify Photo Booth Online Free',
        description: 'İdeal Photo Vercell App offers modern K-pop style photo booth templates. A powerful alternative to Easy4cut, Memorify Photo Booth and Chinchinbooth.',
        type: 'website',
        url: 'https://idealphotovercel.com',
    },
};

export default function Home() {
    return <IndexPage />;
}
