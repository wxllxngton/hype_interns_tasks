import { Metadata } from 'next';
import ClientHomePage from './ClientHomePage';

export const metadata: Metadata = {
    title: 'NextConnect Home',
    description: 'Sample social media web app built with Next.js',
};

export default function HomePage() {
    return (
        <>
            <ClientHomePage />
        </>
    );
}
