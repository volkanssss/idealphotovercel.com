'use client';

import React from 'react';
import Link from 'next/link';

const booths = [
    { name: 'Memorify Photo Booth', path: '/memorify-photo-booth', description: 'Romantic & Elegant' },
    { name: 'Easy4Cut Photo Booth', path: '/easy4cut-photo-booth', description: 'Classic 4-Cut Style' },
    { name: 'K-pop Photo Booth', path: '/kpop-photobooth', description: 'Idol Style Filters' },
    { name: 'Vintage Photo Booth', path: '/vintage-photobooth', description: 'Retro Film Look' },
    { name: 'Wedding Photo Booth', path: '/wedding-photobooth', description: 'Special Memories' },
    { name: 'Party Booth', path: '/party-booth', description: 'Fun with Friends' }
];

export const RelatedBooths = () => {
    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Explore More Photo Booths
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {booths.map((booth, index) => (
                        <Link
                            key={index}
                            href={booth.path}
                            className="group block p-4 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all bg-gray-50 dark:bg-gray-900"
                        >
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors text-sm">
                                {booth.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {booth.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
