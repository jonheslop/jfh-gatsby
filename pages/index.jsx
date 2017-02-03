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
                const period = access(page, 'data.period')
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')
                const logo = access(page, 'data.logo')
                const postPath = access(page, 'data.path')
                const bg = access(page, 'data.logoBG') || 'near-black'

                pageLinks.push(
                    <div className='project-timeline-block pb3 mb5 relative cf'>
                        <div className='project-timeline-block-brand absolute top-0 left-0'>
                          <img src={ postPath + logo } className={`dib border-box w3 h3 w4-ns h4-ns br-100 bg-${ bg } ba bw4 b--${ bg }`} alt='Rapha&reg;' />
                        </div>
                        <div className='fr w-100 lh-copy pl6 pl7-ns pr3 pr6-l relative'>
                            <h2 className='ma0'><Link className='link green hover-navy' to={ prefixLink(page.path) } > { title }, <span className="fw4">{ period }</span> </Link></h2>
                          <p className="f4 measure" dangerouslySetInnerHTML={ {    __html: description} } />
                          <Link className='f4 i link green hover-navy bb' to={ prefixLink(page.path) }> Learn more
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
                  <section className='project-timeline--brands relative pa3 mv6'>
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
