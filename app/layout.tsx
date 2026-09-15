import { Ojuju } from 'next/font/google';
import type { Metadata } from 'next';

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// font config
const ojuju = Ojuju({
    subsets: ['latin'],
    variable: '--font-ojuju', // Define the CSS variable
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Kickstart Foundation',
    description: 'The Kickstart foundation is a non-profit organization focused on...',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
        lang="en"
        suppressHydrationWarning
        className={ojuju.variable}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
