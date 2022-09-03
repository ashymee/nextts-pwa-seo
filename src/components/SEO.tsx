import constants from '@utils/constants';
import { SEOProps } from 'index';
import Head from 'node_modules/next/head';

import { FC } from 'react';

const SEO: FC<SEOProps> = ({ pageTitle, description }) => {
  return (
    <Head>
      <title>{`${constants.publicInfo.appName} | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="apple-mobile-web-app-title" content={description} />
    </Head>
  );
};

export default SEO;
