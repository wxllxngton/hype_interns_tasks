import { Metadata } from 'next';
import HomePage from './home/page';

export const metadata: Metadata = {
    title: 'NextConnect',
    description: 'Sample social media web app built with Next.js',
};

export default function App() {
    return <HomePage />;
}
