import type { Metadata } from 'next';
import SelfieBoothPage from '@/pages/SelfieBooth';

export const metadata: Metadata = {
    title: 'Selfie Booth - Quick Selfie Photo Strips',
    description: 'Create fun selfie photo strips with İdeal Photo Selfie Booth. Quick capture, easy customization, and instant sharing.',
    keywords: 'selfie booth, selfie photo booth, selfie photo strip, selfie maker',
    alternates: { canonical: 'https://idealphotovercel.com/selfie-booth' },
};

export default function SelfieBooth() {
    return <SelfieBoothPage />;
}
