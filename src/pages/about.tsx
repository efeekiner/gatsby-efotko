import * as React from "react";
import Layout from "../components/layout";
import { SEO } from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>This is Efe. I'm a Software Engineer.</p>
      <p>I have built this personal page to write about random things I find interesting.</p>
      <p>I am hoping to share my knowledge and experiences with others, while learning and reinforcing my own understanding of some topics.</p>
      <p>Feel free to check out my blog posts!</p>
    </Layout>
  );
};

export const Head = () => <SEO title="About Me" />


export default AboutPage;
