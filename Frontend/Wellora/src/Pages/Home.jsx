import React from 'react'
import HeroSection from '../Component/HeroSection'
import Navbar from '../Component/Navbar'
import AboutUs from '../Component/AboutUs'
import MedicalService from '../Component/MedicalService'
import Testimonials from '../Component/Testimonials'
import Footer from '../Component/Footer'
import ContactSection from '../Component/ContactSection'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <AboutUs/>
    <MedicalService/>
    <Testimonials/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default Home
