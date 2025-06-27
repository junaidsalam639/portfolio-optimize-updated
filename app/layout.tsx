import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GoToTopButton } from "@/components/go-to-top"
import { WhatsAppFloatingButton } from "@/components/whats-app-floating-button"
import ApolloClientProvider from "@/lib/apollo-client-provider"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Creative Web Solutions - Portfolio",
  description: "Professional web development and digital solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5FQ8MP43');`,
          }}
        />
        <Script
          id="tawk-to"
          strategy="afterInteractive"
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
        <Script id="tawk-chat-tracking" strategy="afterInteractive">
          {`
            function trackTawkChatMessage() {
              if (window.Tawk_API && !window.Tawk_API.__listenerAdded) {
                window.Tawk_API.__listenerAdded = true;
                window.Tawk_API.onChatMessageVisitor = function(message) {
                  if (!window.chatMessageTracked) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: 'tawk_chat_message',
                      message: message
                    });
                    console.log("🎯 Tawk.to first chat message tracked");
                    window.chatMessageTracked = true;
                  }
                };
              }
            }

            // Retry until Tawk_API is available
            let tries = 0;
            let interval = setInterval(function () {
              if (window.Tawk_API) {
                trackTawkChatMessage();
                clearInterval(interval);
              }
              tries++;
              if (tries > 20) clearInterval(interval); // Stop after ~10s
            }, 500);
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FQ8MP43"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
