import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }

  render() {
    return (
        <html style={{ width: '100%' }}>
        <Head>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEqbuafYAmmED-mafHxKHdXwuXI5xnmRM&libraries=places" async/>
        </Head>
        <body style={{ margin: 0, width: '100%' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;