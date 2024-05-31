import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi, I'm the creator of this Gatsby site.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="About me" />
  </>
);

export default AboutPage;
