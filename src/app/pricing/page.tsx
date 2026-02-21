import type { Metadata } from 'next';
import PricingPage from '@/pages/Pricing';

export const metadata: Metadata = {
    title: 'Pricing Plans',
    description: 'Choose the perfect İdeal Photo plan for your needs. From free to premium, we have options for everyone.',
    alternates: { canonical: 'https://idealphotovercel.com/pricing' },
};

export default function Pricing() {
    return <PricingPage />;
}
