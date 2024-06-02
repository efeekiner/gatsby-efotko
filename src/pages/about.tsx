import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi, I'm the creator of this Gatsby site.</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />


export default AboutPage;
