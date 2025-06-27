import PageBanner from "@/components/page-banner"
import ContactCard from "@/components/contact/contact-card"
import ContactForm from "@/components/contact/contact-form"
import ContactNewsLetter from "@/components/contact/contact-news-letter"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageBanner title="Contact Us" />
      <ContactCard />
      <ContactForm />
      <ContactNewsLetter />
    </div>
  )
}
