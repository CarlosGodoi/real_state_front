import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { AuthProvider } from '@/context/authContext'
import { ImmobilesProvider } from '@/context/immobilesContext'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <AuthProvider>
                <ImmobilesProvider>
                    <Header />
                    {children}
                    <Footer />
                </ImmobilesProvider>
            </AuthProvider>
        </div>
    )
}