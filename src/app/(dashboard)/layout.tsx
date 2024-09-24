import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ReactNode, Suspense } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}