import { ReactNode } from 'react';

type SEOProps = {
  pageTitle: string;
  description?: string;
};

type MainWrapperProps = SEOProps & {
  children: ReactNode;
};
