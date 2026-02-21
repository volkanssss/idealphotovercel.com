import type { Metadata } from 'next';
import JepretoBoothPage from '@/pages/JepretoBooth';

export const metadata: Metadata = {
    title: 'Jepreto Booth - Creative Photo Booth',
    description: 'Create creative photos with Jepreto Booth by İdeal Photo. Unique styles, creative effects, and high-quality results.',
    keywords: 'jepreto booth, jepreto photo booth, creative photo booth, jepreto alternative',
    alternates: { canonical: 'https://idealphotovercel.com/jepreto-booth' },
};

export default function JepretoBooth() {
    return <JepretoBoothPage />;
}
