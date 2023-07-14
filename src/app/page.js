"use client"
import Gallery from '@/components/Gallery/Gallery'
import Hero from '@/components/Hero/Hero'
import Testimonials from '@/components/Testimonials/Testimonials'
import Contact from '@/components/Contact/Contact'
import Services from '@/components/Services/Services'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <>

      <main>
        <Toaster />
        <Hero />
        <Gallery />
        <Testimonials />
        <Contact />
        <Services />
      </main>
    </>
  )
}
