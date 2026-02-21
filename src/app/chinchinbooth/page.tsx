import type { Metadata } from 'next';
import ChinchinboothPage from '@/pages/Chinchinbooth';

export const metadata: Metadata = {
    title: 'Chinchinbooth - Chinchin Photo Booth Experience',
    description: 'Create amazing photos with Chinchinbooth by İdeal Photo. The best chinchinbooth alternative with premium features.',
    keywords: 'chinchinbooth, chinchin booth, chinchin photo booth, chinchinbooth alternative',
    alternates: { canonical: 'https://idealphotovercel.com/chinchinbooth' },
};

export default function Chinchinbooth() {
    return <ChinchinboothPage />;
}
