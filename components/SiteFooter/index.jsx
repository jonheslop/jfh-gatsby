import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'

class SiteFooter extends React.Component {
    render() {
        return (
            <footer role='content-info' className='tc f6'>
                <p>Powered by <Link to='https://github.com/gatsbyjs/gatsby' className="link green hover-navy bb">Gatsby</Link>.</p>
            </footer>
            );
    }
}

SiteFooter.propTypes = {
    location: React.PropTypes.object,
}

export default SiteFooter
