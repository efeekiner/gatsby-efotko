import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";
import { graphql } from "gatsby";

interface BlogPostProps {
  data: Queries.BlogPostQuery;
}

const BlogPost = ({ data, children }: React.PropsWithChildren<BlogPostProps>) => {

  const heroImage = data.mdx?.frontmatter?.hero_image;
  const image = heroImage?.childImageSharp?.gatsbyImageData;

  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title ?? "Blog Post"}>
      <p>Posted: {data.mdx?.frontmatter?.date}</p>
      {image && (<><GatsbyImage
        image={image}
        alt={data.mdx?.frontmatter?.hero_image_alt ?? 'Blog post hero image'}
      />
        <p>
          Photo Credit:{" "}
          <a href={data.mdx?.frontmatter?.hero_image_credit_link ?? '#'} target="_blank" rel="noopener noreferrer">
            {data.mdx?.frontmatter?.hero_image_credit_text}
          </a>
        </p>
      </>)

      }

      {children}
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`


export const Head = ({ data }: BlogPostProps) => <SEO title={data.mdx?.frontmatter?.title ?? "Blog Post"} />;

export default BlogPost;