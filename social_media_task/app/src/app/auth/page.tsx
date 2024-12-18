import { Metadata } from 'next';
import ClientAuthPage from './ClientAuthPage';

export const metadata: Metadata = {
    title: 'NextConnect Auth',
    description: 'Sample social media web app built with Next.js',
};

export default function AuthPage() {
    return (
        <>
            <ClientAuthPage />
        </>
    );
}
