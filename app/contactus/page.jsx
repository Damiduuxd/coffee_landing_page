"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Badge from '@/components/Badge';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';

function Page() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Your message was sent successfully ✅');

          // Clear form fields
          setFirstName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error('Failed to send email. Please try again.');
        }
      );
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setPhone(value);
    } else {
      toast.error('Invalid characters in phone number');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      toast.error('First name is empty');
      return;
    }

    if (!lastName) {
      toast.error('Last name is empty');
      return;
    }

    if (!email) {
      toast.error('Email is empty');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email address');
      return;
    }

    if (!phone) {
      toast.error('Phone number is empty');
      return;
    }

    if (!message) {
      toast.error('Message is empty');
      return;
    }

    console.log('Form submitted with data:', {
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    sendEmail(e);
  };

  return (
    <div>
      <section className="bg-accent/65 text-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 z-40 relative">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <Image
              alt="Opening hours image"
              src="/assets/opening-hours/img.png"
              quality={100}
              priority
              width={800}
              height={600}
              className="w-full h-full object-cover relative z-0"
            />
            <div className="absolute inset-0 flex justify-center items-center z-20">
              <Badge containerStyles="w-[320px] h-[320px]" />
            </div>
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl w-full relative mx-auto lg:mx-0">
              <h1 className="mt-12 text-2xl font-bold sm:text-3xl md:text-4xl relative z-10 text-center lg:text-left">
                Welcome to Zonbrew ☕️
              </h1>

              <p className="mt-4 leading-relaxed relative z-10 text-center lg:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>

              <form ref={form} onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6 relative z-10">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="firstName"
                    placeholder='Damidu'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm h-9"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="lastName"
                    placeholder='Abeysinghe'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm h-9"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    placeholder='damidu362@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm h-9"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="Phone"
                    name="phone"
                    placeholder='0771234567'
                    value={phone}
                    onChange={handlePhoneChange}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm h-9"
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="Message"
                    name="message"
                    rows="4"
                    placeholder='type your message here'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-black shadow-sm"
                  />
                </div>

                <div className="col-span-6">
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-primary px-8 py-3 text-base font-medium text-white shadow-sm ring-1 ring-gray-900/5 hover:bg-accent-hover transition-transform transform hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default Page;
