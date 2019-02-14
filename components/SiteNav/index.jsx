import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='dt w-100 border-box pa3 ph5-ns absolute top-0' style={{zIndex: 999}}>
                <Link to={ prefixLink('/')} className='dtc v-mid mid-gray link dim w-25' title='Home' activeClassName='current' onlyActiveOnIndex>
                    <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 682.17 682.18'  className='dib w3 h3 br-100 bg-white' style={{ boxShadow: 'inset 0px 0px 0px .5em #19a974' }}>
                      <title>jfh-logo</title>
                      <path fill="#19a974" d='M211.65,20.88V703.05H893.82V20.88ZM421.33,465.25s0,18.68-18.33,41.45c-21.23,26.36-26,28.59-26,28.59l-28-30.35,19.11-18.09s6.57-7.45,6.57-14.6,0-177.59,0-177.59l46.72-9.34Zm311.48-60.08-46.73,9.34V344.43l-54.57,10.91v70.08l-46.73,9.35V296.93L503,313.29V339l46.77-9.34V371.7L503,381v70.08l-46.66,9.35-.06-182.22,175.27-35v70.09l54.57-10.91V232.29l46.73-9.34Z' transform='translate(-211.65 -20.88)'/>
                    </svg>
                </Link>
              <div className='dtc v-mid w-75 tr'>
                  <a href="https://notes.jonheslop.com" className='link washed-blue underline-hover f5 f5-ns dib mr3' title='Week Notes'>
                      Blog
                  </a>
                  <Link to="mailto:jon@jonheslop.com" target="_blank" className='link washed-blue underline-hover f5 f5-ns dib' title='Contact' activeClassName='current'>
                      Email
                  </Link>
              </div>
            </nav>
            );
    }
}
SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
