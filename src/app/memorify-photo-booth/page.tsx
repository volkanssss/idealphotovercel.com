import type { Metadata } from 'next';
import MemorifyPhotoboothPage from '@/pages/MemorifyPhotobooth';

export const metadata: Metadata = {
    title: 'Memorify Photo Booth | Free Online Memory Photobooth',
    description: 'Memorify Photo Booth - Create beautiful memory photo strips online for free. Elegant frames, romantic filters, and heartfelt designs perfect for couples, families, and friends.',
    keywords: 'memorify photo booth, memorify photobooth, memorify alternative, photo memories maker',
    alternates: { canonical: 'https://idealphotovercel.com/memorify-photo-booth' },
};

export default function MemorifyPhotobooth() {
    return <MemorifyPhotoboothPage />;
}
