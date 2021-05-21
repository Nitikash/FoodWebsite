import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Bloginfo from "../components/Home/Bloginfo";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Blog"
        styleClass="blog-background"
      />
    <Bloginfo />
  </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "blog-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default BlogPage;