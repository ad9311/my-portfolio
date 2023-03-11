import { t } from 'i18next';
import appIcons from '../../assets/img/icons';
import MainButton from '../../componets/button';

function HomeHeader() {
  return (
    <header>
      <div className="block mb-10  md:hidden">
        <img className="w-44" src="https://via.placeholder.com/700x700.jpeg" alt="ange-diaz" />
      </div>
      <div className="block md:grid grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold">Ángel Díaz</h1>
          <h2 className="mt-2 text-xl">{t('containers.home.fullStackDeveloper')}</h2>
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
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img className="w-52 h-52 rounded-md" src="https://via.placeholder.com/700x700.jpeg" alt="ange-diaz" />
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
