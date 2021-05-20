import React from "react";
import { Link, graphql} from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Contact from "../components/Home/Contact";



const IndexPage = ( { data } ) => (
  <Layout>
    <Seo title="Home"  keywords={[`gatsby`, `application`,`react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} title="Head Over Meals" styleClass="default-background" /> <Info />
  
  <Contact />

    </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "default-background.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
export default IndexPage;
