import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://idealphotovercel.com';

    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/faq',
        '/pricing',
        '/privacy-policy',
        '/terms-of-service',
        '/cookie-policy',
        '/sitemap-page',
        '/blog',
        '/kpop-photobooth',
        '/vintage-photobooth',
        '/digibooth',
        '/wedding-photobooth',
        '/pica-pica-booth',
        '/easy4cut-photo-booth',
        '/memorify-photo-booth',
        '/selfie-booth',
        '/party-booth',
        '/chinchinbooth',
        '/beautyplus-booth',
        '/jepreto-booth',
    ];

    const staticEntries = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date('2026-02-21'),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : route.includes('photobooth') || route.includes('booth') || route.includes('digibooth') ? 0.9 : 0.7,
    }));

    const blogEntries = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date('2026-02-21'),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticEntries, ...blogEntries];
}
