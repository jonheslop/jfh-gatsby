import React from 'react'
import { RouteHandler, Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SiteNav from '../components/SiteNav'
import Banner from '../components/Banner'
import SitePost from '../components/SitePost'

class SiteIndex extends React.Component {
    render() {
        const {location, children} = this.props
        const isHome = location.pathname === prefixLink('/')
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')

                pageLinks.push(
                    <div className='project-timeline-block pb3 mb5 relative cf'>
                        <div className='project-timeline-block-brand absolute top-0 left-0'>
                          <img src='#' className='dib border-box w3 h3 w4-ns h4-ns br-100 bg-near-black ba bw4 b--near-black' alt='Rapha&reg;' />
                          <h4 className='lh-title ma0 tc'>
                            2013 - 2016
                          </h4>
                        </div>
                        <div className='fr w-100 lh-copy pl6 pl7-ns pr3 pr6-l relative'>
                            <h2 className='ma0'><Link className='link green hover-navy' to={ prefixLink(page.path) } > { title } </Link></h2>
                          <h4 className='lh-title ma0 mb3'>
                            2013 - 2016
                          </h4>
                          <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                            { moment(datePublished).format('MMMM YYYY') }
                          </time>
                          <span style={ {    padding: '5px'} }></span>
                          <span className='blog-category'>{ category }</span>
                          <p dangerouslySetInnerHTML={ {    __html: description} } />
                          <Link className='link green hover-navy bb' to={ prefixLink(page.path) }> Read
                          </Link>
                        </div>
                    </div>
                )
            }
        })

        return (
            <div>
              <Helmet title={ config.siteTitle }/>
              <SiteNav {...this.props}/>
                { isHome ? (
                    <Banner/>
                ) :
                    ''
                }
              <main role='main' className='ph3 ph5-ns cf'>
                  <section className='project-timeline--brands relative pa3 mt6'>
                    { pageLinks }
                  </section>
            </main>
            </div>
              )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
