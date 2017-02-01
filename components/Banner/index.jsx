import React from 'react'
import jonheslop from './jonheslop.jpg'

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
                <h1 className='f1 fw1 i white-60'>Jon Heslop is</h1>
                <blockquote className='ph0 mh0 measure f4 lh-copy'>
                  <p className='fw1 white-70'>
                    It's the space you put between the notes that make the music.
                  </p>
                  <cite className='f6 ttu tracked fs-normal'>Massimo Vignelli</cite>
                </blockquote>
            </div>
        </div>
            );
    }
}

export default Banner
