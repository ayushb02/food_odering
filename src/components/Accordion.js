import React, { useState } from 'react';
import Food_Items from './Food_Items';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className={isActive === true ? 'accordion-title-active' : 'accordion-title'} onClick={() => setIsActive(!isActive)}>
        <div className='accordion-data'>{title}</div>
        <div className='accordion-data'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content.map((menuItem) => (
          <Food_Items className="food-item-con" key={menuItem?.card?.info?.id} menuData={menuItem} />
        ))}</div>}
    </div>
  );
};

export default Accordion;