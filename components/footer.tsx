import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react"
import WhatsapSvg from "./whatsap-svg"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Creative Web Solutions"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-white text-sm my-4">
              Step into the realm of technological excellence with Creative Web Solutions - your trusted partner in
              driving business innovation and success on a global scale.
            </p>
            <p className="text-white text-sm mb-4">
              At Creative Web Solutions, we stand proudly at the vanguard of technological advancement, offering
              customized solutions to address the diverse needs of businesses worldwide. Backed by a team of seasoned
              professionals, we specialize in delivering state-of-the-art IT services and solutions tailored to propel
              your business forward in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/CreativeWebsiteSolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5 text-white hover:text-[#E91E63] cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/creative-webs-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
              >
                <Linkedin className="w-5 h-5 text-white hover:text-[#E91E63] cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/creativewebssolutions.official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="w-5 h-5 text-white hover:text-[#E91E63] cursor-pointer" />
              </a>
            </div>
          </div>

          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <span
              className="absolute left-0 top-8 h-[2px] bg-[#ff0049] transition-all duration-300 w-32"
            />
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-[#E91E63] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-[#E91E63] text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-[#E91E63] text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-white hover:text-[#E91E63] text-sm">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <span
              className="absolute left-0 top-8 h-[2px] bg-[#ff0049] transition-all duration-300 w-32"
            />
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white hover:text-[#E91E63] text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-[#E91E63] text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-[#E91E63] text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <span className="absolute left-0 top-8 h-[2px] bg-[#ff0049] transition-all duration-300 w-32" />

            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-white hover:text-[#ff0049] mt-0.5" />
                <span className="text-white">UK 167-169 Great Portland Street, London, W1W 5PF</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-white hover:text-[#ff0049] mt-0.5" />
                <span className="text-white">US 1172 Northwest highway Dallas tx 75220</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-white hover:text-[#ff0049] mt-0.5" />
                <a href="mailto:info@creativewebsolutions.com" className="text-white hover:text-[#E91E63] hover:underline">
                  info@creativewebsolutions.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-white hover:text-[#ff0049] mt-0.5" />
                <a href="mailto:matthew@creativewebsolutions.com" className="text-white hover:text-[#E91E63] hover:underline">
                  matthew@creativewebsolutions.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-white hover:text-[#ff0049] mt-0.5" />
                <a href="tel:+19727774163" className="text-white hover:text-[#E91E63] hover:underline">+1 972 777-4163</a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-white hover:text-[#ff0049] mt-0.5" />
                <a href="tel:+442045155008" className="text-white hover:text-[#E91E63] hover:underline">+44 204 515 5008</a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/447506100310"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#E91E63] hover:underline">+44 750 610 0310</a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/4915216652405"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#E91E63] hover:underline">+49 1521 6652405</a>
              </li>
              <li className="flex items-start space-x-2">
                <WhatsapSvg />
                <a
                  href="https://wa.me/19403440682"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with us on WhatsApp"
                  className="text-white hover:text-[#E91E63] hover:underline">+1 940 344 0682</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trustpilot  */}
        <div
          className="trustpilot-widget"
          data-locale="en-US"
          data-template-id="56278e9abfbbba0bdcd568bc"
          data-businessunit-id="685e87b3885e63ea1c7b84aa"
          data-style-height="52px"
          data-style-width="100%"
        >
          <a
            href="https://www.trustpilot.com/review/creativewebssolutions.com"
            target="_blank"
            rel="noopener"
          >
            Trustpilot
          </a>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-white text-sm">
            Copyright © 2025 Creative Web Solutions. All Rights Reserved By{" "}
            <span className="text-[#E91E63]">Creative Web Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
