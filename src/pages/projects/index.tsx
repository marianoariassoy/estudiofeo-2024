import Layout from '../../layout/'
import { HeadProvider, Title } from 'react-head'
import HomeSection from '../../components/HomeSection'

const index = () => {
  return (
    <Layout>
      <HomeSection section={1} />

      <HeadProvider>
        <Title>FEO - Projects</Title>
      </HeadProvider>
    </Layout>
  )
}

export default index
