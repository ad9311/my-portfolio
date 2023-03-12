import { useState } from 'react';
import appIcons from '../../assets/img/icons';
import Sidebar from '../sidebar';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0">
      <div className="p-3 flex items-center lg:hidden bg-blue-600">
        <button type="button" onClick={() => setOpen(prev => !prev)}>
          <img className="w-6" src={appIcons.menu} alt="menu" />
        </button>
      </div>
      <div className="relative block lg:hidden">
        <div
          className={`absolute top-3 ${
            open ? 'left-3' : '-left-full'
          } w-full transition-all ease-in-out duration-300`}>
          <Sidebar type="MENU" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
