/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: '/pica-pica-photobooth',
                destination: '/pica-pica-booth',
                permanent: true,
            },
            {
                source: '/easy-4-cut-photo-booth',
                destination: '/easy4cut-photo-booth',
                permanent: true,
            },
            {
                source: '/easy4cut-photo-booth-online-free',
                destination: '/easy4cut-photo-booth',
                permanent: true,
            },
            {
                source: '/easy4cut',
                destination: '/easy4cut-photo-booth',
                permanent: true,
            },
            {
                source: '/memorify',
                destination: '/memorify-photo-booth',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Robots-Tag', value: 'index, follow' },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
