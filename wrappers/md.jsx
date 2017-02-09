import React from 'react'
import Helmet from 'react-helmet'
import SiteJob from '../components/SiteJob'
import SitePage from '../components/SitePage'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout == 'job') {
            template = <SiteJob {...this.props}/>
        } else if (layout == 'page') {
            template = <SitePage {...this.props}/>
        }

        return (
            <div>
              <Helmet title={ `${post.title} - ${config.siteTitle}` }/>
              { template }
            </div>
            );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
