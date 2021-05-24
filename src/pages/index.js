import * as React from "react"
import Layout from '../containers/Layout/Layout.component';
import ContentWrapper from '../containers/ContentWrapper/ContentWrapper.component';
import GlobalStyle from './GlobalStyle';
import Hero from '../components/Hero/Hero.component';
import DataSection from "../components/DataSection/DataSection.component";
import CommunitySection from '../components/CommunitySection/CommunitySection.component';
import OptionsSection from "../components/OptionsSection/OptionsSection.component";

const IndexPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ContentWrapper>
        <Layout>
          <Hero />
          <DataSection />
          <CommunitySection />
          <OptionsSection />
        </Layout>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default IndexPage
