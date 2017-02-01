import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import '../static/css/tachyons.css'
import '../static/css/app.css'
import '../static/css/slick.css'
import '../static/css/slick-theme.css'
import $ from 'jquery';
import '../static/js/slick.min.js'

class Template extends React.Component {
    render() {
        const {location, children} = this.props

        return (
            <div className='wrapper'>
              { children }
            </div>
            );
    }
}

Template.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template
