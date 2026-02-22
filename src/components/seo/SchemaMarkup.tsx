'use client';

import React from 'react';

export const SchemaMarkup = () => {
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'İdeal Photo Vercel App',
        'operatingSystem': 'Web',
        'applicationCategory': 'MultimediaApplication',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'ratingCount': '1240'
        },
        'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
        }
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://idealphotovercel.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Memorify Photo Booth',
                'item': 'https://idealphotovercel.com/memorify-photo-booth'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': 'Easy4Cut Photo Booth',
                'item': 'https://idealphotovercel.com/easy4cut-photo-booth'
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};
