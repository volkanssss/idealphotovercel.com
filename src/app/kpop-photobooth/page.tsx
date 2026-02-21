import type { Metadata } from 'next';
import KpopPhotoboothPage from '@/pages/KpopPhotobooth';

export const metadata: Metadata = {
    title: 'K-pop Photo Booth - Create Stunning K-pop Photocards',
    description: 'Create amazing K-pop photocards with İdeal Photo. Choose from your favorite idols, customize frames, and download high-quality photo strips for free.',
    keywords: 'kpop photo booth, kpop photobooth online, kpop photocards, idol photo booth, k-pop photo maker',
    alternates: { canonical: 'https://idealphotovercel.com/kpop-photobooth' },
};

export default function KpopPhotobooth() {
    return <KpopPhotoboothPage />;
}
