import { GetStaticProps, NextPage, NextPageContext } from "next"
import Head from "next/head"

// ページコンポーネントの型定義
type SSGProps = {
  message: String,
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>SSG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          静的サイト
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行された`

  return {
    props: {
      message,
    },
  }
}

export default SSG