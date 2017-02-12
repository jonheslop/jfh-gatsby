import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'
import { config } from 'config'

class SiteFooter extends React.Component {
    render() {
        return (
            <footer role='content-info' className='tc'>
                <div className="mb4 fw7">
                  <p><Link to={ config.socialTwitterURL } className="link green hover-navy bb mr3">Twitter</Link> ~ <Link to={ config.socialInstgramURL } className="link green hover-navy bb mh3">Instagram</Link> ~ <Link to={ config.socialLinkedInURL } className="link green hover-navy bb ml3">LinkedIn</Link></p>
                </div>
                <p className="f6">Powered by <Link to='https://github.com/gatsbyjs/gatsby' className="link green hover-navy bb">Gatsby</Link>, <Link to='http://tachyons.io/' className="link green hover-navy bb">Tachyons</Link> <i>&</i> <a href='http://bukk.it/magic.gif' className="link green hover-navy bb">Magic</a>.</p>
            </footer>
            );
    }
}

SiteFooter.propTypes = {
    location: React.PropTypes.object,
}

export default SiteFooter
