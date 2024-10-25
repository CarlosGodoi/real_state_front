import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import { ApiRequestProvider } from "@/context/apiRequestContext";
import { AuthProvider } from "@/context/authContext";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

// const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' })

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist'
})


export const metadata: Metadata = {
  title: "Prestige Imobiliária",
  description: "Sistema para gerenciamento de imóveis.",
  icons: {
    icon: 'favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApiRequestProvider>
      <ApiRequestProvider>
        <AuthProvider>
          <html lang="pt" className={`${urbanist.variable}`}>
            <body className="bg-zinc-50 antialiased font-sans">
              <Theme>
                {children}
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </Theme>
            </body>
          </html>
        </AuthProvider>
      </ApiRequestProvider>
    </ApiRequestProvider>
  );
}
