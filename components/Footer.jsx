import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src="/assets/footer/bg.png"
          alt="Footer Background"
          layout="fill" // Ensures the image covers the entire parent
          objectFit="cover" // Maintains aspect ratio and covers the parent element
          className="absolute inset-0"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
          <p>
  <span className="text-xs uppercase tracking-wide text-gray-100">Call us</span>
  <a 
    href="tel:+94123456789"
    className="block text-2xl font-medium text-gray-200 hover:text-accent sm:text-3xl"
  >
    0123456789
  </a>
</p>


            <ul className="mt-8 space-y-1 text-sm text-gray-200">
              <li>Monday to Saturday: 10am - 8pm</li>
              <li>Sunday Closed</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-100 transition hover:text-accent"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebookF className="h-6 w-6" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-100 transition hover:text-accent"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-100 transition hover:text-accent"
                >
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 text-sm text-gray-100">
              <li>
                <a href="/" className="text-gray-100 hover:text-accent">Home</a>
              </li>
              <li>
                <a href="/aboutus" className="text-gray-100 hover:text-accent">About Us</a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-100 hover:text-accent">Cafe Reviews</a>
              </li>
              <li>
                <a href="/contactus" className="text-gray-100 hover:text-accent">Contact Us</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
