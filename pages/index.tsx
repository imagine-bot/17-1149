// ./pages/index.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Link href="/UserTableExample">Go to User Table Example</Link>
      <Link href="/">Back</Link>
    </main>
  );
}