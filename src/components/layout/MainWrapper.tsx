import SEO from '@components/SEO';
import type { MainWrapperProps } from 'index';

const MainWrapper = ({ pageTitle, children }: MainWrapperProps) => {
  return (
    <div className="w-screen h-screen">
      <SEO
        pageTitle={pageTitle}
        description={`This is description of ${pageTitle}`}
      />

      {children}
    </div>
  );
};

export default MainWrapper;
