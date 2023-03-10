import ButtonPrimary, { ButtonSecondary } from '../../componets/button';

function HomeHeader() {
  return (
    <header>
      <h1 className="text-4xl font-bold">Ángel Díaz</h1>
      <h2 className="mt-2 text-xl">Full-stack web developer</h2>
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quisquam veritatis
        reiciendis libero placeat laudantium expedita earum eligendi incidunt ipsam ullam dicta
        repudiandae vitae quos totam distinctio nemo sunt et.
      </p>
      <nav>
        <ul className="flex items-center">
          <li className="mr-3">
            <ButtonPrimary link="/" text="View portfolio" />
          </li>
          <li>
            <ButtonSecondary link="/" text="View resume" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
