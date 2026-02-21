import type { Metadata } from 'next';
import MemorifyPhotoboothPage from '@/pages/MemorifyPhotobooth';

export const metadata: Metadata = {
    title: 'Memorify Photo Booth - Create Beautiful Photo Memories',
    description: 'Create beautiful photo memories with Memorify Photo Booth by İdeal Photo. The best memorify alternative with premium features for free.',
    keywords: 'memorify photo booth, memorify photobooth, memorify alternative, photo memories maker',
    alternates: { canonical: 'https://idealphotovercel.com/memorify-photo-booth' },
};

export default function MemorifyPhotobooth() {
    return <MemorifyPhotoboothPage />;
}
