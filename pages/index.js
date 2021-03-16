import Head from 'next/head'
import Layout from '../src/components/layout';
import Posts from '../src/components/home/posts';
import TitleMessage from '../src/components/qin/TitleMessage';
import MembersTextbox from '../src/components/qin/Textbox';
import Description from '../src/components/qin/Description';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TitleMessage />
      <MembersTextbox />
      <Description />
    </Layout>
  )
}