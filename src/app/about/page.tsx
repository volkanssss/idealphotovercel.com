import type { Metadata } from 'next';
import AboutPage from '@/pages/About';

export const metadata: Metadata = {
    title: 'About İdeal Photo - Leading Virtual Photo Booth Platform',
    description: 'Learn about İdeal Photo\'s mission to provide the best virtual photo booth experience. Discover our story, values, and commitment to creating memorable moments through innovative technology.',
    keywords: 'about ideal photo, virtual photo booth company, photo booth platform, digital photo solutions, innovative photo technology',
    alternates: { canonical: 'https://idealphotovercel.com/about' },
};

export default function About() {
    return <AboutPage />;
}
