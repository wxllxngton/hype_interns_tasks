import { Metadata } from 'next';
import ClientSettingsPage from './ClientSettingsPage';

export const metadata: Metadata = {
    title: 'NextConnect Settings',
    description: 'Sample social media web app built with Next.js',
};

export default function SettingsPage() {
    return (
        <>
            <ClientSettingsPage />
        </>
    );
}
