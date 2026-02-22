import type { Metadata } from 'next';
import Easy4CutPhotoboothPage from '@/pages/Easy4CutPhotobooth';

export const metadata: Metadata = {
    title: 'Easy4Cut Photo Booth Online Free | Best 4-Cut Strip Maker',
    description: 'Create stunning 4-cut photo strips online for free with Easy4Cut Photo Booth by İdeal Photo. The best easy4cut alternative with premium filters and no watermarks.',
    keywords: 'easy4cut, easy 4 cut photo booth, 4 cut photo strip, easy4cut online free, easy4cut alternative, korean photo booth online',
    alternates: { canonical: 'https://idealphotovercel.com/easy4cut-photo-booth' },
};

export default function Easy4CutPhotobooth() {
    return <Easy4CutPhotoboothPage />;
}
