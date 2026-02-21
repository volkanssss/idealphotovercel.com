import type { Metadata } from 'next';
import CookiePolicyPage from '@/pages/CookiePolicy';

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'İdeal Photo Cookie Policy. Learn about how we use cookies on our platform.',
    alternates: { canonical: 'https://idealphotovercel.com/cookie-policy' },
};

export default function CookiePolicy() {
    return <CookiePolicyPage />;
}
