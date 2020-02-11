import NextHead from 'next/head';
import { string } from 'prop-types';
import { metaTitlte, metaDescription, metaURL, metaImg } from '../../config';

const HeadMeta = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || metaTitlte}</title>
    <meta name="description" content={props.description || metaDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/favicon/fav.png" />
    <link rel="apple-touch-icon" href="/static/favicon/touch-icon.png" />
    <link
      rel="mask-icon"
      href="/static/favicon/favicon-mask.svg"
      color="#49B882"
    />
    <link rel="icon" href="/static/favicon/fav.png" />
    <meta property="og:url" content={props.url || metaURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || metaDescription}
    />
    <meta name="twitter:site" content={props.url || metaURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || metaImg} />
    <meta property="og:image" content={props.ogImage || metaImg} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

HeadMeta.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default HeadMeta;
