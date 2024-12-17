import { Metadata } from 'next';
import LandingPage from './LandingPage';

export const metadata: Metadata = {
    title: 'NextConnect',
    description: 'Sample social media web app built with Next.js',
};

export default function App() {
    return (
        <>
            <LandingPage />
        </>
    );
}
