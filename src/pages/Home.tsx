import HomeHeader, { StackInfo } from '../containers/home';

function Home() {
  return (
    <>
      <div className="mb-20 bg-neutral-100">
        <HomeHeader />
      </div>
      <div>
        <StackInfo />
      </div>
    </>
  );
}

export default Home;
