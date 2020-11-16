import React from 'react'
import { RichText } from 'prismic-reactjs'

import Container from './Container'
import MailchimpForm from './MailchimpForm'

import { hrefResolver, linkResolver } from 'prismic-configuration'

const Footer = ({ settings }) => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-white mt-auto py-16'>
      <Container>
        {settings && settings.data &&
          <div className='flex flex-wrap justify-between mb-10'>
            <div className='w-full md:w-6/12 md:order-1 mb-10'>
              <div>{RichText.render(settings.data.footer_text, linkResolver)}</div>
            </div>
            <div className='w-full md:w-6/12 md:order-3 mb-10'>
              {settings.data.mailchimp_action &&
                <div>
                  <div className='mb-4'><span>{settings.data.mailchimp_label}</span></div>
                  <MailchimpForm mailchimpAction={settings.data.mailchimp_action}/>
                </div>
              }
            </div>
            <div className='w-full md:w-4/12 md:order-2 mb-10'>
              {settings.data.instagram_handle &&
                <div className='mb-4'>
                  <a className='hover:underline' href={`https://instagram.com/${settings.data.instagram_handle}`}>Instagram</a>
                </div>
              }
              {settings.data.soundcloud_handle &&
                <div className='mb-4'>
                  <a className='hover:underline' href={`https://soundcloud.com/${settings.data.soundcloud_handle}`}>Soundcloud</a>
                </div>
              }
            </div>
            <div className='w-full md:w-4/12 md:order-4 mb-10'>
              <div className='text-content'>{RichText.render(settings.data.footer_contact, linkResolver)}</div>
            </div>
          </div>
        }
        <div>
          <span>&copy; {year} Assortment. All rights Reserved.</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
