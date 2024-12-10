import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: 'Blogs By Burhan',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {children}
      </body>
    </html>
  )
}
