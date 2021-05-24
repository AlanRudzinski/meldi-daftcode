import * as React from "react"
import Layout from '../components/Common/Layout/Layout.component';
import GlobalStyle from '../GlobalStyle';
import HeroSection from '../components/HomePage/HeroSection/HeroSection.component';
import DataSection from "../components/HomePage/DataSection/DataSection.component";
import CommunitySection from '../components/HomePage/CommunitySection/CommunitySection.component';
import OptionsSection from "../components/HomePage/OptionsSection/OptionsSection.component";

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
        <Layout>
          <HeroSection />
          <DataSection />
          <CommunitySection />
          <OptionsSection />
        </Layout>
    </React.Fragment>
  )
}

export default IndexPage
