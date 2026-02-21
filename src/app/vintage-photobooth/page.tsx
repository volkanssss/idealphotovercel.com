import type { Metadata } from 'next';
import LittleVintagePhotoboothPage from '@/pages/LittleVintagePhotobooth';

export const metadata: Metadata = {
    title: 'Vintage Photo Booth - Retro Style Photo Strips',
    description: 'Create beautiful vintage-style photo strips with İdeal Photo. Retro filters, classic frames, and timeless photo booth effects.',
    keywords: 'vintage photo booth, retro photo booth, vintage photo strip, classic photo booth',
    alternates: { canonical: 'https://idealphotovercel.com/vintage-photobooth' },
};

export default function VintagePhotobooth() {
    return <LittleVintagePhotoboothPage />;
}
