import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shorten URL | Not Found</title>
        <meta
          name="description"
          content="Create shortened links that can easily be shared and tracked. "
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="shorten, trim, tinyurl, url"></meta>
      </Head>
      <div>404 Not found</div>
    </>
  );
}
