// import { findIcon } from '../../assets/img/icons';

// const stack = ['css3', 'html5', 'js', 'psql', 'rails', 'react', 'redux', 'ruby', 'sass', 'ts', 'tailwindcss'];

function StackInfo() {
  // const mapStack = stack.map(item => (
  //   <li key={item} className="p-1 md:p-3 w-10 md:w-24 border border-neutral-500 rounded-md">
  //     <img src={findIcon(item)} alt={item} />
  //   </li>
  // ));

  return (
    <section className="px-3 pt-3 lg:pt-10 lg:px-10">
      <div className="pl-3 border-l-8 border-blue-600">
        <h2 className="text-2xl font-bold">What I do</h2>
      </div>
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste culpa aliquid dicta
        explicabo fuga expedita totam perspiciatis porro ducimus?
      </p>
      {/* <ul className="mt-5">{mapStack}</ul> */}
    </section>
  );
}

export default StackInfo;
