import type { Metadata } from 'next';
import PicaPicaPhotoboothPage from '@/pages/PicaPicaPhotobooth';

export const metadata: Metadata = {
    title: 'Pica Pica Booth - Fun Photo Booth Experience',
    description: 'Create fun and colorful photos with İdeal Photo Pica Pica Booth. Unique frames, fun stickers, and instant sharing.',
    keywords: 'pica pica booth, pica pica photobooth, fun photo booth, colorful photo booth',
    alternates: { canonical: 'https://idealphotovercel.com/pica-pica-booth' },
};

export default function PicaPicaBooth() {
    return <PicaPicaPhotoboothPage />;
}
