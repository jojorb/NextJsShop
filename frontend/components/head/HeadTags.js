import Head from 'next/head';

const HeadTags = () => (
  <Head>
    <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/slider.css" />
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />

    <link
      rel="stylesheet"
      type="text/css"
      href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
    />

    <link
      href="https://use.fontawesome.com/releases/v5.8.1/css/svg-with-js.css"
      rel="stylesheet"
    />
    <script src="https://js.stripe.com/v3/" />
    <link
      href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
      rel="stylesheet"
    />
  </Head>
);

export default HeadTags;
