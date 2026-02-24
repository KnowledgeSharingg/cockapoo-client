import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tech Blogs - 국내외 기술 블로그 모음',
  description: '국내외 주요 기업들의 기술 블로그를 한 곳에서 만나보세요. 카카오, 네이버, 구글, 마이크로소프트 등 다양한 기업의 최신 기술 동향을 확인하세요.',
  keywords: '기술블로그, 개발블로그, 카카오, 네이버, 구글, 마이크로소프트, 엔지니어링',
  authors: [{ name: 'seongkyu-lim' }],
  openGraph: {
    title: 'Tech Blogs - 국내외 기술 블로그 모음',
    description: '국내외 주요 기업들의 기술 블로그를 한 곳에서 만나보세요.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}