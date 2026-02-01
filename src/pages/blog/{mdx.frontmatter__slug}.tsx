import React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";

const BlogPost = () => {
    return (
        <Layout pageTitle="Nice Posts">
            <p>This is where my blog posts will go!</p>
        </Layout>
    )
}


export const Head = () => <SEO title="Blog Post" />;

export default BlogPost;