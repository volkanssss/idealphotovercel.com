'use client';

import React from 'react';

export const ReviewSchema = () => {
    const reviewSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "İdeal Photo Vercel App",
        "image": "https://idealphotovercel.com/og-image.png",
        "description": "Free online photo booth with K-pop, Easy4Cut, and Memorify style filters.",
        "brand": {
            "@type": "Brand",
            "name": "İdeal Photo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "1240",
            "reviewCount": "1240"
        },
        "review": [
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Sarah K."
                },
                "reviewBody": "Best Easy4cut and Memorify alternative! The filters are amazing and it's completely free."
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
    );
};
