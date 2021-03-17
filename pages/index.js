import Head from 'next/head'
import Layout from '../src/components/layout';
import Posts from '../src/components/home/posts';
import TitleMessage from '../src/components/qin/TitleMessage';
import MembersTextbox from '../src/components/qin/Textbox';
import Description from '../src/components/qin/Description';
import Editarea from '../src/components/qin/Editarea';
import MemberTag from '../src/components/qin/MemberTag';
import CircleColor from '../src/components/color/CircleColor';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="tags" className="text-white"></div>
      <MemberTag user="cti"></MemberTag>
      <MemberTag user="cti" pop={true}></MemberTag>
      <TitleMessage />
      <MembersTextbox />
      <Editarea />
      <Description />
    </Layout>
  )
}