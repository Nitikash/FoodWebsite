import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {
  FaGlassCheers
} from "react-icons/fa";

const IndexPage = () => (
  <Layout>
    <Seo title="Home"  keywords={[`gatsby`, `application`,`react`]}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaGlassCheers />
  </Layout>
);

export default IndexPage;
