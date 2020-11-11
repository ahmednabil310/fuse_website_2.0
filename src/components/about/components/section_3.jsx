import React from 'react'
import { FormattedMessage } from 'react-intl'
import mark from '@/assets/images/mark.png'
import adar from '@/assets/images/adar.png'
import andy from '@/assets/images/andy.png'
import ashish from '@/assets/images/ashish.png'
import gilat from '@/assets/images/gilat.png'
import isaac from '@/assets/images/isaac.png'
import leon from '@/assets/images/leon.png'
import lior from '@/assets/images/lior.png'
import mikhail from '@/assets/images/mikhail.png'
import mulenga from '@/assets/images/mulenga.png'
import robert from '@/assets/images/robert.png'
import linkedin from '@/assets/images/linkedin.png'

const members = [
  {
    name: 'Mark Smargon',
    role: <FormattedMessage defaultMessage='Founder & CEO' />,
    picture: mark,
    linked: 'https://www.linkedin.com/in/marksmargon/',
    isLinkedIn: true
  },
  {
    name: 'Leon Prouger',
    role: <FormattedMessage defaultMessage='Tech Lead' />,
    picture: leon,
    linked: 'https://www.linkedin.com/in/leon-prouger-60646540/',
    isLinkedIn: true
  },
  {
    name: 'Lior Agnin',
    role: <FormattedMessage defaultMessage='Fullstack & Moble Developer' />,
    picture: lior,
    linked: 'https://www.linkedin.com/in/lioragnin/',
    isLinkedIn: true
  },
  {
    name: 'Mulenga Bowa',
    role: <FormattedMessage defaultMessage='Front-End Developer' />,
    picture: mulenga,
    isLinkedIn: false
  },
  {
    name: 'Isaac Rodgin',
    role: <FormattedMessage defaultMessage='Head of BD' />,
    picture: isaac,
    linked: 'https://www.linkedin.com/in/isaac-rodgin-58a8897a/',
    isLinkedIn: true
  },
  {
    name: 'Gilat Reiss',
    role: <FormattedMessage defaultMessage='UI/UX Designer' />,
    picture: gilat,
    linked: 'https://www.linkedin.com/in/gilat-reiss-b6086b162/',
    isLinkedIn: true
  },
  {
    name: 'Andy Pohl',
    role: <FormattedMessage defaultMessage='Backend Dev' />,
    picture: andy,
    linked: 'https://www.linkedin.com/in/andrew-pohl-4b52959b/',
    isLinkedIn: true
  },
  {
    name: 'Adar Weinreb',
    role: <FormattedMessage defaultMessage='Head of Product' />,
    picture: adar,
    linked: 'https://www.linkedin.com/in/adar-weinreb-aa630660/',
    isLinkedIn: true
  },
  {
    name: 'Mikhail Dubodel',
    role: <FormattedMessage defaultMessage='Social Media' />,
    picture: mikhail,
    linked: 'https://www.linkedin.com/in/mikhaildubodel/',
    isLinkedIn: true
  },
  {
    name: 'Ashish Ram',
    role: <FormattedMessage defaultMessage='Community Manager' />,
    picture: ashish,
    linked: 'https://www.linkedin.com/in/ashish-ram/',
    isLinkedIn: true
  },
  {
    name: 'Robert Miller',
    role: <FormattedMessage defaultMessage='PR & Communications' />,
    picture: robert,
    linked: 'https://www.linkedin.com/in/rm16/',
    isLinkedIn: true
  }
]

const TeamMember = ({ picture, name, role, linked, isLinkedIn }) => {
  return (
    <div className='card  large-6'>
      <div className='card__content'>
        <img src={picture} alt={name.toLowerCase()} />
        <h2 className='name'>{name}</h2>
        <div className='icons'>
          <h3 className='role'>{role}</h3>
          {
            isLinkedIn && (
              <a
                href={linked}
                rel='noreferrer noopener'
                target='_blank'
              >
                <img src={linkedin} alt='linked in' className='linkedin' />
              </a>
            )
          }
        </div>

      </div>
    </div>
  )
}

const SectionThree = () => {
  return (
    <section className='section_three grid-container'>
      <div className='section_three__wrapper grid-y align-center'>
        <h1 className='title'><FormattedMessage defaultMessage='Meet the Team' /></h1>
        <div className='grid-x align-middle align-justify'>
          {members.map((member, index) => <TeamMember key={index} {...member} />)}
        </div>
      </div>
    </section>
  )
}

export default SectionThree
