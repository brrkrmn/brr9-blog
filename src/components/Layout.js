import { Inter } from 'next/font/google'
import { Footer } from "src/components/Footer"
import { Navbar } from "src/components/Navbar"
import { ThemeProvider } from 'src/components/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Berra Karaman",
  description: "A self-taught developer's blog."
}

export default function Layout ({ children }) {
  return (
    <div className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex min-h-screen flex-col space-y-6">
          <header className="top-0 bg-background">
            <Navbar />
          </header>
          <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  )
}