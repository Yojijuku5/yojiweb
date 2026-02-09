import '@/app/globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from '@/app/sitemap'

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Tatsujin Radio",
        template: "%s",
    },
    description: "Songs from the Taiko no Tatsujin Series.",
    openGraph: {
        title: "Tatsujin Radio",
        description: "Songs from the Taiko no Tatsujin Series",
        url: baseUrl,
        siteName: "Tatsujin Radio",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function radioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={cx("text-white bg-gray-700", "taikoFont")}>
            <body className="antialiased max-w-5xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    {children}
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    )
}