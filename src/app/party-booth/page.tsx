import type { Metadata } from 'next';
import PartyBoothPage from '@/pages/PartyBooth';

export const metadata: Metadata = {
    title: 'Party Booth - Fun Party Photo Strips',
    description: 'Create exciting party photo strips with İdeal Photo Party Booth. Perfect for parties, events, and celebrations.',
    keywords: 'party booth, party photo booth, party photo strip, event photo booth',
    alternates: { canonical: 'https://idealphotovercel.com/party-booth' },
};

export default function PartyBooth() {
    return <PartyBoothPage />;
}
