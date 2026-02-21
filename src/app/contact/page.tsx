import type { Metadata } from 'next';
import ContactPage from '@/pages/Contact';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with İdeal Photo. We would love to hear from you about our virtual photo booth platform.',
    alternates: { canonical: 'https://idealphotovercel.com/contact' },
};

export default function Contact() {
    return <ContactPage />;
}
