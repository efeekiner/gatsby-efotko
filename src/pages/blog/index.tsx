import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { SEO } from '../../components/seo'

interface BlogPageProps {
  data: Queries.BlogQueryQuery
}

const BlogPage = ({ data }: BlogPageProps) => {

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                {node.frontmatter?.title ?? 'No Title'}
              </h2>
              <p>Posted: {node.frontmatter?.date ?? 'No Date'}</p>
              <p>{node.excerpt}</p>
            </article>

          ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <SEO title="My Blog Posts" />

export const query = graphql`
  query BlogQuery {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }`

export default BlogPage