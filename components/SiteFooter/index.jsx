import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'

class SiteFooter extends React.Component {
    render() {
        return (
            <footer role='content-info' className='tc f6'>
                <p>Powered by <Link to='https://github.com/gatsbyjs/gatsby' className="link green hover-navy bb">Gatsby</Link>, <Link to='http://tachyons.io/' className="link green hover-navy bb">Tachyons</Link> <i>&</i> <Link to='http://bukk.it/magic.gif' className="link green hover-navy bb">Magic</Link>.</p>
            </footer>
            );
    }
}

SiteFooter.propTypes = {
    location: React.PropTypes.object,
}

export default SiteFooter
