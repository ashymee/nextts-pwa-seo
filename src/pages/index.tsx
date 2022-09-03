import MainWrapper from '@components/layout/MainWrapper';
import Nav from '@components/routes/Nav';
import PageTitle from '@components/routes/PageTitle';

const HomePage = () => {
  const title = 'Home Page';

  return (
    <MainWrapper pageTitle={title}>
      <div className="w-full h-full flex flex-col items-center justify-center space-y-3">
        <PageTitle title={title} />

        <Nav />
      </div>
    </MainWrapper>
  );
};

export default HomePage;
