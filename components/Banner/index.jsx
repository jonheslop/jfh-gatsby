import React from 'react'
import jonheslop from './jonheslop.jpg'
import { config } from 'config'

class Banner extends React.Component {
    render() {
        return (
            <div className='vh-75 dt w-100 bg-washed-blue mb4 white cover'
                style={{
              backgroundBlendMode: 'luminosity',
              backgroundImage: 'url(' + jonheslop + ')',
              backgroundPosition: 'center center'
              }}>
              <div className='dtc v-mid ph5'>
                <h1 className='f1 f-headline-l fw1 white-90 mw6'>{ config.siteHeadline }</h1>
                <blockquote className='ph0 mh0 measure-narrow f2 lh-copy i'>
                  <p className='white-90 i'>
                    { config.siteDescr }
                  </p>
                </blockquote>
            </div>
        </div>
            );
    }
}

export default Banner
