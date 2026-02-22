import type { Metadata } from 'next';
import KpopPhotoboothPage from '@/pages/KpopPhotobooth';

export const metadata: Metadata = {
    title: 'K-pop Photo Booth Online | Create Custom Idol Photocards',
    description: 'Create amazing K-pop photocards and 4-cut strips online with İdeal Photo. Choose from favorite idols, customize frames, and download high-quality strips for free.',
    keywords: 'kpop photo booth, kpop photobooth online, kpop photocards, idol photo booth, k-pop photo maker, easy4cut kpop',
    alternates: { canonical: 'https://idealphotovercel.com/kpop-photobooth' },
};

export default function KpopPhotobooth() {
    return <KpopPhotoboothPage />;
}
