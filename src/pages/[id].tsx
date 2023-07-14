import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";

async function getUrl(id: string) {
  return await axios.get(process.env.NEXT_PUBLIC_API_URL + "/v2/short/" + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
    },
  });
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log(ctx.params?.id);
  try {
    const response = await getUrl(ctx.params?.id as string);
    const original = response.data.original;

    if (response.status !== 200) {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: original,
        permanent: false,
      },
    };
  } catch (err) {
    // redirect to 404
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Shorten URL</title>
        <meta
          name="description"
          content="Create shortened links that can easily be shared and tracked. "
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="shorten, trim, tinyurl, url"></meta>
      </Head>
    </>
  );
}
