import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/pages/PrivacyPolicy';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'İdeal Photo Privacy Policy. Learn how we protect your data and privacy.',
    alternates: { canonical: 'https://idealphotovercel.com/privacy-policy' },
};

export default function PrivacyPolicy() {
    return <PrivacyPolicyPage />;
}
