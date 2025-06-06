import React, { useState } from 'react'
import MenuList from "../helpers/MenuList"

const Menu = () => {
  const [menuList, setMenuList] = useState(MenuList);

  return (
    <div className='menudiv'>
      <h1 className="menu-title">Pizzas</h1>
      <div className='menulist'>
        {menuList.map((item) => (
          <div key={item.id} className='menu-item'>
            <img className="menuitem-img" src={item.img} alt="" />
            <div className="menuitem-info">
              <h3 className="menuitem-name" >{item.pizzaname}</h3>
              <h4 className="menuitem-price" >{item.price}TL</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu