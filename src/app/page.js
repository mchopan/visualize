"use client"
import Gallery from '@/components/Gallery/Gallery'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Testimonials from '@/components/Testimonials/Testimonials'
import Contact from '@/components/Contact/Contact'
import Services from '@/components/Services/Services'
import Footer from '@/components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <>

      <main>
        <Toaster />
        <Header />
        <Hero />
        <Gallery />
        <Testimonials />
        <Contact />
        <Services />
        <Footer />
      </main>
    </>
  )
}
