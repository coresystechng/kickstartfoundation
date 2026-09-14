import { Nunito } from 'next/font/google';
import type { Metadata } from 'next';

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// font config
const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito', // Define the CSS variable
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
        className={nunito.variable}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
