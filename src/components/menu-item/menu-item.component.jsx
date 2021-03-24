import React from 'react';

import './menu-item.styles.scss';

// destructure title, subititle, etc off props
const MenuItem = ({title, subtitle, imageUrl, size}) => (
  <div 
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
  >
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>{subtitle.toUpperCase()}</span>
    </div>
  </div>
);

export default MenuItem;