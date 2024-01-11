import { Lato } from "next/font/google"
import './globals.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

export const metadata = {
  title: 'cambioml',
  description: 'Build faster with CambioML',
}

const font = Lato({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <div className="pb-500 pt-[75px] min-h-screen min-w-[650px]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}