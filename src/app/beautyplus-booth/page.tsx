import type { Metadata } from 'next';
import BeautyPlusBoothPage from '@/pages/BeautyPlusBooth';

export const metadata: Metadata = {
    title: 'BeautyPlus Booth - Beautiful Photo Booth',
    description: 'Create beautiful enhanced photos with BeautyPlus Booth by İdeal Photo. Beauty filters, smooth effects, and stunning results.',
    keywords: 'beautyplus booth, beauty photo booth, beauty plus photo booth, beautification photo booth',
    alternates: { canonical: 'https://idealphotovercel.com/beautyplus-booth' },
};

export default function BeautyPlusBooth() {
    return <BeautyPlusBoothPage />;
}
