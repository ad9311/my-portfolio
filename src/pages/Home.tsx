import HomeHeader, { StackInfo } from '../containers/home';

function Home() {
  return (
    <>
      <div className="mb-5">
        <HomeHeader />
      </div>
      <div>
        <StackInfo />
      </div>
    </>
  );
}

export default Home;
