import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/Logo/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Oswald:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* BEGIN CSS STYLES */}
        <link
          rel="stylesheet"
          href="styles/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="fonts/font-awesome/css/line-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="styles/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="styles/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="styles/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="styles/swiper.css"
          type="text/css"
          media="all"
        />
        <link rel="stylesheet" href="style.css" type="text/css" media="all" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
