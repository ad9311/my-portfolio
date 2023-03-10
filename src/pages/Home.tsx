import HomeHeader, { StackInfo } from '../containers/home';

function Home() {
  return (
    <div className="grid grid-rows-2 gap-20">
      <HomeHeader />
      <StackInfo />
    </div>
  );
}

export default Home;
