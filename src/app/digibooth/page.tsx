import type { Metadata } from 'next';
import DigiboothPage from '@/pages/Digibooth';

export const metadata: Metadata = {
    title: 'Digibooth - Digital Photo Booth Experience',
    description: 'Experience the digital photo booth revolution with İdeal Photo Digibooth. Modern effects, digital frames, and instant sharing.',
    keywords: 'digibooth, digital photo booth, modern photo booth, digital photo strip',
    alternates: { canonical: 'https://idealphotovercel.com/digibooth' },
};

export default function Digibooth() {
    return <DigiboothPage />;
}
