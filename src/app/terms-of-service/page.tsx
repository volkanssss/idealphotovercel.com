import type { Metadata } from 'next';
import TermsOfServicePage from '@/pages/TermsOfService';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'İdeal Photo Terms of Service. Read our terms and conditions for using our platform.',
    alternates: { canonical: 'https://idealphotovercel.com/terms-of-service' },
};

export default function TermsOfService() {
    return <TermsOfServicePage />;
}
