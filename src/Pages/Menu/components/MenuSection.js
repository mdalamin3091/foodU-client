import React, {useState} from 'react'
import Tab from "../../../Shared/Tab";
import MenuItem from './MenuItem';
const MenuSection = () => {
  const [openTab, setOpenTab] = useState("Pizza");
  return (
    <div className='container section-padding font-JosefinSans'>
        <h2 className="section-title text-center text-4xl">Menus Of The Day</h2>
        <Tab openTab={openTab} setOpenTab={setOpenTab} />
        {/* menu item */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 lg:p-0">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
    </div>
  )
}

export default MenuSection