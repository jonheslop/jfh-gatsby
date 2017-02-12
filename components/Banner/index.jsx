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
              backgroundPosition: '20% center'
              }}>
              <div className='dtc v-mid ph3 ph5-ns pt5'>
                <h1 className='f1 f-headline-l fw1 white-90 mw6'>{ config.siteHeadline.replace(/\s([^\s<]{0,10})\s*$/,'\u00a0$1') }</h1>
                <p className='ph0 mh0 measure-narrow f3 f2-l lh-copy i white-90'>
                    { config.siteDescr.replace(/\s([^\s<]{0,10})\s*$/,'\u00a0$1') }
              </p>
            </div>
        </div>
            );
    }
}

export default Banner
