import './globals.css'


export const metadata = {
    title: 'BudgetBuddy — Track. Save. Smile.',
    description: 'Playful budget tracker app landing page built with Next.js + Tailwind',
}


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
