import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

    </Layout>
  )
}