import { Nunito } from 'next/font/google';

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// font config
const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito', // Define the CSS variable
    display: 'swap',
});

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
