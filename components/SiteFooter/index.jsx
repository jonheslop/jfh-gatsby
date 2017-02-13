import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'
import { config } from 'config'

class SiteFooter extends React.Component {
    render() {
        return (
            <footer role='content-info' className='tc'>
                <div className="mb2 fw7">
                  <p>
                      <a href={ config.socialTwitterURL } className="link green grow-large dib mr3" title="@jonheslop on Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 242.19" className="w1 h1 w2-ns h2-ns pa2">
                        <title>Twitter Logo</title>
                        <path style={{ fill: '#19a974' }} d="M94.72,243.18c112.46,0,174-93.17,174-174q0-4-.17-7.9A124.34,124.34,0,0,0,299,29.66a121.92,121.92,0,0,1-35.11,9.63A61.36,61.36,0,0,0,290.78,5.47,122.62,122.62,0,0,1,252,20.31,61.19,61.19,0,0,0,147.77,76.06a173.61,173.61,0,0,1-126-63.88A61.19,61.19,0,0,0,40.67,93.81,60.68,60.68,0,0,1,13,86.16c0,.26,0,.51,0,.78A61.16,61.16,0,0,0,62,146.87a61,61,0,0,1-27.61,1,61.2,61.2,0,0,0,57.11,42.47,122.65,122.65,0,0,1-75.94,26.17A124.18,124.18,0,0,1,1,215.71a173.07,173.07,0,0,0,93.72,27.46" transform="translate(-1 -0.99)"/>
                      </svg>
                     </a>
                     <a href={ config.socialInstgramURL } className="link green grow-large dib" title="Jon Heslop on Instagram">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.84 503.84"  className="w1 h1 w2-ns h2-ns pa2">
                            <title>Instagram Logo</title>
                            <path style={{ fill: '#19a974' }} d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78.05,78.05,0,0,1,29,18.84,78.05,78.05,0,0,1,18.84,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.56,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.43,83.43,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78.05,78.05,0,0,1-29-18.84,78.05,78.05,0,0,1-18.84-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.56-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78.05,78.05,0,0,1,18.84-29,78.05,78.05,0,0,1,29-18.84c8.88-3.45,22.22-7.55,46.78-8.67,26.56-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.49,123.49,0,0,0,46.36,46.36,123.49,123.49,0,0,0,17.3,91C11.08,107,6.82,125.32,5.6,152.13S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.49,123.49,0,0,0,29.06,44.62A123.49,123.49,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.82,128.82,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.49,123.49,0,0,0-29.06-44.62A123.49,123.49,0,0,0,421,17.3C405,11.08,386.68,6.82,359.87,5.6S324.42,4.08,256,4.08Z" transform="translate(-4.08 -4.08)"/><path style={{ fill: '#19a974' }} d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.36,129.36,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" transform="translate(-4.08 -4.08)"/><circle style={{ fill: '#19a974' }} cx="386.4" cy="117.44" r="30.23"/>
                        </svg>
                     </a>
                     <a href={ config.socialLinkedInURL } className="link green grow-large dib ml3" title="Jon Heslop's LinkedIn profile">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.77 76.25" className="w1 h1 w2-ns h2-ns pa2">
                            <title>LinkedIn Logo</title>
                            <path style={{ fill: '#19a974' }} d="M70.17,1.78H5.6A5.53,5.53,0,0,0,0,7.25V72.57A5.53,5.53,0,0,0,5.6,78H70.17a5.53,5.53,0,0,0,5.6-5.46V7.25A5.53,5.53,0,0,0,70.17,1.78ZM23,65.61H11.52V31.18H23ZM17.25,26.48h-.07c-3.84,0-6.32-2.64-6.32-5.95s2.56-5.95,6.47-5.95,6.32,2.57,6.4,5.95S21.24,26.48,17.25,26.48Zm47,39.13H52.79V47.19c0-4.63-1.66-7.79-5.8-7.79a6.26,6.26,0,0,0-5.87,4.19,7.84,7.84,0,0,0-.38,2.79V65.61H29.3s.15-31.2,0-34.43H40.74v4.88a11.36,11.36,0,0,1,10.31-5.68c7.53,0,13.18,4.92,13.18,15.5Z" transform="translate(0 -1.78)"/>
                        </svg>
                     </a>
                 </p>
                </div>
                <p className="f6">Powered by <a href='https://github.com/gatsbyjs/gatsby' className="link green hover-navy bb">Gatsby</a>, <a href='http://tachyons.io/' className="link green hover-navy bb">Tachyons</a> <i>&</i> <a href='http://bukk.it/magic.gif' className="link green hover-navy bb">Magic</a>.</p>
            </footer>
            );
    }
}

SiteFooter.propTypes = {
    location: React.PropTypes.object,
}

export default SiteFooter
