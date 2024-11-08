import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ImmobilesProvider } from '@/context/immobilesContext'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <ImmobilesProvider>
                <Header />
                {children}
                <Footer />
            </ImmobilesProvider>
        </div>
    )
}