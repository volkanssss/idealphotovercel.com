import type { Metadata } from 'next';
import FAQPage from '@/pages/FAQ';

export const metadata: Metadata = {
    title: 'FAQ - Frequently Asked Questions',
    description: 'Find answers to frequently asked questions about İdeal Photo virtual photo booth platform.',
    alternates: { canonical: 'https://idealphotovercel.com/faq' },
};

export default function FAQ() {
    return <FAQPage />;
}
