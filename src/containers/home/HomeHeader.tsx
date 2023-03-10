import appIcons from '../../assets/img/icons';
import MainButton from '../../componets/button';

function HomeHeader() {
  return (
    <header>
      <h1 className="text-4xl font-bold">Ángel Díaz</h1>
      <h2 className="mt-2 text-xl">Full-stack web developer</h2>
      <p className="mb-5 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quisquam veritatis
        reiciendis libero placeat laudantium expedita earum eligendi incidunt ipsam ullam dicta
        repudiandae vitae quos totam distinctio nemo sunt et.
      </p>
      <nav>
        <ul className="flex flex-col sm:flex-row">
          <li className="mb-3 sm:mr-3 sm:mb-0">
            <MainButton link="/" text="View portfolio" icon={appIcons.arrow} bgColor="BLUE" />
          </li>
          <li>
            <MainButton link="/" text="View resume" icon={appIcons.doc} bgColor="NEUTRAL" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
