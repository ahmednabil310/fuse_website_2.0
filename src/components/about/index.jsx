import React from 'react'
import SectionOne from './components/section_1'
import SectionTwo from './components/section_2'
import SectionFour from './components/section_4'
import ContactUs from '@/components/shared/ContactUs'
import Footer from '@/components/footer'

const About = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <ContactUs />
      <Footer isNetworkFooter />
    </>
  )
}

export default About
