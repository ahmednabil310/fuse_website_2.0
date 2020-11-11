import React from 'react'
import Header from '@/components/header'
import about from '@/assets/images/about-first.png'
import { FormattedMessage } from 'react-intl'

const SectionOne = () => {
  return (
    <section className='about_main'>
      <Header isAboutHeader />
      <div className='about_main__overlay grid-container'>
        <div className='grid-x'>
          <div className='about_main__content medium-12 small-24 grid-y align-center'>
            <h1 className='title'>
              <FormattedMessage
                defaultMessage='Fuse Mission'
              />
            </h1>
            <p className='text'>
              <FormattedMessage
                defaultMessage='Fuse was founded in 2019 with a mission to bring the power of mobile payments to communities around the world.'
              />
            </p>
          </div>
          <div className='about_main__image medium-12 small-24 grid-x align-right'>
            <img src={about} alt='about-image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionOne
