import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import { SEO } from '../../components/seo'

interface BlogPageProps {
  data: Queries.BlogQueryQuery
}

const BlogPage = ({ data }: BlogPageProps) => {
  const nodes = data.allMdx.nodes ?? [];

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.frontmatter?.slug ?? '#'}`}>
                  {node.frontmatter?.title ?? 'Untitled'}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter?.date ?? 'No Date'}</p>
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
          slug
        }
        id
        excerpt
      }
    }
  }`

export default BlogPage