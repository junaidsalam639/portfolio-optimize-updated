import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoToTopButton } from "@/components/go-to-top"
import { WhatsAppFloatingButton } from "@/components/whats-app-floating-button"
import ApolloClientProvider from "@/lib/apollo-client-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: "Creative Web Solutions - Portfolio",
  description: "Professional web development and digital solutions",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="lazyOnload"
        />
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6239f19d2bd26d087e742876/1fup5fk6a';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ApolloClientProvider>
          <Header />
          <main>{children}</main>
          <GoToTopButton />
          <WhatsAppFloatingButton />
          <Footer />
        </ApolloClientProvider>
      </body>
    </html>
  )
}
