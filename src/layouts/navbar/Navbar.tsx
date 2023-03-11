import { useState } from 'react';
import appIcons from '../../assets/img/icons';
import Sidebar from '../sidebar';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-3 flex items-center lg:hidden bg-blue-600">
        <button type="button" onClick={() => setOpen(prev => !prev)}>
          <img className="w-6" src={appIcons.menu} alt="menu" />
        </button>
      </div>
      <div className="relative block lg:hidden">
        <div
          className={`absolute top-0 ${
            open ? 'left-0' : '-left-full'
          } w-full transition-all ease-in-out duration-300`}>
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Navbar;