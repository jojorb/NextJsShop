import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/map/MapIt'),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;
