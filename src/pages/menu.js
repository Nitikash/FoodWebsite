import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import MenuElements from "../components/Home/MenuElements";



const MenuPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Menu" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Menu"
        styleClass="menu-background"
      />
            
      <MenuElements />
  
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "menu-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default MenuPage;