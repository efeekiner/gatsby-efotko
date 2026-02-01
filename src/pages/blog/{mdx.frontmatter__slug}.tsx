import React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";
import { graphql } from "gatsby";

interface BlogPostProps {
    data: Queries.BlogPostQuery;
}

const BlogPost = ({ data, children }: React.PropsWithChildren<BlogPostProps>) => {
    console.log(data);
    return (
        <Layout pageTitle={data.mdx?.frontmatter?.title ?? "Blog Post"}>
            <p>{data.mdx?.frontmatter?.date}</p>
            <article>{children}</article>
        </Layout>
    )
}

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }`


export const Head = ({ data }: BlogPostProps) => <SEO title={data.mdx?.frontmatter?.title ?? "Blog Post"} />;

export default BlogPost;