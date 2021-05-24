import * as React from "react"
import Layout from '../containers/Layout/Layout.component';
import GlobalStyle from '../GlobalStyle';
import HeroSection from '../components/HeroSection/HeroSection.component';
import DataSection from "../components/DataSection/DataSection.component";
import CommunitySection from '../components/CommunitySection/CommunitySection.component';
import OptionsSection from "../components/OptionsSection/OptionsSection.component";

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
