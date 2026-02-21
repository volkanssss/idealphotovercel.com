import type { Metadata } from 'next';
import WeddingPhotoboothPage from '@/pages/WeddingPhotobooth';

export const metadata: Metadata = {
    title: 'Wedding Photo Booth - Elegant Wedding Photo Strips',
    description: 'Create elegant wedding photo strips with İdeal Photo. Perfect for weddings, engagements, and romantic celebrations.',
    keywords: 'wedding photo booth, wedding photo strip, elegant photo booth, bridal photo booth',
    alternates: { canonical: 'https://idealphotovercel.com/wedding-photobooth' },
};

export default function WeddingPhotobooth() {
    return <WeddingPhotoboothPage />;
}
