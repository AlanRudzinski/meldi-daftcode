import * as React from "react"
import Layout from '../components/Common/Layout/Layout.component'
import Title from '../components/Common/Title/Title.component'
import HeroDescription from '../components/HomePage/HeroSection/HeroDescription/HeroDescription.component'

const NotFoundPage = () => {
  return (
    <Layout>
      <Title>404!</Title>
      <HeroDescription>Sorry, page doesn't exist.</HeroDescription>
    </Layout>
  )
}

export default NotFoundPage
