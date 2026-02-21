import type { Metadata } from 'next';
import BlogPage from '@/pages/Blog';

export const metadata: Metadata = {
    title: 'Blog | İdeal Photo Tips, Trends & Updates',
    description: 'Explore our blog for ideal photo booth tips, trends, tutorials, and the latest updates about our app features and ideal photo idol additions.',
    keywords: 'ideal photo booth blog, photo tips, ideal photo trends, tutorials, app updates',
    alternates: { canonical: 'https://idealphotovercel.com/blog' },
    openGraph: { type: 'website' },
};

export default function Blog() {
    return <BlogPage />;
}
