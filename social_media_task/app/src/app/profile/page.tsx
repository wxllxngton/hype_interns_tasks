import { Metadata } from 'next';
import ClientProfilePage from './ClientProfilePage';

export const metadata: Metadata = {
    title: 'NextConnect Profile',
    description: 'Sample social media web app built with Next.js',
};

export default function ProfilePage() {
    return (
        <>
            <ClientProfilePage />
        </>
    );
}
