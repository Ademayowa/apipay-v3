import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@100;200;300;400;500;600&family=Public+Sans:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
